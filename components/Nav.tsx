import { IoMdHome } from "react-icons/io";
import { IoSearchSharp, IoNotifications } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import NavItem from "./NavItem";
import { IconType } from "react-icons";

interface NavI {
  icon: IconType;
  label: string;
  href: string;
}

const Nav = () => {
  const icons: [NavI] = [
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
      {icons.map((item) => (
        <NavItem icon={item.icon} label={item.href} href={item.href} />
      ))}
    </div>
  );
};

export default Nav;
