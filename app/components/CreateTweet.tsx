"use client";
import Image from "next/image";
import white from "/public/white.svg";
import { IUser } from "@/models/types";
import { useState } from "react";
import { createTweet } from "@/lib/serverActions";
import { useTweetsStore } from "../store/tweets";

interface Props {
  userImage: string | undefined;
  userId: string;
}

const CreateTweet = ({ userImage, userId }: Props) => {
  const [text, setText] = useState("");
  const { tweets, addTweet: addTweetToStore } = useTweetsStore();
  const addTweet = createTweet.bind(null, userId);

  const handleUpdateTweet = async (e: FormData) => {
    const tweet = await addTweet(e);
    if (tweet) {
      addTweetToStore(tweet.tweet);
    }

    setText("");
  };
  return (
    <form className="w-full " action={handleUpdateTweet}>
      <div className="flex mb-4">
        <div className="w-20 h-20 bg-white rounded-full relative">
          {userImage ? (
            <Image
              alt=""
              src={`/uploads/${userImage}`}
              fill
              sizes="1"
              className="object-cover rounded-full"
            />
          ) : (
            <Image alt="user-picture" width={60} height={60} src={white} />
          )}
        </div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="content"
          type="text"
          className="bg-inherit text-xl p-2 focus:border-none focus:outline-none"
          placeholder="What's happening?!"
        />
      </div>
      <div className="flex justify-between">
        <div className="ml-8">Icons</div>
        <button
          disabled={!Boolean(text)}
          className={`${text ? "bg-sky-500 text-white" : "bg-[#0f4e78] text-gray-400 "} rounded-2xl py-1 px-4 mr-8 mb-3 font-bold `}
        >
          Опубликовать пост
        </button>
      </div>
    </form>
  );
};

export default CreateTweet;
