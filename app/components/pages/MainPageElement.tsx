const MainPageElement = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-solid border-y border-[#2f3336] hover:bg-white hover:bg-opacity-10">
      <div className="w-full p-2">{children}</div>
    </div>
  );
};

export default MainPageElement;
