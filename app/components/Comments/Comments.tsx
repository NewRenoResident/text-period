"use client";
import { useEffect, useState } from "react";
import MainPageElement from "../pages/MainPageElement";
import { useInView } from "react-intersection-observer";
import ky from "ky";
import Tweet from "../Tweet/Tweet";
import Comment from "../Component/Comment";

import { loadComments } from "@/lib/serverActions";

interface Props {
  tweetId: number;
  numberOfTweetsToFetch?: number;
  comments: any;
  setComments: any;
}

const Comments = ({
  numberOfTweetsToFetch = 5,
  tweetId,
  comments,
  setComments,
}: Props) => {
  const [ref, inView] = useInView();

  const [empty, setEmpty] = useState(false);
  const [loadMore, setLoadMore] = useState(1);

  const loadMoreComments = async () => {
    const commetns = await loadComments(tweetId);

    // setComments(apiTweets.tweets);
  };

  return (
    <div className={`w-full flex-col justify-center items-center`}>
      {comments.map((comment) => (
        <div key={comment._id}>
          <MainPageElement>
            <Comment tweet={comment} />
          </MainPageElement>
        </div>
      ))}
    </div>
  );
};

export default Comments;
