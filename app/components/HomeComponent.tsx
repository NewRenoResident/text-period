"use client";
import CreateTweet from "@/app/components/CreateTweet";
import Tweets from "@/app/components/Tweets/Tweets";
import MainPageElement from "@/app/components/pages/MainPageElement";
import { IUser } from "@/models/types";
import { useEffect, useState } from "react";

interface Props {
  userImage: string | undefined;
}

const HomeComponent = ({ userImage }: Props) => {
  return (
    <>
      <MainPageElement>
        <CreateTweet userImage={userImage} />
      </MainPageElement>
      <Tweets />
    </>
  );
};

export default HomeComponent;
