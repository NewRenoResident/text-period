"use client";
import React, { useState } from "react";
import Tweets from "@/app/components/Tweets/Tweets";
import UserHeader from "@/app/components/UserHeader/UserHeader";
import UserProfileCard from "@/app/components/UserProfileCard/UserProfileCard";
import UserTweets from "../Tweets/UserTweets.tsx/UserTweets";
import TweetsTypeNav from "../TweetsTypeNav/TweetsTypeNav";

export default function UserIdPageComponent({ userId, sessionUserId }) {
  return (
    <div className="flex flex-col">
      <UserProfileCard userId={userId} />
      <TweetsTypeNav userId={userId} sessionUserId={sessionUserId} />
    </div>
  );
}
