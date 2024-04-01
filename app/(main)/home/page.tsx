import CreateTweet from "@/app/components/CreateTweet";
import Tweet from "@/app/components/Tweet/Tweet";
import Tweets from "@/app/components/Tweets/Tweets";
import MainPageElement from "@/app/components/pages/MainPageElement";
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/data";

const getData = async () => {
  // const session = await auth();
  // const res = await fetch("http://localhost:3000/api/tweet", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     email: session?.user?.email,
  //     authorId: 123,
  //     content: "testContent",
  //   }),
  // });
  // return res.json();
};

export default async function Home() {
  const tweetsFetch = await fetch("http://localhost:3000/api/tweet");
  const tweets = await tweetsFetch.json();

  const getSession = async () => {
    const session = await auth();

    if (!session?.user?.id && session?.user?.email) {
      const dbUser = await getUserByEmail(session?.user?.email);
    }
    return session;
  };

  const session = await getSession();
  session?.user;
  return (
    <main>
      <div>
        <MainPageElement>
          <CreateTweet />
        </MainPageElement>
        <Tweets />
      </div>
    </main>
  );
}
