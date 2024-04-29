"use client";
import LoadTweetsWithOffset from "../LoadTweetsWithOffset/LoadTweetsWithOffset";
import LoadTweetsWithoutOffset from "../LoadTweetsWithoutOffset/LoadTweetsWithoutOffset";
import { ITweetsProps } from "./types";

const Tweets = ({
  hookGetTweetsAndLoadTweets,
  tweetSettings,
  hookGetTweets,
}: ITweetsProps) => {
  if (!hookGetTweets && !hookGetTweetsAndLoadTweets) {
    throw new Error("Use hookGetTweetsAndLoadTweets or hookGetTweets");
  }
  return (
    <div>
      {hookGetTweetsAndLoadTweets ? (
        <LoadTweetsWithOffset
          tweetSettings={tweetSettings}
          hookGetTweetsAndLoadTweets={hookGetTweetsAndLoadTweets}
        />
      ) : (
        <LoadTweetsWithoutOffset
          tweetSettings={tweetSettings}
          hookGetTweets={hookGetTweets}
        />
      )}
      {}
    </div>
  );
};

export default Tweets;
