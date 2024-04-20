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
  return (
    <div className="flex">
      <div className="flex w-full h-screen flex-col px-[2vw]  justify-between py-4">
        <MappedUserItems />
        <UserProfileNavItem />
      </div>
    </div>
  );
};

export default Nav;
