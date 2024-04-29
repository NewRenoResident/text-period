import React, { useEffect, useState } from "react";
import MainPageElement from "../pages/MainPageElement";
import Tweet from "../Tweet/Tweet";
import BlueButton from "../Buttons/BlueButton/BlueButton";

export default function LoadTweetsWithoutOffset({
  tweetSettings,
  hookGetTweets,
}) {
  const [tweets, getTweets] = hookGetTweets()();

  useEffect(() => {
    getTweets();
  }, []);

  console.log(tweets);

  if (tweets) {
    return (
      <div className={`w-full flex-col justify-center items-center`}>
        {tweets.map((tweet) => (
          <div key={tweet._id}>
            <MainPageElement>
              <Tweet tweet={tweet} tweetSettings={tweetSettings} />
            </MainPageElement>
          </div>
        ))}
        <div className="m-auto w-fit">
          <BlueButton text="Load Tweets" className="m-4" active />
        </div>
      </div>
    );
  }
}
