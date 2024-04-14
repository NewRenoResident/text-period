import Comments from "@/app/components/Comments/Comments";
import CommentsPageHeader from "@/app/components/CommentsPageHeader/CommentsPageHeader";
import CreateTweet from "@/app/components/CreateTweet";
import Tweet from "@/app/components/Tweet/Tweet";
import UserHeader from "@/app/components/UserHeader/UserHeader";
import UserProfileCard from "@/app/components/UserProfileCard/UserProfileCard";
import MainPageElement from "@/app/components/pages/MainPageElement";
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
    return tweet?.tweet;
  };
  const tweet = await getTweet();

  // const comments = await loadComments(0, 2, "661903d4a73bb0ada5a35238");

  return (
    <div>
      <CommentsPageHeader />
      <MainPageElement>
        <Tweet tweet={tweet} sessionUserId={"" + user?._id} />
      </MainPageElement>
      <MainPageElement>
        <CreateTweet userId={"" + user?._id} userImage={user?.wallpaperImg} />
      </MainPageElement>
      <Comments tweetId={id} />
    </div>
  );
};

export default Page;
