import CreateTweet from "@/components/CreateTweet";
import Tweet from "../../Tweet/Tweet";
import MainPageElement from "../MainPageElement";

const Home = () => {
  return (
    <main>
      <div className="">
        <MainPageElement>
          <CreateTweet />
        </MainPageElement>
        <MainPageElement>
          <Tweet tweet_id="123" />
        </MainPageElement>
      </div>
    </main>
  );
};

export default Home;
