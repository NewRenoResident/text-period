"use client";
import Image from "next/image";
import TweetBottom from "./TweetBottom";
import { useRouter } from "next/navigation";
import { Tweet as TweetI } from "../Tweets/types";

const Tweet = ({ tweet }: { tweet: TweetI }) => {
  const router = useRouter();
  const handleClick = (tweet_id: string) => {
    router.push(`/home/${tweet_id}`);
  };
  if (typeof tweet.authorId === "object") {
    return (
      <div
        className=" flex gap-3"
        onClick={() => {
          handleClick(tweet._id);
        }}
      >
        <div className="w-10 h-10 rounded-full bg-[#393b3e] pr-10">
          {tweet.authorId.img ? (
            <Image
              src={tweet.authorId.img}
              width={60}
              height={60}
              alt="user-picture"
            />
          ) : null}
        </div>
        <div>
          <div className="flex gap-1">
            <h2 className="font-bold">{tweet.authorId.username}</h2>
            <p className="text-[#71767b]">@belteanews 20 ч</p>
          </div>
          <div className="flex">{tweet.content}</div>
          {tweet.img && (
            <div className="w-full border border-solid border-[#2f3336] rounded-xl">
              <Image src={tweet.img} alt="image" width={500} height={500} />
            </div>
          )}
          <TweetBottom />
        </div>
      </div>
    );
  }
};

export default Tweet;
