import React from "react";
import MainPageElement from "../pages/MainPageElement";
import { IoNotifications } from "react-icons/io5";
import { FaComments } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdAutoDelete } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

const icons = {
  default: <IoNotifications size={35} />,
  like: <FcLikePlaceholder size={35} />,
  comment: <FaComments size={35} />,
  delete: <MdAutoDelete size={35} />,
  modified: <TfiWrite size={35} />,
};

export default function Notification({
  content = "test",
  createdAt = "today",
  type = "comment",
}) {
  return (
    <div className="flex p-2 gap-2 items-center">
      <div>{icons[type]}</div>
      <div>{content}</div>
    </div>
  );
}
