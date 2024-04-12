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
}

const Tweets = ({ numberOfTweetsToFetch = 5, userId }: Props) => {
  const [ref, inView] = useInView();
  const { tweets, updateTweets } = useTweetsStore();
  // const [tweets, setTweets] = useState<any>([]);
  const [offset, setOffset] = useState(numberOfTweetsToFetch);
  const [empty, setEmpty] = useState(false);

  const loadMoreTweets = async () => {
    if (!userId) {
      const apiTweets: APIResponse = await ky
        .get(
          `http://localhost:3000/api/tweet?offset=${offset}&limit=${numberOfTweetsToFetch}`
        )
        .json();

      updateTweets(apiTweets.tweets);
      setOffset((prevOffset) => prevOffset + numberOfTweetsToFetch);
    } else {
      const apiTweets: APIResponse = await ky
        .get(`http://localhost:3000/api/tweet?userId=${userId}`)
        .json();

      if (apiTweets.tweets.length === 0) {
        setEmpty(true);
      } else {
        updateTweets(apiTweets.tweets);
        setOffset(offset + numberOfTweetsToFetch);
      }
    }
  };

  useEffect(() => {
    if (inView) {
      loadMoreTweets();
    }
  }, [inView]);

  return (
    <div className={`w-full flex-col justify-center items-center`}>
      {tweets.map((tweet) => (
        <div key={tweet._id}>
          <MainPageElement>
            <Tweet tweet={tweet} />
          </MainPageElement>
        </div>
      ))}

      {empty ? (
        <div className="mx-auto w-fit p-10">No tweets </div>
      ) : (
        <div className="m-auto w-fit" ref={ref}>
          Loading...
        </div>
      )}
    </div>
  );
};

export default Tweets;
