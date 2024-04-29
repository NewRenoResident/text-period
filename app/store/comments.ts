import { comment } from "postcss";
import { create } from "zustand";

export const useCommentsStore = create((set) => ({
  comments: {},
  setComments: (tweetId, newComments) =>
    set((state) => ({
      comments: {
        ...state.comments,
        [tweetId]: newComments,
      },
    })),
  addComment: (tweetId, newComment) =>
    set((state) => ({
      comments: {
        ...state.comments,
        [tweetId]: [newComment, ...(state.comments[tweetId] || [])],
      },
    })),
  deleteComment: (tweetId, commentId) =>
    set((state) => ({
      comments: {
        ...state.comments,
        [tweetId]: state.comments[tweetId].filter(
          (com) => com?._id !== commentId
        ),
      },
    })),
  findAndUpdateComment: (updatedComment) =>
    set((state) => {
      const tweetId = updatedComment?.tweetId;
      const updatedComments = (state.comments[tweetId] || []).map((c) =>
        c._id === updatedComment._id ? updatedComment : c
      );

      return {
        comments: {
          ...state.comments,
          [tweetId]: updatedComments,
        },
      };
    }),
}));
