"use client";
import { useEffect, useState } from "react";
import MainPageElement from "../pages/MainPageElement";
import { useInView } from "react-intersection-observer";
import ky from "ky";
import Tweet from "../Tweet/Tweet";
import { APIResponse } from "./types";

const Tweets = ({ numberOfTweetsToFetch = 10 }: any) => {
  const [ref, inView] = useInView();
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [offset, setOffset] = useState(numberOfTweetsToFetch);
  const [empty, setEmpty] = useState(false);

  const loadMoreTweets = async () => {
    const apiTweets: APIResponse = await ky
      .get(
        `http://localhost:3000/api/tweet?offset=${offset}&limit=${numberOfTweetsToFetch}`
      )
      .json();
    setTweets((prev) => [...prev, ...apiTweets.tweets]);
    setOffset(offset + numberOfTweetsToFetch);
  };

  useEffect(() => {
    if (inView) {
      loadMoreTweets();
    }
  }, [inView]);

  return (
    <>
      {tweets.map((tweet) => (
        <MainPageElement>
          <Tweet tweet={tweet} />
        </MainPageElement>
      ))}

      <div className="m-auto w-fit" ref={empty ? null : ref}>
        {}
        Loading...
      </div>
    </>
  );
};

export default Tweets;
