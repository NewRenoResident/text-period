import { ITweet } from "@/models/types";
import { getTweets } from "../api/actions/tweetsActions";
import { APIResponse } from "../components/Tweets/types";
import { SimpleTweet, useTweetsStore } from "../store/tweets";

export type IUseLoadMoreTweets = (
  limit?: number,
  startId?: string
) => [SimpleTweet[], () => void];

export const useLoadMoreTweets: IUseLoadMoreTweets = (limit, startId) => {
  const { tweetsOffset, addStepToOffset, tweets, updateTweets } =
    useTweetsStore();
  const loadMoreTweets = async () => {
    const apiTweets: APIResponse = await getTweets(
      tweetsOffset,
      limit,
      startId
    );
    updateTweets(apiTweets.tweets);
    addStepToOffset(limit);
  };
  return [tweets, loadMoreTweets];
};
