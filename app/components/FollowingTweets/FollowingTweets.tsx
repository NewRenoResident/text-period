import React, { useState } from "react";
import MainPageElement from "../pages/MainPageElement";
import Tweet from "../Tweet/Tweet";
import Tweets from "../Tweets/Tweets";
import { useFollowingTweets } from "@/app/hooks/useFollowingTweets";
import { ITweetSettings } from "../Tweets/types";
import { NextRouter } from "next/router";
import { deleteTweetById, setLikeById, updateTweet } from "@/lib/serverActions";
import { useSessionUserStore } from "@/app/store/sessionUser";

type Props = {
  userId: string;
};

export default function FollowingTweets({ userId }: Props) {
  const [tweets, setTweets] = useState([]);
  const { sessionUser } = useSessionUserStore();

  const handleHook = () => {
    return () => useFollowingTweets(userId, tweets, setTweets);
  };

  const tweetSettings: ITweetSettings = {
    onRouteClick: (id: string, router: NextRouter) => {
      router.push(`/home/${id}`);
    },
    handleDelete: async (tweetId) => {
      const res = await deleteTweetById(tweetId);
      setTweets(tweets.filter((t) => t?._id !== tweetId));
    },
    handleLike: async (setLikes, tweetId) => {
      const likesResponse = await setLikeById(tweetId, sessionUser?._id);
      setLikes(JSON.parse(likesResponse).jsonTweetLikes);
    },
    editTweetHandler: async (formData, setEditMode, tweetId) => {
      const content = formData.get("content");
      const newTweet = await updateTweet(tweetId, content);
      if (newTweet._id) {
        setTweets(
          tweets.map((t) =>
            t._id === tweetId ? { ...t, content: content } : t
          )
        );
      }
      setEditMode(false);
    },
  };
  return (
    <>
      <Tweets tweetSettings={tweetSettings} hookGetTweets={handleHook} />
    </>
  );
}
