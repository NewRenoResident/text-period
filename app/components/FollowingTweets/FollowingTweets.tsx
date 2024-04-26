import React, { useState } from "react";
import MainPageElement from "../pages/MainPageElement";
import Tweet from "../Tweet/Tweet";

export default function FollowingTweets() {
  const [tweets, setTweets] = useState([]);
<<<<<<< HEAD
  return <div>FollowingTweets</div>;
=======
  return (
    <div className={`w-full flex-col justify-center items-center`}>
      {tweets.map((tweet) => (
        <div key={tweet?._id}>
          <MainPageElement>
            <Tweet tweet={tweet} sessionUserId={sessionUserId} />
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
>>>>>>> 9a142cae61cc69e21a8bd958f8f3a45105cc477d
}
