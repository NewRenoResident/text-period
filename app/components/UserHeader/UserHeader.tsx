"use client";

import { FaArrowLeft } from "react-icons/fa";

const UserHeader = ({
  username,
  tweetsCount,
}: {
  username: string;
  tweetsCount: string;
}) => {
  return (
    <div className="h-full w-full flex py-2 px-4 justify-start items-center gap-10">
      <div>
        <FaArrowLeft size={20} />
      </div>
      <div>
        <p className="text-2xl font-bold">{username}</p>
        <p className="text-sm text-white text-opacity-40">
          {tweetsCount} постов
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default UserHeader;
