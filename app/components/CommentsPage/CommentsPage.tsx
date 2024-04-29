"use client";
import CommentsPageHeader from "@/app/components/CommentsPageHeader/CommentsPageHeader";
import MainPageElement from "@/app/components/pages/MainPageElement";

import React, { useEffect, useState } from "react";
import {
  deleteCommentById,
  loadComments,
  setLikeToCommentById,
  updateComment,
} from "@/lib/serverActions";
import { useLoadMoreComments } from "@/app/hooks/useLoadMoreComments";
import Tweets from "../Tweets/Tweets";
import Tweet from "../Tweet/Tweet";
import CreateComment from "../CreateComment/CreatComment";
import { NextRouter } from "next/router";
import { ITweetSettings } from "../Tweets/types";
import { useCommentsStore } from "@/app/store/comments";
import { useSessionUserStore } from "@/app/store/sessionUser";

export default function CommentsPage({ tweet, userId, userImage }) {
  const { deleteComment, findAndUpdateComment } = useCommentsStore();
  const { sessionUser } = useSessionUserStore();

  const handleHook = () => {
    return () => useLoadMoreComments(tweet?._id);
  };

  const commentSettings: ITweetSettings = {
    onRouteClick: (id: string, router: NextRouter) => {},
    handleDelete: async (commentId: string) => {
      const res = await deleteCommentById(commentId);
      if (res.result.deletedCount > 0) {
        deleteComment(tweet?._id, commentId);
      }
    },
    handleLike: async (setLikes, tweetId) => {
      const likesResponse = await setLikeToCommentById(
        tweetId,
        sessionUser?._id
      );
      setLikes(JSON.parse(likesResponse).jsonTweetLikes);
    },
    editTweetHandler: async (formData, setEditMode, tweetId) => {
      const newComment = await updateComment(tweetId, formData.get("content"));
      if (newComment._id) {
        findAndUpdateComment(newComment);
      }
      setEditMode(false);
    },
  };

  return (
    <div>
      <CommentsPageHeader />
      <MainPageElement>
        <Tweet tweet={tweet} tweetSettings={commentSettings} />
      </MainPageElement>
      <div></div>
      <MainPageElement>
        <CreateComment
          userId={"" + userId}
          userImage={userImage}
          tweetId={tweet?._id}
        />
      </MainPageElement>
      <Tweets hookGetTweets={handleHook} tweetSettings={commentSettings} />
    </div>
  );
}
