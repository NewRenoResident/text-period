import { loadFollowingTweets, loadUser } from "@/lib/serverActions";
import { getTweets } from "../api/actions/tweetsActions";

export const useFollowingTweets = (userId: string, tweets, setTweets) => {
  const getTweets = async () => {
    const userResp = await loadUser(userId);
    const user = JSON.parse(userResp.user);
    const tweetsResp = await loadFollowingTweets(user?.following);
    setTweets(tweetsResp);
  };
  return [tweets, getTweets];
};
