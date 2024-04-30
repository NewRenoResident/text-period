import { getUserTweets } from "@/lib/serverActions";

export const useLoadUserTweets = (userId: string, tweets, setTweets: any) => {
  const getTweets = async () => {
    const tweetsResp = await getUserTweets(userId);
    setTweets(tweetsResp);
  };
  return [tweets, getTweets];
};
