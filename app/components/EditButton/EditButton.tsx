import React from "react";
import { useButtonClick } from "@/app/hooks/useButtonClick";
import { MdEdit } from "react-icons/md";
import EditTweet from "../EditTweet/EditTweet";

interface Props {
  setEditMode: any;
}

export default function EditButton({ setEditMode }: Props) {
  const handleButtonClick = (e: Event) => {
    e.stopPropagation();
    setEditMode(true);
  };
  return (
    <>
      <div
        onClick={handleButtonClick}
        className={` p-2 rounded-full hover:cursor-pointer  hover:bg-white hover:bg-opacity-20`}
      >
        <MdEdit />
      </div>
    </>
  );
}
