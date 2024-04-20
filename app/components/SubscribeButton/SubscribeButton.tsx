import { useSessionUserStore } from "@/app/store/sessionUser";
import { IUser } from "@/models/types";
import React, { useState } from "react";

interface Props {
  label: [string, string];
  subscribeTo: IUser;
}

export default function SubscribeButton({ label, subscribeTo }: Props) {
  const { sessionUser } = useSessionUserStore();
  const [followed, setFollowed] = useState(
    sessionUser?.following.includes(subscribeTo._id)
  );

  return (
    <button className="bg-white text-black p-1 rounded-full">
      {followed ? label[0] : label[1]}
    </button>
  );
}
