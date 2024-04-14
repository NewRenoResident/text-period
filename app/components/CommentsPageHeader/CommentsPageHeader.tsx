"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function CommentsPageHeader() {
  const router = useRouter();
  return (
    <div className="h-full w-full flex py-2 px-4 justify-start items-center gap-10">
      <button type="button" onClick={() => router.push("/home")}>
        <div className="hover:bg-white hover:bg-opacity-30 rounded-full p-2">
          <FaArrowLeft size={20} />
        </div>
      </button>
      <div>
        <p className="text-2xl font-bold">Опубликовать пост</p>
        <p className="text-sm text-white text-opacity-40"></p>
      </div>
      <div></div>
    </div>
  );
}
