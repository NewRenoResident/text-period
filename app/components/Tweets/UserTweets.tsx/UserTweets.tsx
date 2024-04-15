"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ky from "ky";
import { auth } from "@/lib/auth";
import { useTweetsStore } from "@/app/store/tweets";
import { APIResponse } from "../types";
import MainPageElement from "../../pages/MainPageElement";
import Tweet from "../../Tweet/Tweet";

interface Props {
  numberOfTweetsToFetch?: number;
  userId?: string;
  sessionUserId: string;
}

const UserTweets = ({
  numberOfTweetsToFetch = 5,
  userId,
  sessionUserId,
}: Props) => {
  const [ref, inView] = useInView();
  const [empty, setEmpty] = useState(false);
  const [loadMore, setLoadMore] = useState(1);
  const [tweets, setTweets] = useState([]);
  const [offset, setOffset] = useState(0);

  const loadMoreTweets = async () => {
    const apiTweets: APIResponse = await ky
      .get(
        `http://localhost:3000/api/tweet?offset=${offset}&limit=${numberOfTweetsToFetch}&userId=${userId}`
      )
      .json();

    setTweets([...apiTweets.tweets, ...tweets]);

    setOffset(offset + numberOfTweetsToFetch);
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
      {tweets.map((tweet) => (
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

export default UserTweets;
