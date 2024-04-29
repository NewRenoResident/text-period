import { loadComments } from "@/lib/serverActions";
import { useState } from "react";
import { useCommentsStore } from "../store/comments";

export const useLoadMoreComments = (tweetId) => {
  const { comments, setComments } = useCommentsStore();

  const getComments = async () => {
    const comments = await loadComments(tweetId);

    setComments(tweetId, comments);
  };
  return [comments[tweetId], getComments];
};
