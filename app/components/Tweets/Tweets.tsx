"use client";
import { useEffect, useState } from "react";
import MainPageElement from "../pages/MainPageElement";
import { useInView } from "react-intersection-observer";
import ky from "ky";
import Tweet from "../Tweet/Tweet";
import { APIResponse } from "./types";
import { auth } from "@/lib/auth";

const Tweets = ({
  numberOfTweetsToFetch = 5,
  userId,
}: {
  numberOfTweetsToFetch?: number;
  userId?: string;
}) => {
  const [ref, inView] = useInView();
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [offset, setOffset] = useState(numberOfTweetsToFetch);
  const [empty, setEmpty] = useState(false);

  const loadMoreTweets = async () => {
    if (!userId) {
      const apiTweets: APIResponse = await ky
        .get(
          `http://localhost:3000/api/tweet?offset=${offset}&limit=${numberOfTweetsToFetch}`
        )
        .json();
      setTweets((prev) => [...prev, ...apiTweets.tweets]);
      setOffset(offset + numberOfTweetsToFetch);
    } else {
      const apiTweets: APIResponse = await ky
        .get(`http://localhost:3000/api/tweet?userId=${userId}`)
        .json();

      if (apiTweets.tweets.length === 0) {
        setEmpty(true);
      } else {
        setTweets((prev) => [...prev, ...apiTweets.tweets]);
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
        <MainPageElement>
          <Tweet tweet={tweet} />
        </MainPageElement>
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
