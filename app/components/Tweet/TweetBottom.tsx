"use client";
import { FiMessageSquare } from "react-icons/fi";
import TweetBottomItem from "./TweetBottomItem";
import { MdDelete } from "react-icons/md";

interface Props {
  ownsToUser: boolean;
  onDelete: () => void;
}

const TweetBottom = ({ ownsToUser, onDelete }: Props) => {
  const icons = [
    {
      icon: FiMessageSquare,
      label: "Message",
      action: () => {},
      visible: true,
    },
    {
      icon: MdDelete,
      label: "Delete",
      action: onDelete,
      color: "hover:bg-red-500",
      visible: ownsToUser,
    },
  ];

  return (
    <div className="mt-4">
      <div className="flex gap-4">
        {icons.map((item) => (
          <TweetBottomItem
            visible={item.visible}
            color={item.color}
            key={item.label}
            icon={item.icon}
            action={item.action}
          />
        ))}
      </div>
    </div>
  );
};

export default TweetBottom;
