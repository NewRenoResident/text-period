import HomeComponent from "@/app/components/HomeComponent";

import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/data";
import { IUser } from "@/models/types";
export default async function Home() {
  const tweetsFetch = await fetch("http://localhost:3000/api/tweet");
  const tweets = await tweetsFetch.json();

  const getUser = async () => {
    const session = await auth();
    const user = (await getUserByEmail(session?.user?.email!)) as IUser;
    if (user?.email) return user;
  };
  const user = await getUser();

  return (
    <main>
      <div>
        <HomeComponent userImage={user?.img} />
      </div>
    </main>
  );
}
