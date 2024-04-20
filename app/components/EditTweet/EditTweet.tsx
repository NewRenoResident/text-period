import React from "react";

interface Props {
  visible: boolean;
  onClose: (e: Event) => void;
}

export default function EditTweet({ visible, onClose }: Props) {
  if (visible) {
    return (
      <div
        onClick={(e: Event) => {
          e.stopPropagation();
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 bg-white bg-opacity-20"
      >
        <button onClick={onClose}>Close</button>
      </div>
    );
  }
  return null;
}
