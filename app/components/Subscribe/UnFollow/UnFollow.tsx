import { useSessionUserStore } from "@/app/store/sessionUser";
import { unSubscribeToUser } from "@/lib/serverActions";
import React from "react";
import BlackButton from "../../Buttons/BlackButton";

export default function UnFollow({
  subscriberId,
  subscribeToId,
  setFollowed,
}: any) {
  const { setSessionUser } = useSessionUserStore();
  const handleUnFollow = async (event: any) => {
    const user = await unSubscribeToUser(subscriberId, subscribeToId);
    if (!user.following.includes(subscribeToId)) {
      setSessionUser(user);
      setFollowed(false);
    }
  };
  return (
    <form action={handleUnFollow}>
      <button type="submit" className="bg-black text-white rounded-full p-1">
        <BlackButton text="Unfollow" active={true} type="submit" />
      </button>
    </form>
  );
}
