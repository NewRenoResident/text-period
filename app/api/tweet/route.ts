import { auth } from "@/lib/auth";
import { connectToDb } from "@/lib/utils";
import { Tweet } from "@/models/tweets";
import { User } from "@/models/users";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (request: Request, context: any) => {
  const data = await request.json();
  const user = await User.findOne({ email: data.email });
  const authorId = user?._id;

  try {
    connectToDb();
    const tweet = {
      authorId: authorId,
      content: data.content,
      img: data.img || undefined,
      likes: [],
      retweets: [],
    };

    const newTweet = new Tweet({
      authorId: authorId,
      content: data.content,
      img: data.img || undefined,
      likes: [],
      retweets: [],
    });
    await newTweet.save();
    // res.status(200).json(tweet);
    return NextResponse.json({ newTweet }, { status: 500 });
  } catch {
    return NextResponse.json(
      { error: "Error creating tweet" },
      { status: 500 }
    );
  }
};
export const GET = async (request: NextRequest) => {
  try {
    connectToDb();
    const searchParams = request.nextUrl.searchParams;
    const offset = parseInt(searchParams.get("offset") || "0", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const isValidOffset = !isNaN(offset) && offset >= 0;
    const isValidLimit = !isNaN(limit) && limit > 0;

    const tweets =
      isValidOffset && isValidLimit
        ? await Tweet.find()
            .skip(offset)
            .limit(limit)
            .populate({
              path: "authorId",
              select: "-passwordHash",
            })
            .sort({ createdAt: -1 })
        : await Tweet.find().populate("authorId").sort({ createdAt: -1 });

    return NextResponse.json({ tweets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting tweets" },
      { status: 500 }
    );
  }
  // try {
  //   connectToDb();
  //   console.log("PARAMS"  params);

  //   let tweets = await Tweet.find();
  //   if (params) {
  //     tweets = await Tweet.find().skip(params.offset).limit(params.limit);
  //   } else {
  //     tweets = await Tweet.find();
  //   }
  //   return NextResponse.json({ tweets }, { status: 200 });
  // } catch {
  //   return NextResponse.json(
  //     { error: "Error getting tweets" },
  //     { status: 500 }
  //   );
  // }
};
