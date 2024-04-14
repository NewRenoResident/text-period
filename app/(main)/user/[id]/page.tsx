import UserIdPageComponent from "@/app/components/UserIdPageComponent/UserIdPageComponent";
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
    <UserIdPageComponent userId={params.id} sessionUserId={"" + user?._id} />
  );
}
