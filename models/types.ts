import { Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  passwordHash?: string;
  wallpaperImg?: string | undefined;
  profileInfo: {
    fullName: string;
    bio?: string;
    location?: string;
    website?: string;
    dateOfBirth: string;
  };
  img?: string | undefined;
  createdAt: Date;
  updatedAt: Date;
  followers: IUser["_id"][];
  following: IUser["_id"][];
}

export interface ITweet extends Document {
  authorId: IUser["_id"];
  content: string | null;
  img?: string | null;
  likes: IUser["_id"][] | null;
  retweets: ITweet["_id"][] | null;
}
