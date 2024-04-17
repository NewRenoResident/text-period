import React, { useState } from "react";

interface Props {
  label: string;
  subscribeTo: string;
}

export default function SubscribeButton({ label, subscribeTo }): Props {
  const [text, setText] = useState(label);

  return (
    <button className="bg-white text-black p-1 rounded-full">{label}</button>
  );
}
