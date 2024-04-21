"use client";
import Link from "next/link";
import Dots from "/public/images/three-dots-svgrepo-com.svg";
import Image from "next/image";
import { ISessionUser } from "./Nav/Nav";
import { useSessionUserStore } from "../store/sessionUser";
import { useEffect, useState } from "react";
import { loadUser } from "@/lib/serverActions";

const UserProfileNavItem = () => {
  const { sessionUser: user } = useSessionUserStore();

  if (!user) {
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
              fill
              sizes="1"
              objectFit="cover"
              className="rounded-full w-auto h-auto"
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
