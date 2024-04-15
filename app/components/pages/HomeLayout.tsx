import { NextFont } from "next/dist/compiled/@next/font";
import Nav from "../Nav/Nav";
import { Inter } from "next/font/google";
import RightSidebar from "../RightSidebar/RightSidebar";
import RightSidebarCard from "../RightSidebarCard/RightSidebarCard";
import RecommendedUsers from "../RightSidebar/RecommendedUsers/RecommendedUsers";
import ky from "ky";
const inter = Inter({ subsets: ["latin"] });

interface LayoutI {
  children: React.ReactNode;
}

const HomeLayout: React.FC<LayoutI> = async ({ children }) => {
  const randomUsers = await ky(
    "http://localhost:3000/api/users?random=true&count=5"
  ).json();

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
      <div className="w-full hidden lg:block">
        <RightSidebar>
          <RightSidebarCard label={"Кого читать"}>
            <RecommendedUsers users={randomUsers} />
          </RightSidebarCard>
        </RightSidebar>
      </div>
    </div>
  );
};

export default HomeLayout;
