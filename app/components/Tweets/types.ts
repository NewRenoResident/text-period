import { SimpleTweet } from "@/app/store/tweets";
import { NextRouter } from "next/router";

export interface User {
  _id: string;
  email: string;
  username: string;
  passwordHash?: string;
  profileInfo?: {
    fullName?: string;
    bio?: string;
    location?: string;
  };
  img?: string;
  followers?: string[];
  following?: string[];
}

export interface Tweet {
  authorId: string | User;
  content: string;
  createdAt: string;
  likes: string[];
  retweets: string[];
  updatedAt: string;
  _id: string;
  img?: string;
}

export interface APIResponse {
  tweets: Tweet[];
}

export interface ITweetSettings {
  onRouteClick: (id: string, router: NextRouter) => void;
  handleDelete: (tweetId: string) => void;
  handleLike: (setLikes: any, tweetId: string) => void;
  editTweetHandler: (
    formData: FormData,
    setEditMode: any,
    tweetId: string
  ) => void;
}

export interface ITweetsProps {
  tweetSettings: ITweetSettings;
  hookGetTweetsAndLoadTweets: (
    limit?: number
  ) => () => [SimpleTweet[], () => void];
}
