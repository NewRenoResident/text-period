"use client";
import Image from "next/image";
import white from "/public/white.svg";
import { useState } from "react";
import { createNewComment } from "@/lib/serverActions";
import { useSessionUserStore } from "@/app/store/sessionUser";

interface Props {
  tweetId: string;
  comments: any;
  setComments: any;
}

const CreateComment = ({ tweetId, setComments }: Props) => {
  const [text, setText] = useState("");
  const { sessionUser } = useSessionUserStore();

  const createCommentWithUserIdAndTweetId = createNewComment.bind(
    null,
    sessionUser?._id,
    tweetId
  );

  const handleUpdateTweet = async (e: FormData) => {
    const commentResp = await createCommentWithUserIdAndTweetId(e);
    const comment = JSON.parse(commentResp);

    if (comment?.comment) {
      setComments((prev) => [comment.comment, ...prev]);
    }

    setText("");
  };
  return (
    <form className="w-full " action={handleUpdateTweet}>
      <div className="flex mb-4">
        <div className="w-20 h-20 bg-[#3e4144] rounded-full relative">
          {sessionUser?.img ? (
            <Image
              alt="user pic"
              src={`/uploads/${sessionUser?.img}`}
              fill
              sizes="1"
              className="object-cover rounded-full w-auto h-auto"
            />
          ) : (
            <Image alt="user-picture" width={60} height={60} src={white} />
          )}
        </div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="content"
          type="text"
          className="bg-inherit text-xl p-2 focus:border-none focus:outline-none"
          placeholder="What's happening?!"
        />
      </div>
      <div className="flex justify-between">
        <div className="ml-8">Icons</div>
        <button
          disabled={!Boolean(text)}
          className={`${text ? "bg-sky-500 text-white" : "bg-[#0f4e78] text-gray-400 "} rounded-2xl py-1 px-4 mr-8 mb-3 font-bold `}
        >
          Опубликовать пост
        </button>
      </div>
    </form>
  );
};

export default CreateComment;
