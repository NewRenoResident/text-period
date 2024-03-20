import CreateTweet from "@/app/components/CreateTweet";
import Tweet from "@/app/components/Tweet/Tweet";
import MainPageElement from "@/app/components/pages/MainPageElement";

export default async function Home() {
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
}
