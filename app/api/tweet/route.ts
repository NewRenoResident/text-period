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
    connectToDb();
    const searchParams = request.nextUrl.searchParams;
    const offset = parseInt(searchParams.get("offset") || "0", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const userId = searchParams.get("userId");
    let count = searchParams.get("count");
    const countBool = count?.toLowerCase() === "true";

    const tweets = await Tweet.find(userId ? { authorId: userId } : {})
      .skip(offset)
      .limit(limit)
      .populate({
        path: "authorId",
        select: "-passwordHash",
      })
      .sort({ createdAt: -1 });

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
