import React from "react";
import Image from "next/image";
import userDefaultIcon from "@/public/Passport.png";

interface Props {
  img?: string;
}

export default function TweetUserImage({ img }: Props) {
  return (
    <div className="min-w-10 h-20 rounded-full">
      <Image
        src={userDefaultIcon}
        className="rounded-full"
        alt="image"
        width={50}
        height={50}
      />
    </div>
  );
}
