import React from "react";
import { useButtonClick } from "@/app/hooks/useButtonClick";
import { MdEdit } from "react-icons/md";
import EditTweet from "../EditTweet/EditTweet";

export default function EditButton() {
  const { buttonStatus, handleButtonClick, doNotHandleButtonClick } =
    useButtonClick();
  return (
    <>
      <div
        onClick={handleButtonClick}
        className={` p-2 rounded-full hover:cursor-pointer  hover:bg-white hover:bg-opacity-20`}
      >
        <MdEdit />
        <EditTweet visible={buttonStatus} onClose={handleButtonClick} />
      </div>
    </>
  );
}
