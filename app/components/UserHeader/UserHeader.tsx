"use client";
import { useRouter } from "next/navigation";

import { FaArrowLeft } from "react-icons/fa";

const UserHeader = ({
  username,
  tweetsCount,
}: {
  username: string;
  tweetsCount: string;
}) => {
  const router = useRouter();

  return (
    <div className="h-full w-full flex py-2 px-4 justify-start items-center gap-10">
      <button type="button" onClick={() => router.back()}>
        <div className="hover:bg-white hover:bg-opacity-30 rounded-full p-2">
          <FaArrowLeft size={20} />
        </div>
      </button>
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
