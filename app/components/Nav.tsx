import { IoMdHome } from "react-icons/io";
import { IoSearchSharp, IoNotifications } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import NavItem from "./NavItem";
import { IconType } from "react-icons";
import Image from "next/image";
import fav from "/public/favicon-32x32.png";
interface NavI {
  icon: IconType;
  label: string;
  href: string;
}

const Nav = () => {
  const icons: NavI[] = [
    {
      icon: IoMdHome,
      label: "Home",
      href: "/",
    },
    {
      icon: IoSearchSharp,
      label: "Search",
      href: "/",
    },
    {
      icon: IoNotifications,
      label: "Notifications",
      href: "/",
    },
    {
      icon: BiMessage,
      label: "Send Message",
      href: "/",
    },
    {
      icon: MdAccountCircle,
      label: "Profile",
      href: "/",
    },
    {
      icon: CiLogout,
      label: "Logout",
      href: "/",
    },
  ];
  return (
    <div className=" flex flex-col px-[2vw] h-full">
      <div className="rounded-full hover:cursor-pointer w-fit hover:bg-white hover:bg-opacity-10 p-2">
        <Image src={fav} alt="Picture of the author" width={25} height={25} />
      </div>
      {icons.map((item) => (
        <NavItem icon={item.icon} label={item.label} href={item.href} />
      ))}
    </div>
  );
};

export default Nav;
