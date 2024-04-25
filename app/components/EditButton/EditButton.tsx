import React from "react";
import { useButtonClick } from "@/app/hooks/useButtonClick";
import { MdEdit } from "react-icons/md";
import EditTweet from "../EditTweet/EditTweet";

interface Props {
  setEditMode: any;
  visible: boolean;
}

export default function EditButton({ setEditMode, visible }: Props) {
  const handleButtonClick = (e: Event) => {
    e.stopPropagation();
    setEditMode(true);
  };
  if (visible){

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
} else {return null}
}
