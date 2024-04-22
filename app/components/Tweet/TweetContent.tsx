import { useParseDate } from "@/app/hooks/useParseDate";
import { ITweet } from "@/models/types";
import React from "react";

interface Props {
  createdAt: string;
  tweet: ITweet;
}

export default function TweetContent({ tweet }: Props) {
  return (
    <>
      <div className="flex">{tweet.content}</div>
    </>
  );
}
