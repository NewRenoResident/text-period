import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  passwordHash?: string;
  profileInfo: {
    fullName: string;
    bio?: string;
    location?: string;
  };
  followers: IUser["_id"][];
  following: IUser["_id"][];
}

export interface ITweet extends Document {
  authorId: IUser["_id"];
  content: string;
  img?: string;
  likes: IUser["_id"][];
  retweets: ITweet["_id"][];
}
