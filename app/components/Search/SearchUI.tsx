"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";

const SearchUI = () => {
  const [tweets, setTweets] = useState([]);

  return (
    <div>
      <SearchBar tweets={tweets} setTweets={setTweets} />
      <div>
        {tweets.map((tweet) => (
          <span>
            <div>{tweet.content}</div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchUI;
