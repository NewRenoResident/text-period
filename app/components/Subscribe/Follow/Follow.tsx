import { useSessionUserStore } from "@/app/store/sessionUser";
import { subscribeToUser } from "@/lib/serverActions";
import { IUser } from "@/models/types";
import React from "react";
import BlueButton from "../../Buttons/BlueButton/BlueButton";

interface Props {
  subscribeToId: string;
  subscriberId: string;
  setFollowed: any;
}

export default function Follow({
  subscribeToId,
  subscriberId,
  setFollowed,
}: Props) {
  const { setSessionUser } = useSessionUserStore();
  const handleFollow = async (event: any) => {
    const user = await subscribeToUser(subscriberId, subscribeToId);
    if (user.following.includes(subscribeToId)) {
      setSessionUser(user);
      setFollowed(true);
    }
  };

  return (
    <form action={handleFollow}>
      <BlueButton text="Follow" active={true} type="submit" />
    </form>
  );
}
