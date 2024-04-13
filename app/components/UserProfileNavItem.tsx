"use client";
import Link from "next/link";
import Dots from "/public/images/three-dots-svgrepo-com.svg";
import Image from "next/image";
import { ISessionUser } from "./Nav/Nav";
import { useSessionUserStore } from "../store/sessionUser";
import { useState } from "react";

interface Props {
  sessionUser?: ISessionUser;
}

const UserProfileNavItem = ({ sessionUser: sessionUserAuth }: Props) => {
  if (!sessionUserAuth) {
    return <div>Loading</div>;
  }
  return (
    <Link
      className="flex justify-center items-center hover:bg-gray-400 hover:bg-opacity-20 rounded-full px-2 "
      href={`/user/${sessionUserAuth?._id}`}
    >
      <div className="grid md:grid-cols-[1fr_2fr] grid-cols-[1fr_0px]">
        <div className="w-10 h-10 bg-gray-500 rounded-full "></div>
        <div className="w-full hidden md:block">
          <div className="font-bold">{sessionUserAuth?.username}</div>
          <p>{sessionUserAuth?.email}</p>
        </div>
      </div>
    </Link>
  );
};

export default UserProfileNavItem;
