import { ITweet, IUser } from "@/models/types";
import { create } from "zustand";

interface SimpleTweet {
  authorId: IUser["_id"];
  content: string;
  img?: string;
  likes: IUser["_id"][];
  retweets: string[];
}

type TweetsState = {
  tweets: SimpleTweet[];
  updateTweets: (newTweets: SimpleTweet[]) => void;
};

export const useTweetsStore = create<TweetsState>((set) => ({
  tweets: [],
  updateTweets: (newTweets) =>
    set((state) => ({
      tweets: [...state.tweets, ...newTweets],
    })),
}));
