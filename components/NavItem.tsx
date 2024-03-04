import { IconType } from "react-icons";
interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
}

const NavItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, href }) => {
  return (
    <div className="py-2  ">
      <div className="rounded-full hover:cursor-pointer  hover: hover:bg-white hover:bg-opacity-10 p-4">
        <Icon size={30} />
      </div>
    </div>
  );
};

export default NavItem;
