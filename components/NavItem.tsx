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
    <div className="py-1  ">
      <div className="rounded-full hover:cursor-pointer hover:bg-white hover:bg-opacity-10 p-2">
        <div className="lg:flex lg:gap-4">
          <Icon size={25} />
          <p className="hidden lg:inline-block">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
