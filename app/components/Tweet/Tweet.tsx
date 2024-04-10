"use client";
import Image from "next/image";
import TweetBottom from "./TweetBottom";
import { useRouter } from "next/navigation";
import { Tweet as TweetI } from "../Tweets/types";
import userDefaultIcon from "@/public/Passport.png";
const Tweet = ({ tweet }: { tweet: TweetI }) => {
  const router = useRouter();
  const handleClick = (tweet_id: string) => {
    router.push(`/home/${tweet_id}`);
  };

  const calculateDateDifference = (date: string) => {
    const startDate = new Date(date);
    const endDate = new Date();

    const differenceInMilliseconds = endDate - startDate;

    const seconds = Math.floor(differenceInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  if (typeof tweet.authorId === "object") {
    return (
      <div
        className=" flex gap-3"
        onClick={() => {
          handleClick(tweet._id);
        }}
      >
        {tweet?.authorId?.img ? (
          <Image
            src={tweet?.authorId?.img}
            alt="image"
            width={50}
            height={50}
          />
        ) : (
          <div className="min-w-10 h-20 rounded-full">
            <Image
              src={userDefaultIcon}
              className="rounded-full"
              alt="image"
              width={50}
              height={50}
            />
          </div>
        )}

        <div>
          <div className="flex justify-start items-center gap-2">
            <h2 className="font-bold">{tweet?.authorId?.username}</h2>
            <p className="text-[#71767b]">{tweet?.authorId?.email}</p>
            <p className="text-sm text-gray-500">
              {calculateDateDifference(tweet.createdAt).hours < 100
                ? `${calculateDateDifference(tweet.createdAt).hours} Hours`
                : `${calculateDateDifference(tweet.createdAt).days} Days`}
            </p>
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
