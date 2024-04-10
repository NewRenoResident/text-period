import Link from "next/link";
import Dots from "/public/images/three-dots-svgrepo-com.svg";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/data";

const getUser = async () => {
  fetch("localhost:3000/api/users/");
};

const UserProfileNavItem = async () => {
  const session = await auth();
  const user = await getUserByEmail(session?.user?.email!);

  return (
    <Link
      className="flex justify-center items-center hover:bg-gray-400 hover:bg-opacity-20 rounded-full px-2 "
      href={`/user/${user?._id}`}
    >
      <div className="grid md:grid-cols-[1fr_2fr] grid-cols-[1fr_0px]">
        <div className="w-10 h-10 bg-gray-500 rounded-full "></div>
        <div className="w-full hidden md:block">
          <div className="font-bold">{user.username}</div>
          <p>{user?.email}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserProfileNavItem;
