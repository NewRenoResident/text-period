"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTweetsStore } from "@/app/store/tweets";
import { Tweet as TweetI } from "../Tweets/types";
import TweetBottom from "./TweetBottom";
import TweetUserImage from "./TweetUserImage";
import TweetMainContent from "./TweetMainContent";
import { useSessionUserStore } from "@/app/store/sessionUser";

interface Props {
  tweet: TweetI;
}

function Tweet({ tweet, tweetSettings }: Props) {
  const router = useRouter();

  const [editMode, setEditMode] = useState(false);
  const { sessionUser } = useSessionUserStore();
  const { onRouteClick, handleDelete, handleLike, editTweetHandler } =
    tweetSettings;

  if (typeof tweet?.authorId === "object") {
    return (
      <div>
        <div
          className="flex gap-3"
          onClick={() => {
            onRouteClick(tweet._id, router);
          }}
        >
          <TweetUserImage img={tweet?.authorId?.img} />
          <div>
            <TweetMainContent
              editTweetHandler={editTweetHandler}
              setEditMode={setEditMode}
              tweet={tweet}
              editMode={editMode}
            />
            <TweetBottom
              setEditMode={setEditMode}
              ownsToUser={`${sessionUser?._id}` === `${tweet.authorId._id}`}
              handleLike={handleLike}
              onDelete={(e) => handleDelete(e, tweet?._id)}
              likes={tweet.likes}
              sessionUserId={sessionUser?._id}
              tweetId={tweet._id}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
