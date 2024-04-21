import { ITweet } from "@/models/types";
import React from "react";
import Image from "next/image";
import { useParseDate } from "@/app/hooks/useParseDate";
interface Props {
  tweet: ITweet;
}

export default function TweetMainContent({ tweet }: Props) {
  const { days, hours, minutes, seconds } = useParseDate(tweet.createdAt);
  return (
    <div>
      <div className="flex justify-start items-center gap-2">
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
      <div className="flex">{tweet.content}</div>
    </div>
  );
}
