"use client";
import Comments from "@/app/components/Comments/Comments";
import CommentsPageHeader from "@/app/components/CommentsPageHeader/CommentsPageHeader";
import CreateTweet from "@/app/components/CreateTweet";
import Tweet from "@/app/components/Tweet/Tweet";
import UserHeader from "@/app/components/UserHeader/UserHeader";
import UserProfileCard from "@/app/components/UserProfileCard/UserProfileCard";
import MainPageElement from "@/app/components/pages/MainPageElement";

import React, { useEffect, useState } from "react";
import CreateComment from "../CreateComment/CreatComment";
import { loadComments } from "@/lib/serverActions";

export default function CommentsPage({ tweet, userId, userImage }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      const comments = await loadComments(tweet._id);
      const commentsResp = JSON.parse(comments);
      console.log(commentsResp);
      setComments(commentsResp);
    };
    getComments();
  }, []);

  return (
    <div>
      <CommentsPageHeader />
      <MainPageElement>
        <Tweet tweet={tweet} sessionUserId={"" + userId} />
      </MainPageElement>
      <MainPageElement>
        <CreateComment
          comments={comments}
          setComments={setComments}
          userId={"" + userId}
          userImage={userImage}
          tweetId={tweet?._id}
        />
      </MainPageElement>
      <Comments
        tweetId={tweet?._id}
        comments={comments}
        setComments={setComments}
      />
    </div>
  );
}
