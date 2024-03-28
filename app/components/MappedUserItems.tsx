"use client";
import NavItem from "./Nav/NavItem";
import { IoMdHome } from "react-icons/io";
import { IoSearchSharp, IoNotifications } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { IconType } from "react-icons";
import Image from "next/image";
import white from "/public/white.svg";
import { signOut } from "next-auth/react";

const MappedUserItems = () => {
  interface NavI {
    icon: IconType;
    label: string;
    href: string;
  }
  const icons: NavI[] = [
    {
      icon: IoMdHome,
      label: "Home",
      href: "/home",
    },
    {
      icon: IoSearchSharp,
      label: "Search",
      href: "/search",
    },
    {
      icon: IoNotifications,
      label: "Notifications",
      href: "/notifications",
    },
    {
      icon: BiMessage,
      label: "Send Message",
      href: "/messages",
    },
  ];
  return (
    <div>
      <div className="rounded-full hover:cursor-pointer w-fit hover:bg-white hover:bg-opacity-10 p-2">
        <Image src={white} alt="Picture of the author" width={25} height={25} />
      </div>
      {icons.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          href={item.href}
        />
      ))}
      <NavItem icon={CiLogout} label={"Logout"} signOut={signOut} />
    </div>
  );
};

export default MappedUserItems;
