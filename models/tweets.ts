import mongoose, { Model, Schema } from "mongoose";
import { ITweet } from "./types";
const tweetSchema: Schema<ITweet> = new mongoose.Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true },
    img: { type: String },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    retweets: [{ type: Schema.Types.ObjectId, ref: "Tweet" }],
  },
  { timestamps: true, required: true }
);

export const Tweet: Model<ITweet> =
  mongoose.models?.Tweet || mongoose.model<ITweet>("Tweet", tweetSchema);
