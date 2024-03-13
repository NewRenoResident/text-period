import Image from "next/image";
import Tweet from "./components/Tweet";

export default function Home() {
  return (
    <main>
      <Tweet
        username="Ольга"
        handle="OlgavonVolga"
        time="1 мар."
        content="Почему вы ..."
        replies={748}
        retweets={90}
        likes={517}
      />
    </main>
  );
}
