"use client";
import { useEffect, useState } from "react";
import MainPageElement from "../pages/MainPageElement";
import { useInView } from "react-intersection-observer";
import ky from "ky";
import Tweet from "../Tweet/Tweet";
import { loadComments } from "@/lib/serverActions";

interface Props {
  tweetId: number;
  numberOfTweetsToFetch?: number;
}

const Comments = ({ numberOfTweetsToFetch = 5, tweetId }: Props) => {
  const [ref, inView] = useInView();
  const [empty, setEmpty] = useState(false);
  const [loadMore, setLoadMore] = useState(1);

  const loadMoreComments = async () => {
    console.log("TweetID" + tweetId);

    const commetns = await loadComments(tweetId);
  };

  useEffect(() => {
    if (inView) {
      loadMoreComments();
    }
  }, [inView, loadMore]);

  return (
    <div className={`w-full flex-col justify-center items-center`}>
      {comments.map((comment) => (
        <div key={comment._id}>
          <MainPageElement>
            <div></div>
            {/* <Tweet tweet={tweet} sessionUserId={sessionUserId} /> */}
          </MainPageElement>
        </div>
      ))}

      {empty ? (
        <div className="mx-auto w-fit p-10">No tweets</div>
      ) : (
        <div className="m-auto w-fit" ref={ref}>
          <button
            type="button"
            onClick={() => {
              setLoadMore((prev) => prev + 1);
            }}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Comments;
