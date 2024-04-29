"use client";
import CreateTweet from "@/app/components/CreateTweet";
import Tweets from "@/app/components/Tweets/Tweets";
import MainPageElement from "@/app/components/pages/MainPageElement";
import { deleteTweetById, setLikeById } from "@/lib/serverActions";
import { useLoadMoreTweets } from "../hooks/useLoadMoreTweets";
import { useTweetsStore } from "../store/tweets";
import { useSessionUserStore } from "../store/sessionUser";
import { updateTweet } from "@/lib/serverActions";
import { NextRouter } from "next/router";
import { ITweetSettings } from "./Tweets/types";
interface Props {
  userImage: string | undefined;
  userId: string;
}

const HomeComponent = ({ userImage, userId }: Props) => {
  const { deleteById, addStepToOffset, tweets } = useTweetsStore();
  const { sessionUser } = useSessionUserStore();
  const { findAndUpdateTweet } = useTweetsStore();

  const tweetSettings: ITweetSettings = {
    onRouteClick: (id: string, router: NextRouter) => {
      router.push(`/home/${id}`);
    },
    handleDelete: async (tweetId) => {
      const res = await deleteTweetById(tweetId);
      deleteById(tweetId);
      addStepToOffset(-1);
    },
    handleLike: async (setLikes, tweetId) => {
      const likesResponse = await setLikeById(tweetId, sessionUser?._id);
      setLikes(JSON.parse(likesResponse).jsonTweetLikes);
    },
    editTweetHandler: async (formData, setEditMode, tweetId) => {
      const newTweet = await updateTweet(tweetId, formData.get("content"));
      if (newTweet._id) {
        findAndUpdateTweet(newTweet);
      }
      setEditMode(false);
    },
  };

  const handleHook = () => {
    if (tweets.length > 0) {
      return () => useLoadMoreTweets(5, tweets[tweets.length - 1]?._id);
    } else {
      return () => useLoadMoreTweets(5);
    }
  };

  return (
    <>
      <MainPageElement>
        <CreateTweet userId={userId} userImage={userImage} />
      </MainPageElement>
      <Tweets
        tweetSettings={tweetSettings}
        hookGetTweetsAndLoadTweets={handleHook}
      />
    </>
  );
};

export default HomeComponent;
