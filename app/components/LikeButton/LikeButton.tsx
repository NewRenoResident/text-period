import { setLikeById, setLikeToCommentById } from "@/lib/serverActions";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

interface Props {
  likes: string[];
  sessionUserId: string;
  tweetId: string;
  type?: "comment";
}

export default function LikeButton({
  handleLike,
  likes: initialLikes,
  sessionUserId,
  tweetId,
  type,
}: Props) {
  const [likes, setLikes] = useState(initialLikes);
  const handleLikeClick = async (event: any) => {
    event.stopPropagation();
    handleLike(setLikes, tweetId);
  };

  return (
    <div>
      <div
        onClick={handleLikeClick}
        className="p-2 rounded-full hover:cursor-pointer hover:bg-white flex gap-2 hover:bg-opacity-20"
      >
        {likes?.includes(sessionUserId) ? <IoMdHeart /> : <IoIosHeartEmpty />}

        <div className="text-xs text-white flex justify-center items-center">
          <p className="font-bold">{likes?.length}</p>
        </div>
      </div>
    </div>
  );
}
