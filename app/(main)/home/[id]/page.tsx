import CommentsPage from "@/app/components/CommentsPage/CommentsPage";
import { auth } from "@/lib/auth";
import {
  getTweetById,
  getUserByEmail,
  loadComments,
} from "@/lib/serverActions";
import { IUser } from "@/models/types";

const Page = async ({ params }: { params: { id: string } }) => {
  const getUser = async () => {
    const session = await auth();
    const user = (await getUserByEmail(session?.user?.email!)) as IUser;
    if (user?.email) return user;
  };

  const user = await getUser();

  const id = params.id;
  const getTweet = async () => {
    const tweet = await getTweetById(id);
    return JSON.parse(JSON.stringify(tweet?.tweet));
  };

  const tweet = await getTweet();

  return (
    <div>
      <CommentsPage
        tweet={tweet}
        userId={"" + user?._id}
        userImage={user?.img}
      />
    </div>
  );
};

export default Page;
