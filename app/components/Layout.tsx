import { NextFont } from "next/dist/compiled/@next/font";
import Nav from "./Nav";

interface LayoutI {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutI> = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <div className="h-full ">
        <nav>
          <Nav />
        </nav>
      </div>
      <div className="flex-grow border border-solid border-[#2f3336] border-r-2">
        {children}
      </div>
      <div className="w-32 hidden lg:block"></div>
    </div>
  );
};

export default Layout;
