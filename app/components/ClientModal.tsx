"use client";

import { ReactNode, useState } from "react";


const Modal = ({ label }: { label: string }) => {
  const [diplayModal, setdisplayModal] = useState(true);

  const handleClose = () => {
    setdisplayModal(false);
  };

  return (
    <>
      {diplayModal ? (
        <div className="w-screen h-screen bg-gray-400 bg-opacity-40 absolute top-0 flex items-center justify-center">
          <div className="w-1/3 bg-black rounded-lg">
            <div className="p-4">
              <div className="flex justify-between">
                <h2>{label}</h2>
                <button onClick={handleClose}>x</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
