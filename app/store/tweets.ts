import { create } from "zustand";

interface SimpleTweet {
  authorId: string; // Assuming IUser["_id"] is a string
  _id: string;
  content: string;
  img?: string;
  likes: string[]; // Assuming IUser["_id"] is a string
  retweets: string[];
}

interface TweetsState {
  tweets: SimpleTweet[];
  userTweets: SimpleTweet[];
  tweetsOffset: number;
  tweetsLimits: number;
  userTweetsOffset: number;
  userTweetsLimit: number;
  updateTweets: (newTweets: SimpleTweet[]) => void;
  updateUserTweets: (newTweets: SimpleTweet[]) => void;
  addTweet: (newTweet: SimpleTweet) => void;
  setTweets: (newTweets: SimpleTweet[]) => void;
  deleteById: (tweetId: string) => void;
  addStepToOffset: (step: number) => void;
  setTweetsLimit: (newLimit: number) => void;
  addStepTouserTweetsOffset: (step: number) => void;
  findAndUpdateTweet: (tweet: SimpleTweet) => void;
}

export const useTweetsStore = create<TweetsState>((set) => ({
  tweets: [],
  tweetsOffset: 0,
  tweetsLimits: 5,
  userTweetsOffset: 0,
  userTweetsLimit: 5,
  userTweets: [],
  addStepToOffset: (step) =>
    set((state) => ({
      tweetsOffset: state.tweetsOffset + step,
    })),
  addStepTouserTweetsOffset: (step) =>
    set((state) => ({
      userTweetsOffset: state.userTweetsOffset + step,
    })),
  setTweetsLimit: (newLimit) =>
    set((state) => ({
      tweetsLimits: newLimit,
    })),
  updateUserTweets: (newTweets) =>
    set((state) => ({
      userTweets: [...state.userTweets, ...newTweets],
    })),
  updateTweets: (newTweets) =>
    set((state) => ({
      tweets: [...state.tweets, ...newTweets],
    })),
  findAndUpdateTweet: (tweet) =>
    set((state) => {
      const newTweets = state.tweets.map((t) =>
        t._id === tweet._id ? tweet : t
      );
      return {
        tweets: newTweets,
      };
    }),
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
