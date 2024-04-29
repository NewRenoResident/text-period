import React from "react";
import { MdDelete } from "react-icons/md";

export default function DeleteButton({ action }) {
  const handleBottomClick = async (event) => {
    event.stopPropagation();
    await action();
  };
  return (
    <button onClick={handleBottomClick}>
      <div className="p-2 rounded-full hover:cursor-pointer hover:bg-white hover:bg-opacity-20">
        <MdDelete color="light-red" />
      </div>
    </button>
  );
}
