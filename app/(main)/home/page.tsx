import CreateTweet from "@/app/components/CreateTweet";
import Tweet from "@/app/components/Tweet/Tweet";
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
  const getSession = async () => {
    const session = await auth();

    if (!session?.user?.id && session?.user?.email) {
      const dbUser = await getUserByEmail(session?.user?.email);
    }
    return session;
  };

  const session = await getSession();
  console.log(session);
  session?.user;
  return (
    <main>
      <div>
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
