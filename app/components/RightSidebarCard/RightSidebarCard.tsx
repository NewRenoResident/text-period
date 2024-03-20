import { ReactElement, ReactNode } from "react";

const RightSidebarCard = ({
  label,
  content,
  bottom: BottomComponent,
}: {
  label: string;
  content: ReactNode;
  bottom?: React.ComponentType<any>;
}) => {
  return (
    <div className="bg-[#16181c] w-fit rounded-2xl p-4 mt-2 ml-3 mr-2">
      <div className="text-[100%] font-bold ">{label}</div>
      <div>{content}</div>
      {BottomComponent && <BottomComponent />}
    </div>
  );
};

export default RightSidebarCard;
