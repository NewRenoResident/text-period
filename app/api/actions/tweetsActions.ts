"use server";
import { connectToDb } from "@/lib/utils";
import { Tweet } from "@/models/tweets";

type TGetTweets = (offset: number, limit: number) => any;

export const getTweets: TGetTweets = async (offset, limit, startId) => {
  try {
    connectToDb();

    const fetchTweets = async () => {
      if (startId) {
        const tweets = await Tweet.find({ _id: { $lt: startId } })
          .sort({ createdAt: -1 })
          .limit(limit)
          .populate({
            path: "authorId",
            select: "-passwordHash",
          });
        return tweets;
      } else {
        const tweets = await Tweet.find()
          .sort({ createdAt: -1 })
          .skip(offset)
          .limit(limit)
          .populate({
            path: "authorId",
            select: "-passwordHash",
          });
        return tweets;
      }
    };

    const tweets = await fetchTweets();

    return JSON.parse(JSON.stringify({ tweets: tweets }));
  } catch (error) {
    return { error: "Error fetch tweets" };
  }
};
