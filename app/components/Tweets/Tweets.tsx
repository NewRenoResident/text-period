"use client";
import { useEffect, useState } from "react";
import MainPageElement from "../pages/MainPageElement";
import { useInView } from "react-intersection-observer";
import ky from "ky";
import Tweet from "../Tweet/Tweet";
import { APIResponse } from "./types";
import { auth } from "@/lib/auth";
import { useTweetsStore } from "@/app/store/tweets";

interface Props {
  numberOfTweetsToFetch?: number;
  userId?: string;
  sessionUserId: string;
}

const Tweets = ({
  numberOfTweetsToFetch = 5,
  userId,
  sessionUserId,
}: Props) => {
  const [ref, inView] = useInView();
  const { tweets, userTweets, updateTweets, updateUserTweets } =
    useTweetsStore();
  const [offset, setOffset] = useState(0);
  const [empty, setEmpty] = useState(false);
  const loadMoreTweets = async () => {
    const apiTweets: APIResponse = await ky
      .get(
        `http://localhost:3000/api/tweet?offset=${offset}&limit=${numberOfTweetsToFetch}&userId=${userId}`
      )
      .json();
    if (!userId) {
      updateTweets(apiTweets.tweets);
    } else {
      updateUserTweets(apiTweets.tweets);
    }
    setOffset((prevOffset) => prevOffset + numberOfTweetsToFetch);
  };

  useEffect(() => {
    if (inView) {
      loadMoreTweets();
    }
  }, [inView]);

  return (
    <div className={`w-full flex-col justify-center items-center`}>
      {(userId ? userTweets : tweets).map((tweet) => (
        <div key={tweet._id}>
          <MainPageElement>
            <Tweet tweet={tweet} sessionUserId={sessionUserId} />
          </MainPageElement>
        </div>
      ))}

      {empty ? (
        <div className="mx-auto w-fit p-10">No tweets</div>
      ) : (
        <div className="m-auto w-fit" ref={ref}>
          Loading...
        </div>
      )}
    </div>
  );
};

export default Tweets;
