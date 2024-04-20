import { NextFont } from "next/dist/compiled/@next/font";
import Nav from "../Nav/Nav";
import { Inter } from "next/font/google";
import RightSidebar from "../RightSidebar/RightSidebar";
import RightSidebarCard from "../RightSidebarCard/RightSidebarCard";
import RecommendedUsers from "../RightSidebar/RecommendedUsers/RecommendedUsers";
import { IUser } from "@/models/types";
import ky from "ky";
import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/lib/serverActions";
const inter = Inter({ subsets: ["latin"] });

interface LayoutI {
  children: React.ReactNode;
  randomUsers: IUser[];
}

const HomeLayout: React.FC<LayoutI> = async ({ children, randomUsers }) => {
  return (
    <div className="grid md:grid-cols-[1fr_4fr_1fr] grid-cols-[60px_1fr_0px] h-screen ">
      <div className="h-full">
        <nav>
          <Nav />
        </nav>
      </div>
      <div
        style={{
          scrollbarColor: "rgba(255, 255, 255, 0.1) rgba(255, 255, 255, 0.1)",
        }}
        className="overflow-auto flex-grow border border-solid border-[#2f3336] border-r-2"
      >
        {children}
      </div>
      <div className="w-full  lg:block">
        <RightSidebar>
          <RightSidebarCard label={"Кого читать"}>
            <RecommendedUsers />
          </RightSidebarCard>
        </RightSidebar>
      </div>
    </div>
  );
};

export default HomeLayout;
