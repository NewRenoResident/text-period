import React from "react";
import Image from "next/image";
import { ITweet } from "@/models/types";
import TweetContent from "./TweetContent";
import TweetEditMode from "./TweetEditMode";
import { useParseDate } from "@/app/hooks/useParseDate";
import { useTweetsStore } from "@/app/store/tweets";
import Link from "next/link";

interface Props {
  tweet: ITweet;
  editMode: any;
  setEditMode: any;
}

export default function TweetMainContent({
  tweet,
  editMode,
  setEditMode,
  editTweetHandler,
}: Props) {
  const { days, hours, minutes, seconds } = useParseDate(tweet.createdAt);

  const editTweetHandlerAction = async (formData) => {
    editTweetHandler(formData, setEditMode, tweet?._id);
  };
  const getHref = () => {
    return tweet?.authorId?._id ? `/user/${tweet?.authorId?._id}` : "";
  };
  return (
    <div>
      <Link href={getHref()}>
        <div
          onClick={(e: Event) => e.stopPropagation()}
          className="flex justify-start items-center gap-2 px-1 hover:bg-white hover:bg-opacity-25 rounded-full "
        >
          <h2 className="font-bold">{tweet?.authorId?.username}</h2>
          <p className="text-[#71767b]">{tweet?.authorId?.email}</p>
          <p className="text-sm text-gray-500">
            {days >= 1
              ? `${days} Days`
              : hours >= 1
                ? `${hours} Hours`
                : `${minutes} Minutes`}
          </p>
        </div>
      </Link>
      {editMode ? (
        <TweetEditMode
          defaultText={tweet.content}
          action={editTweetHandlerAction}
        />
      ) : (
        <TweetContent tweet={tweet} createdAt={tweet.createdAt} />
      )}
    </div>
  );
}
