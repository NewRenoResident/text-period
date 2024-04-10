const RightSidebarCard = async ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-[#16181c] w-fit rounded-2xl p-4 mt-2 ml-3 mr-2">
      <div className="text-[100%] font-bold ">{label}</div>
      {children}
    </div>
  );
};

export default RightSidebarCard;
