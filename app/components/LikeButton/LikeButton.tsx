import { setLikeById } from "@/lib/serverActions";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

interface Props {
  likes: string[];
  sessionUserId: string;
  tweetId: string;
}

export default function LikeButton({
  likes: initialLikes,
  sessionUserId,
  tweetId,
}: Props) {
  console.log();

  const [likes, setLikes] = useState(initialLikes);
  const handleLikeClick = async (event: any) => {
    event.stopPropagation();
    const likesResponse = await setLikeById(tweetId, sessionUserId);

    setLikes(JSON.parse(likesResponse).jsonTweetLikes);
  };

  return (
    <div
      onClick={handleLikeClick}
      className="relative p-2 rounded-full hover:cursor-pointer hover:bg-white  hover:bg-opacity-20"
    >
      {likes.includes(sessionUserId) ? <IoMdHeart /> : <IoIosHeartEmpty />}

      <div className="absolute text-[10px] top-0 right-0 text-white bg-white bg-opacity-20 p-2 rounded-full flex justify-center items-center w-2 h-2">
        <p>{likes.length}</p>
      </div>
    </div>
  );
}
