"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";
interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
  signOut?: () => void;
}

const NavItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  signOut,
}) => {
  const router = useRouter();
  return (
    <div>
      {href ? (
        <Link href={href} prefetch={false}>
          <div className="py-1  ">
            <div className="rounded-full hover:cursor-pointer hover:bg-white hover:bg-opacity-10 p-2">
              <div className="md:flex md:gap-4">
                <Icon size={25} />
                <p className="hidden md:inline-block">{label}</p>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <button onClick={() => signOut()}>
          <div className="py-1  ">
            <div className="rounded-full hover:cursor-pointer hover:bg-white hover:bg-opacity-10 p-2">
              <div className="lg:flex lg:gap-4">
                <Icon size={25} />
                <p className="hidden lg:inline-block">{label}</p>
              </div>
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default NavItem;
