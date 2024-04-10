import ky from "ky";

const RightSidebar = async ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default RightSidebar;
