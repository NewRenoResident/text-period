"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Tweet as TweetI } from "../Tweets/types";
import userDefaultIcon from "@/public/Passport.png";
import { auth } from "@/lib/auth";
import {
  deleteCommentById,
  deleteTweetById,
  getUserByEmail,
} from "@/lib/serverActions";
import { useTweetsStore } from "@/app/store/tweets";
import CommentBottom from "../CommentBottom/CommentBottom";
import TweetBottom from "../Tweet/TweetBottom";

const Comment = ({ tweet, userId, setComments }) => {
  const handleDelete = async (e) => {
    const res = await deleteCommentById(tweet._id);
    if (res.result.deletedCount > 0) {
      setComments((prev) =>
        prev.filter((stateTweet) => stateTweet._id !== tweet._id)
      );
      // deleteById(tweet._id);
      // addStepToOffset(-1);
    }
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
      <div>
        <div className="flex gap-3">
          <div className="min-w-10 h-20 rounded-full">
            <Image
              src={userDefaultIcon}
              className="rounded-full w-auto h-auto"
              alt="image"
              width={50}
              height={50}
            />
          </div>
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
          </div>
        </div>
        <TweetBottom
          type="comment"
          likes={tweet.likes}
          onDelete={handleDelete}
          sessionUserId={userId}
          tweetId={tweet._id}
          ownsToUser={"" + userId === "" + tweet.authorId._id}
        />
      </div>
    );
  }
};

export default Comment;
