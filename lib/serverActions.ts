"use server";
import { User } from "@/models/users";
import { signIn } from "./auth";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { writeFile } from "fs/promises";
import path from "path";
import { IUser } from "@/models/types";
import { Tweet } from "@/models/tweets";
import { Tweet as ITweet } from "@/app/components/Tweets/types";
import email from "next-auth/providers/email";
import { Comment } from "@/models/comments";

export const getUserByEmail = async (
  email: string
): Promise<IUser | { error: string }> => {
  "use server";

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { error: "User not found" };
    }

    return user;
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const handleSubmit = async (event) => {
  "use server";
  event.preventDefault();
  // Extract credentials (email, password) from form data
  const credentials = { email: "test", password: "test" }; // ...
  await signIn("credentials", credentials);
};

export const goToRegisterPage = async () => {
  "use server";
  redirect("register");
};

export const goToLoginPage = async () => {
  "use server";
  redirect("login");
};

export const register = async (previousState, formData: FormData) => {
  "use server";
  const { username, email, password, img, repeatPassword } =
    Object.fromEntries(formData);
  if (repeatPassword !== password) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ email });

    if (user) {
      return { error: "Username already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      passwordHash: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const login = async (formData) => {
  "use server";

  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

export const handleLogin = async () => {
  "use server";
  await signIn();
};

type FormDataEntries = {
  wallpaperFile: File;
  userPicFile: File;
  name: string;
  about: string;
  location: string;
  website: string;
  birthday: string;
};

const writeFileToDisk = async (image: File) => {
  const buffer = Buffer.from(await image.arrayBuffer());
  const filename = Date.now() + image.name.replaceAll(" ", "_");
  try {
    let flpath = path.join(process.cwd(), "public/uploads/" + filename);
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );
    return filename;
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const updateUser = async (userId: string, formData: FormData) => {
  "use server";
  const {
    wallpaperFile,
    userPicFile,
    fullName,
    about,
    location,
    website,
    dateOfBirthday,
  } = Object.fromEntries(formData) as FormDataEntries;
  connectToDb();
  console.log(Object.fromEntries(formData));

  const wallpaperImagePath =
    wallpaperFile.name !== "undefined" &&
    (await writeFileToDisk(wallpaperFile));
  const userImagePath =
    userPicFile.name !== "undefined" && (await writeFileToDisk(userPicFile));
  const user = await User.findOneAndUpdate(
    { _id: userId },
    {
      profileInfo: {
        fullName: fullName,
        bio: about,
        location: location,
        website,
        dateOfBirth: dateOfBirthday,
      },
      wallpaperImg: wallpaperImagePath || undefined,
      img: userImagePath || undefined,
    } as IUser,
    { new: true }
  );

  const userJson = JSON.stringify(user);

  return userJson;
};

export const loadUser = async (userId: string) => {
  "use server";
  try {
    connectToDb();
    const user = await User.findOne({ _id: userId }).select("-passwordHash");
    const userJSON = JSON.stringify(user);

    return { user: userJSON };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const getUserTweetsCount = async (userId: string) => {
  "use server";
  try {
    connectToDb();
    const tweets = await Tweet.find({ authorId: userId }).sort({
      createdAt: -1,
    });
    let len = "" + tweets.length;
    console.log(len);

    return { count: len };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};

export const createTweet = async (userId: string, formData: FormData) => {
  "use server";
  try {
    connectToDb();
    const { content } = Object.fromEntries(formData);

    const newTweet = new Tweet({
      authorId: userId,
      content: content,
      likes: [],
      retweets: [],
    });
    const result = await newTweet.save();
    const author = await User.findOne({ _id: result.authorId });

    return {
      tweet: {
        authorId: {
          username: author?.username,
          email: author?.email,
          wallpaperImg: author?.wallpaperImg,
          _id: author?._id,
          profileInfo: {
            fullName: author?.profileInfo.fullName,
            bio: author?.profileInfo.bio,
            location: author?.profileInfo.location,
            website: author?.profileInfo.website,
            dateOfBirth: author?.profileInfo.dateOfBirth,
          },
          img: author?.img,
          followers: author?.followers,
          following: author?.following,
        },
        content: result.content,
        likes: result.likes,
        retweets: result.retweets,
        _id: "" + result._id,
        createdAt: result.createdAt.toISOString(),
        updatedAt: result.updatedAt.toISOString(),
      },
    };
  } catch (error) {
    return {
      error: "Error creating tweet",
    };
  }
};

export const deleteTweetById = async (tweetId: string) => {
  "use server";
  connectToDb();
  const res = await Tweet.deleteOne({ _id: tweetId });
  return { result: res };
};

export const getTweetById = async (tweetId: string) => {
  "use server";
  connectToDb();
  const tweet = await Tweet.findOne({ _id: tweetId }).populate({
    path: "authorId",
    select: "-passwordHash",
  });

  if (tweet) {
    const { _id, authorId, __v, ...preSimpleTweet } = tweet._doc;
    const simpleTweet = {
      _id: "" + _id,
      authorId: {
        _id: authorId?.id,
        username: authorId?.username,
        email: authorId?.email,
      },
      ...preSimpleTweet,
    };

    return { tweet: simpleTweet };
  }
};

export const setLikeById = async (tweetId: string, userId: string) => {
  "use server";
  connectToDb();
  const updatedTweet = await Tweet.findByIdAndUpdate(
    tweetId,
    [
      {
        $set: {
          likes: {
            $cond: [
              { $in: [userId, "$likes"] },
              { $setDifference: ["$likes", [userId]] },
              { $concatArrays: ["$likes", [userId]] },
            ],
          },
        },
      },
    ],
    { new: true }
  );
  return JSON.stringify({ jsonTweetLikes: updatedTweet?.likes });
};

export const loadComments = async (tweetId?: string) => {
  const comments = await Comment.find({ tweetId: tweetId })
    .sort({ createdAt: -1 })
    .populate({
      path: "authorId",
      select: "-passwordHash",
    });

  if (comments.length > 0) {
    return JSON.stringify(comments);
  } else {
    return JSON.stringify([]);
  }
};

export const loadCommentsWithOffsetAndLimit = async (
  offset?: number,
  limit?: number,
  tweetId?: string
) => {
  const comments = await Comment.find({ tweetId: tweetId })
    .sort({ createdAt: -1 })
    .skip(offset)
    .limit(limit)
    .populate({
      path: "authorId",
      select: "-passwordHash",
    });

  if (comments.length > 0) {
    return JSON.stringify(comments);
  } else {
    return JSON.stringify([]);
  }
};
