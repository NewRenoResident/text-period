"use client";
import { FiMessageSquare } from "react-icons/fi";
import TweetBottomItem from "./TweetBottomItem";
import { MdDelete } from "react-icons/md";
import LikeButton from "../LikeButton/LikeButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";

interface Props {
  ownsToUser: boolean;
  onDelete: () => void;
  likes: string[];
  sessionUserId: string;
  tweetId: string;
  setEditMode: any
}

const TweetBottom = ({
  setEditMode,
  ownsToUser,
  onDelete,
  likes,
  sessionUserId,
  tweetId,
  type,
}: Props) => {
  const icons = [
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
          type={type}
          tweetId={tweetId}
          likes={likes}
          sessionUserId={sessionUserId}
        />
        <EditButton setEditMode={setEditMode} visible={ownsToUser}/>
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
