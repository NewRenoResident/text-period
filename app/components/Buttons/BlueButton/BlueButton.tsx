import React from 'react';

interface Props {
  text: string;
  onClick: () => void;
}

export default function BlueButton({ text }: Props) {
  return (
    <div className="flex justify-center items-center">
      <button className="bg-sky-500 text-white rounded-2xl px-3 py-1 font-bold ">{text}</button>
    </div>
  );
}
