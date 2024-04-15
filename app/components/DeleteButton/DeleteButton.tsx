import React from "react";
import { MdDelete } from "react-icons/md";

export default function DeleteButton({ action }) {
  return (
    <button onClick={action}>
      <div className="p-2 rounded-full hover:cursor-pointer hover:bg-white hover:bg-opacity-20">
        <MdDelete color="light-red" />
      </div>
    </button>
  );
}
