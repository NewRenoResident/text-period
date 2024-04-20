import React, { useEffect } from "react";
import { useTweetsStore } from "../store/tweets";

export function useLazyLoad() {
  const { tweetsOffset, addStepToOffset } = useTweetsStore();
  const { tweets, userTweets, updateTweets, updateUserTweets } =
    useTweetsStore();
  const loadMoreTweets = async () => {
    const apiTweets: APIResponse = await ky
      .get(
        `http://localhost:3000/api/tweet?offset=${tweetsOffset}&limit=${numberOfTweetsToFetch}&userId=${userId}`
      )
      .json();

    if (!userId) {
      updateTweets(apiTweets.tweets);
    } else {
      updateUserTweets(apiTweets.tweets);
    }
    addStepToOffset(numberOfTweetsToFetch);
    if (!apiTweets.tweets.length) setEmpty(true);
    if (empty && apiTweets.tweets.length) setEmpty(false);
  };

  useEffect(() => {
    if (inView) {
      loadMoreTweets();
    }
  }, [inView, loadMore]);
}
