import React, { useState } from "react";
import UserTweets from "../Tweets/UserTweets.tsx/UserTweets";
import BlueButton from "../Buttons/BlueButton/BlueButton";
import FollowingTweets from "../FollowingTweets/FollowingTweets";

interface Props {
  userId: string;
  sessionUserId: string;
}
export default function TweetsTypeNav({ userId, sessionUserId }: Props) {
  const [tweetTypes, setTweetTypes] = useState("user");
  const handleButtonClick = (type: string) => {
    setTweetTypes(type);
  };

  return (
    <div>
      <div className="flex justify-around h-10 gap-1">
        <BlueButton
          className="w-full h-full hover:bg-opacity-80 rounded-none"
          text="Твиты"
          active={!(tweetTypes === "user")}
          onClick={() => handleButtonClick("user")}
        />
        <BlueButton
          className="w-full h-full hover:bg-opacity-80 rounded-none"
          text="Подписки"
          active={!(tweetTypes === "following")}
          onClick={() => handleButtonClick("following")}
        />
      </div>
      {/* <div>
        {tweetTypes === "user" && (
          <UserTweets sessionUserId={sessionUserId} userId={userId} />
        )}
        {tweetTypes === "following" && <FollowingTweets />}
      </div> */}
    </div>
  );
}
