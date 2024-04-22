'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { deleteTweetById } from '@/lib/serverActions';
import { useTweetsStore } from '@/app/store/tweets';
import { Tweet as TweetI } from '../Tweets/types';
import TweetBottom from './TweetBottom';
import TweetUserImage from './TweetUserImage';
import TweetMainContent from './TweetMainContent';

interface Props {
  tweet: TweetI;
  sessionUserId: string;
}

function Tweet({ tweet, sessionUserId }: Props) {
  const [editMode, setEditMode] = useState(false);
  const { deleteById } = useTweetsStore();
  const { addStepToOffset } = useTweetsStore();

  const router = useRouter();

  const handleClick = (tweet_id: string) => {
    router.push(`/home/${tweet_id}`);
  };

  const handleDelete = async (e) => {
    const res = await deleteTweetById(tweet._id);
    deleteById(tweet._id);
    addStepToOffset(-1);
  };

  if (typeof tweet?.authorId === 'object') {
    return (
      <div>
        <div
          className="flex gap-3"
          onClick={() => {
            handleClick(tweet._id);
          }}
        >
          <TweetUserImage img={tweet?.authorId?.img} />
          <div>
            <TweetMainContent setEditMode={setEditMode} tweet={tweet} editMode={editMode} />
            <TweetBottom
              setEditMode={setEditMode}
              ownsToUser={`${sessionUserId}` === `${tweet.authorId._id}`}
              onDelete={handleDelete}
              likes={tweet.likes}
              sessionUserId={sessionUserId}
              tweetId={tweet._id}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tweet;
