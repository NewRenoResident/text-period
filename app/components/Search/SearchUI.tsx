"use client";

import {
  deleteTweetById,
  setLikeById,
  setLikeToCommentById,
  updateTweet,
} from "@/lib/serverActions";
import { NextRouter } from "next/router";
import { useState } from "react";
import Tweets from "../Tweets/Tweets";
import { ITweetSettings } from "../Tweets/types";
import SearchBar from "./SearchBar";
import { useSessionUserStore } from "@/app/store/sessionUser";

const SearchUI = () => {
  const [tweets, setTweets] = useState([]);
  const { sessionUser } = useSessionUserStore();

  const handleHook = () => {
    return () => [tweets, () => {}];
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
    <div>
      <SearchBar tweets={tweets} setTweets={setTweets} />
      <Tweets tweetSettings={tweetSettings} hookGetTweets={handleHook} />
    </div>
  );
};

export default SearchUI;
