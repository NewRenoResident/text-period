import React from "react";
import Image from "next/image";
import userDefaultIcon from "@/public/Passport.png";

interface Props {
  img?: string;
}

export default function TweetUserImage({ img }: Props) {
  return (
    <div className="w-1 h-1 p-8 rounded-full relative">
      {img ? (
        <Image
          src={`/uploads/${img}`}
          className="object-cover rounded-full w-auto h-auto"
          alt="image"
          fill
          sizes="1"
        />
      ) : (
        <Image
          src={userDefaultIcon}
          className="object-cover rounded-full w-auto h-auto"
          alt="image"
          fill
          sizes="1"
        />
      )}
    </div>
  );
}
