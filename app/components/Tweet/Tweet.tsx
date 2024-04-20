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

interface Props {
  tweet: TweetI;
  sessionUserId: string;
}

const Tweet = ({ tweet, sessionUserId }: Props) => {
  const router = useRouter();
  const { deleteById } = useTweetsStore();
  const { addStepToOffset } = useTweetsStore();
  const handleClick = (tweet_id: string) => {
    router.push(`/home/${tweet_id}`);
  };

  const handleDelete = async (e) => {
    const res = await deleteTweetById(tweet._id);
    deleteById(tweet._id);
    addStepToOffset(-1);
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
