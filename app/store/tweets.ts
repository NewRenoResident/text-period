import { ITweet, IUser } from "@/models/types";
import { create } from "zustand";

interface SimpleTweet {
  authorId: IUser["_id"];
  _id: string;
  content: string;
  img?: string;
  likes: IUser["_id"][];
  retweets: string[];
}

interface TweetsState {
  tweets: SimpleTweet[];
  userTweets: SimpleTweet[];
  updateTweets: (newTweets: SimpleTweet[]) => void;
  updateUserTweets: (newTweets: SimpleTweet[]) => void;
  addTweet: (newTweet: SimpleTweet) => void;
  setTweets: (newTweets: SimpleTweet[]) => void;
  deleteById: (tweetId: string) => void;
}

export const useTweetsStore = create<TweetsState>((set) => ({
  tweets: [],
  userTweets: [],
  updateUserTweets: (newTweets) =>
    set((state) => ({
      userTweets: [...state.userTweets, ...newTweets],
    })),
  updateTweets: (newTweets) =>
    set((state) => ({
      tweets: [...state.tweets, ...newTweets],
    })),
  addTweet: (newTweet) =>
    set((state) => ({
      tweets: [newTweet, ...state.tweets],
    })),
  setTweets: (newTweets) =>
    set((state) => ({
      tweets: newTweets,
    })),
  deleteById: (tweetId) =>
    set((state) => ({
      tweets: state.tweets.filter((tweet) => tweet._id !== tweetId),
      userTweets: state.userTweets.filter((tweet) => tweet._id !== tweetId),
    })),
}));
