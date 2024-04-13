import { auth } from "@/lib/auth";
import { connectToDb } from "@/lib/utils";
import { Tweet } from "@/models/tweets";
import { User } from "@/models/users";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (request: Request, context: any) => {
  const data = await request.json();

  try {
    connectToDb();
    const tweet = {
      authorId: data.authorId,
      content: data.content,
      img: data.img || undefined,
      likes: [],
      retweets: [],
    };

    const newTweet = new Tweet({
      authorId: data.authorId,
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
    await connectToDb();
    const searchParams = request.nextUrl.searchParams;
    const offset = searchParams.get("offset");
    const limit = searchParams.get("limit");
    const userId = searchParams.get("userId");
    let count = searchParams.get("count");
    const countBool = count?.toLowerCase() === "true";
    const tweets = await Tweet.find(
      userId !== "undefined" ? { authorId: userId } : {}
    )
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit)
      .populate({
        path: "authorId",
        select: "-passwordHash",
      });

    if (countBool) {
      return NextResponse.json({ count: tweets.length }, { status: 200 });
    }

    return NextResponse.json({ tweets }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error getting tweets" },
      { status: 500 }
    );
  }
};
