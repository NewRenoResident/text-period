import { useSessionUserStore } from "@/app/store/sessionUser";
import { IUser } from "@/models/types";
import React, { useState } from "react";
import Follow from "./Follow/Follow";
import UnFollow from "./UnFollow/Unfollow";

interface Props {
  subscribeTo: IUser;
}

export default function Subscribe({ subscribeTo }: Props) {
  const { sessionUser } = useSessionUserStore();
  const [followed, setFollowed] = useState(
    sessionUser?.following.includes(subscribeTo._id)
  );

  return (
    <div>
      {followed ? (
        <UnFollow
          subscribeToId={subscribeTo._id}
          setFollowed={setFollowed}
          subscriberId={sessionUser?._id}
        />
      ) : (
        <Follow
          subscribeToId={subscribeTo._id}
          setFollowed={setFollowed}
          subscriberId={sessionUser?._id}
        />
      )}
    </div>
  );
}
