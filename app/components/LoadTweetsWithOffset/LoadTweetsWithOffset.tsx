"use client";
import { SimpleTweet, useTweetsStore } from "@/app/store/tweets";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { APIResponse } from "../Tweets/types";
import { getTweets } from "@/app/api/actions/tweetsActions";
import MainPageElement from "../pages/MainPageElement";
import Tweet from "../Tweet/Tweet";
import { IUseLoadMoreTweets } from "@/app/hooks/useLoadMoreTweets";
import BlueButton from "../Buttons/BlueButton/BlueButton";

type Props = {
  hookGetTweetsAndLoadTweets: (
    limit?: number
  ) => () => [SimpleTweet[], () => void];
};

export default function LoadTweetsWithOffset({
  hookGetTweetsAndLoadTweets,
  tweetSettings,
}: Props) {
  const [ref, inView] = useInView();
  const [loadMore, setLoadMore] = useState(1);
  const [tweets, loadMoreTweets] = hookGetTweetsAndLoadTweets()();

  useEffect(() => {
    if (inView) {
      loadMoreTweets();
    }
  }, [inView, loadMore]);

  return (
    <div className={`w-full flex-col justify-center items-center`}>
      {tweets.map((tweet) => (
        <div key={tweet._id}>
          <MainPageElement>
            <Tweet tweet={tweet} tweetSettings={tweetSettings} />
          </MainPageElement>
        </div>
      ))}

      <div className="m-auto w-fit" ref={ref}>
        <BlueButton
          text="Load Tweets"
          className="m-4"
          active
          onClick={() => setLoadMore((prev) => prev + 1)}
        />
      </div>
    </div>
  );
}
