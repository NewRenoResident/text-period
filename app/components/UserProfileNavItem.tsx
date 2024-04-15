"use client";
import Link from "next/link";
import Dots from "/public/images/three-dots-svgrepo-com.svg";
import Image from "next/image";
import { ISessionUser } from "./Nav/Nav";
import { useSessionUserStore } from "../store/sessionUser";
import { useEffect, useState } from "react";
import { loadUser } from "@/lib/serverActions";

interface Props {
  sessionUser?: ISessionUser;
}

const UserProfileNavItem = ({ sessionUser: sessionUserAuth }: Props) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const userResp = await loadUser("" + sessionUserAuth?._id);
      setUser(JSON.parse(userResp?.user));
      setIsLoading(false);
    };

    if (sessionUserAuth?._id) {
      getUser();
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [sessionUserAuth]);

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <Link
      className="flex justify-center items-center hover:bg-gray-400 hover:bg-opacity-20 rounded-full px-2 "
      href={`/user/${user?._id}`}
    >
      <div className="grid md:grid-cols-[1fr_2fr] grid-cols-[1fr_0px]">
        {user.img ? (
          <div className="w-10 h-10 relative">
            <Image
              src={`/uploads/${user?.img}`}
              alt="image profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        ) : (
          <div className="w-10 h-10 bg-gray-500 rounded-full "></div>
        )}

        <div className="w-full hidden md:block">
          <div className="font-bold">{user?.username}</div>
          <p>{user?.email}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserProfileNavItem;
