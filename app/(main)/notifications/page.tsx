import NotificationsList from "@/app/components/NotificationsList/NotificationsList";
import MainPageElement from "@/app/components/pages/MainPageElement";
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/serverActions";
import { IUser } from "@/models/types";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Notifications = async () => {
  const getUser = async () => {
    const session = await auth();
    const user = (await getUserByEmail(session?.user?.email!)) as IUser;
    if (user?.email) return user;
  };
  const user = await getUser();

  return (
    <div>
      <MainPageElement>
        <div className="h-full w-full flex py-2 px-4 justify-start items-center gap-10">
          <Link href="/home">
            <div className="hover:bg-white hover:bg-opacity-30 rounded-full p-2">
              <FaArrowLeft size={20} />
            </div>
          </Link>
          <div>
            <p className="text-2xl font-bold">Уведомления</p>
          </div>
          <div></div>
        </div>
      </MainPageElement>
      <NotificationsList userId={"" + user?._id} />
    </div>
  );
};
export default Notifications;
