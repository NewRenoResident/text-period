import UserProfileNavItem from "../UserProfileNavItem";
import MappedUserItems from "../MappedUserItems";
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/data";
import { Session } from "next-auth";

export interface ISessionUser {
  profileInfo: {
    fullName: string;
    bio: string;
    location: string;
    website: string;
    dateOfBirth: null | string | Date;
  };
  username: string;
  email: string;
  followers: any;
  following: any;
  createdAt: any;
  updatedAt: any;
  wallpaperImg: string;
  img: string;
  _id: string;
}

const Nav = async () => {
  const getSessionUser = async () => {
    const session = await auth();
    const user = await getUserByEmail(session?.user?.email!);
    if (!user?._doc) {
      console.error("User document not found.");
    } else {
      let { passwordHash, __v, _id, ...sessionUser } = user._doc;
      sessionUser = { ...sessionUser, _id: "" + _id } as ISessionUser;

      return sessionUser;
    }
  };

  const sessionUser = await getSessionUser();

  return (
    <div className="flex">
      <div className="flex w-full h-screen flex-col px-[2vw]  justify-between py-4">
        <MappedUserItems />
        <UserProfileNavItem sessionUser={sessionUser} />
      </div>
    </div>
  );
};

export default Nav;
