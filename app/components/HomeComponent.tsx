"use client";
import CreateTweet from "@/app/components/CreateTweet";
import Tweets from "@/app/components/Tweets/Tweets";
import MainPageElement from "@/app/components/pages/MainPageElement";
import { IUser } from "@/models/types";
import { useEffect, useState } from "react";

interface Props {
  userImage: string | undefined;
  userId: string;
}

const HomeComponent = ({ userImage, userId }: Props) => {
  return (
    <>
      <MainPageElement>
        <CreateTweet userId={userId} userImage={userImage} />
      </MainPageElement>
      <Tweets sessionUserId={userId} />
    </>
  );
};

export default HomeComponent;
