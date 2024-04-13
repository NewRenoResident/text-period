import Tweet from "@/app/components/Tweet/Tweet";
import MainPageElement from "@/app/components/pages/MainPageElement";
import { auth } from "@/lib/auth";
import { getTweetById, getUserByEmail } from "@/lib/serverActions";
import { IUser } from "@/models/types";

const Page = async ({ params }: { params: { id: string } }) => {
  const getUser = async () => {
    const session = await auth();
    const user = (await getUserByEmail(session?.user?.email!)) as IUser;
    if (user?.email) return user;
  };

  const user = await getUser();
  console.log();

  const id = params.id;
  const getTweet = async () => {
    const tweet = await getTweetById(id);
    return tweet?.tweet;
  };
  const tweet = await getTweet();

  return (
    <div>
      <MainPageElement>
        <Tweet tweet={tweet} sessionUserId={"" + user?._id} />
      </MainPageElement>
    </div>
  );
};

export default Page;
