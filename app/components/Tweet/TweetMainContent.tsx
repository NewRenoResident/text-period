import React from 'react';
import Image from 'next/image';
import { ITweet } from '@/models/types';
import TweetContent from './TweetContent';
import TweetEditMode from './TweetEditMode';
import { useParseDate } from '@/app/hooks/useParseDate';
import { useTweetsStore } from '@/app/store/tweets';
import { updateTweet } from '@/lib/serverActions';

interface Props {
  tweet: ITweet;
  editMode: any;
  setEditMode: any;
}

export default function TweetMainContent({ tweet, editMode, setEditMode }: Props) {
  const {
    days, hours, minutes, seconds,
  } = useParseDate(tweet.createdAt);
  const { findAndUpdateTweet } = useTweetsStore();

  const editTweetHandler = async (formData) => {
    const newTweet = await updateTweet(tweet._id, formData.get('content'));
    if (newTweet._id){
      findAndUpdateTweet(newTweet)
    }
    setEditMode(false);
  };

  return (
    <div>
      <div className="flex justify-start items-center gap-2">
        <h2 className="font-bold">{tweet?.authorId?.username}</h2>
        <p className="text-[#71767b]">{tweet?.authorId?.email}</p>
        <p className="text-sm text-gray-500">
          {days >= 1 ? `${days} Days` : hours >= 1 ? `${hours} Hours` : `${minutes} Minutes`}
        </p>
      </div>
      {editMode ? (
        <TweetEditMode defaultText={tweet.content} action={editTweetHandler} />
      ) : (
        <TweetContent tweet={tweet} createdAt={tweet.createdAt} />
      )}
    </div>
  );
}
