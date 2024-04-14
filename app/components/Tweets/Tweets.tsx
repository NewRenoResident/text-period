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
  const { tweetsOffset, addStepToOffset } = useTweetsStore();
  const { tweets, userTweets, updateTweets, updateUserTweets } =
    useTweetsStore();
  const [empty, setEmpty] = useState(false);
  const [loadMore, setLoadMore] = useState(1);
  const loadMoreTweets = async () => {
    const apiTweets: APIResponse = await ky
      .get(
        `http://localhost:3000/api/tweet?offset=${tweetsOffset}&limit=${numberOfTweetsToFetch}&userId=${userId}`
      )
      .json();

    if (!userId) {
      updateTweets(apiTweets.tweets);
    } else {
      updateUserTweets(apiTweets.tweets);
    }
    addStepToOffset(numberOfTweetsToFetch);
    if (!apiTweets.tweets.length) setEmpty(true);
    if (empty && apiTweets.tweets.length) setEmpty(false);
  };

  useEffect(() => {
    if (inView) {
      loadMoreTweets();
    }
  }, [inView, loadMore]);

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
          <button
            type="button"
            onClick={() => {
              setLoadMore((prev) => prev + 1);
            }}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Tweets;
