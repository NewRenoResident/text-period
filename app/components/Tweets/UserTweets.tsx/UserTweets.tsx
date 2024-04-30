"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ky from "ky";
import { auth } from "@/lib/auth";
import { useTweetsStore } from "@/app/store/tweets";
import { APIResponse, ITweetSettings } from "../types";
import MainPageElement from "../../pages/MainPageElement";
import Tweet from "../../Tweet/Tweet";
import CreateTweet from "../../CreateTweet";
import Tweets from "../Tweets";
import { useLoadUserTweets } from "@/app/hooks/useLoadUserTweets";
import { deleteTweetById, setLikeById, updateTweet } from "@/lib/serverActions";
import { useSessionUserStore } from "@/app/store/sessionUser";

interface Props {
  userId?: string;
}

const UserTweets = ({ userId }: Props) => {
  const [tweets, setTweets] = useState([]);
  const { sessionUser } = useSessionUserStore();

  const handleHook = () => {
    return () => useLoadUserTweets(userId, tweets, setTweets);
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
};

export default UserTweets;
