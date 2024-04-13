import Tweets from "@/app/components/Tweets/Tweets";
import UserHeader from "@/app/components/UserHeader/UserHeader";
import UserProfileCard from "@/app/components/UserProfileCard/UserProfileCard";
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/data";
import { IUser } from "@/models/types";

export default async function Page({ params }: { params: { id: string } }) {
  const getUser = async () => {
    const session = await auth();
    const user = (await getUserByEmail(session?.user?.email!)) as IUser;
    if (user?.email) return user;
  };
  const user = await getUser();

  return (
    <div className="flex flex-col">
      <UserProfileCard userId={params.id} />
      <Tweets userId={params.id} sessionUserId={"" + user?._id} />
    </div>
  );
}
