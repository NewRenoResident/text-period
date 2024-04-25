"use client";
import { findTweetsByContent } from "@/lib/serverActions";
import { ITweet } from "@/models/types";
import { useState } from "react";

interface SearchInt {
  tweets: ITweet[];
  setTweets: any;
}

const SearchBar: React.FC<SearchInt> = ({ tweets, setTweets }: SearchInt) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e: any) => {
    const tweets = await findTweetsByContent(text);
    setTweets(tweets);
  };

  return (
    <div>
      <form
        action={handleSubmit}
        className="text-black relative w-full bg-white rounded-xl p-2 m-4"
      >
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Поиск"
          className="
        w-full
        p-4 
        rounded
        z-20
        shadow-sm
        text-neutral-900
        hover:shadow-md
        bg-neutral-50
        transition
        focus:border-black
        "
        ></input>
      </form>
      <div></div>
    </div>
  );
};

export default SearchBar;
