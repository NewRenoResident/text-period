import Image from "next/image";
import Tweet from "../../components/Tweet";
import CreateTweet from "@/app/components/CreateTweet";
import MainPageElement from "@/app/components/MainPageElement";

export default function Home() {
  return (
    <main>
      <div className="">
        <MainPageElement>
          <CreateTweet />
        </MainPageElement>
        <MainPageElement>
          <Tweet
            username="Ольга"
            handle="OlgavonVolga"
            time="1 мар."
            content="Почему вы ..."
            replies={748}
            retweets={90}
            likes={517}
          />
        </MainPageElement>
      </div>
    </main>
  );
}
