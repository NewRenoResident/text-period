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
    <div className="bg-[#16181c] rounded-2xl p-4 mt-2 ml-6 mr-[6vw]">
      <div className="text-2xl font-bold">{label}</div>
      <div>{content}</div>
      {BottomComponent && <BottomComponent />}
    </div>
  );
};

export default RightSidebarCard;
