"use client";
import Image from "next/image";
import TweetBottom from "./TweetBottom";
import { useRouter } from "next/navigation";
import { Tweet as TweetI } from "../Tweets/types";
import { auth } from "@/lib/auth";
import { deleteTweetById, getUserByEmail } from "@/lib/serverActions";
import { useTweetsStore } from "@/app/store/tweets";
import { useSessionUserStore } from "@/app/store/sessionUser";
import TweetUserImage from "./TweetUserImage";
import TweetMainContent from "./TweetMainContent";
import { useState } from "react";

interface Props {
  tweet: TweetI;
  sessionUserId: string;
}

const Tweet = ({ tweet, sessionUserId }: Props) => {
  const [editMode, setEditMode] = useState();
  const { deleteById } = useTweetsStore();
  const { addStepToOffset } = useTweetsStore();

  const router = useRouter();

  const handleClick = (tweet_id: string) => {
    router.push(`/home/${tweet_id}`);
  };

  const handleDelete = async (e) => {
    const res = await deleteTweetById(tweet._id);
    deleteById(tweet._id);
    addStepToOffset(-1);
  };

  if (typeof tweet?.authorId === "object") {
    return (
      <div>
        <div
          className="flex gap-3"
          onClick={() => {
            handleClick(tweet._id);
          }}
        >
          <TweetUserImage img={tweet?.authorId?.img} />
          <div>
            <TweetMainContent tweet={tweet} />
            <TweetBottom
              ownsToUser={"" + sessionUserId === "" + tweet.authorId._id}
              onDelete={handleDelete}
              likes={tweet.likes}
              sessionUserId={sessionUserId}
              tweetId={tweet._id}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Tweet;
