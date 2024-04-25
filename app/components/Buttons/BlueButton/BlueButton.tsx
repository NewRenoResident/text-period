import React from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  active?: boolean;
}

export default function BlueButton({ text, type, active }: Props) {
  return (
    <div className="flex justify-center items-center">
      <button type={type} 
      disabled={!active}
      className={`${active ? "bg-sky-500 text-white": "bg-[#0f4e78] text-gray-400"}   rounded-2xl px-3 py-1 font-bold`}>
        {text}
      
      </button>
    </div>
  );
}
