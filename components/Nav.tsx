import { IoMdHome } from "react-icons/io";
import { IoSearchSharp, IoNotifications } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";

const Nav = () => {
  const icons = [
    {
      icon: <IoMdHome />,
      label: "Home",
      href: "/",
    },
    {
      icon: <IoSearchSharp />,
      label: "Search",
      href: "/",
    },
    {
      icon: <IoNotifications />,
      label: "Notifications",
      href: "/",
    },
    {
      icon: <BiMessage />,
      label: "Send Message",
      href: "/",
    },
    {
      icon: <IoSearchSharp />,
      label: "Search",
      href: "/",
    },
    {
      icon: <IoSearchSharp />,
      label: "Search",
      href: "/",
    },
  ];
  return <div></div>;
};

export default Nav;
