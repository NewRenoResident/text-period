import mongoose, { Model, Schema } from "mongoose";
const commentSchema: Schema = new mongoose.Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, required: true },
    tweetId: {
      type: Schema.Types.ObjectId,
      ref: "Tweet",
      required: true,
    },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
    required: true,
  }
);

export const Comment =
  mongoose.models?.Comment || mongoose.model("Comment", commentSchema);
