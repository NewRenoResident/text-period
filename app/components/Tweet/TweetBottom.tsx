"use client";
import { FiMessageSquare } from "react-icons/fi";
import TweetBottomItem from "./TweetBottomItem";
import { MdDelete } from "react-icons/md";
import LikeButton from "../LikeButton/LikeButton";
interface Props {
  ownsToUser: boolean;
  onDelete: () => void;
  likes: string[];
  sessionUserId: string;
  tweetId: string;
}

const TweetBottom = ({
  ownsToUser,
  onDelete,
  likes,
  sessionUserId,
  tweetId,
}: Props) => {
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
        <LikeButton
          tweetId={tweetId}
          likes={likes}
          sessionUserId={sessionUserId}
        />

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
