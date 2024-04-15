"use client";
import React, { useState } from "react";
import Tweets from "@/app/components/Tweets/Tweets";
import UserHeader from "@/app/components/UserHeader/UserHeader";
import UserProfileCard from "@/app/components/UserProfileCard/UserProfileCard";
import UserTweets from "../Tweets/UserTweets.tsx/UserTweets";

export default function UserIdPageComponent({ userId, sessionUserId }) {
  const [offset, setOffset] = useState(0);
  const [tweets, setTweets] = useState([]);

  return (
    <div className="flex flex-col">
      <UserProfileCard userId={userId} />
      <UserTweets sessionUserId={sessionUserId} userId={userId} />
    </div>
  );
}
