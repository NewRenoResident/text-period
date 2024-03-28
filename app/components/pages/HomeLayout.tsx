import { NextFont } from "next/dist/compiled/@next/font";
import Nav from "../Nav/Nav";
import { Inter } from "next/font/google";
import RightSidebar from "../RightSidebar/RightSidebar";
import RightSidebarCard from "../RightSidebarCard/RightSidebarCard";
const inter = Inter({ subsets: ["latin"] });

interface LayoutI {
  children: React.ReactNode;
}

const HomeLayout: React.FC<LayoutI> = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <div className="h-full w-1/2">
        <nav>
          <Nav />
        </nav>
      </div>
      <div className="flex-grow border border-solid border-[#2f3336] border-r-2">
        {children}
      </div>
      <div className="min-w-32 hidden lg:block">
        <RightSidebar>
          <RightSidebarCard label={"Кого почитать"} />
        </RightSidebar>
      </div>
    </div>
  );
};

export default HomeLayout;
