interface TweetI {
  username: string;
  handle: string;
  time: string;
  content: string;
  replies: number;
  retweets: number;
  likes: number;
}

const Tweet: React.FC<TweetI> = ({
  username,
  handle,
  time,
  content,
  replies,
  retweets,
  likes,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 my-4 mx-2">
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <span className="font-bold text-gray-800">{username}</span>
        <span className="mx-2">@{handle}</span>
        <span>· {time}</span>
      </div>
      <p className="text-gray-800 text-md mb-3">{content}</p>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <span>{replies} ответов</span>
        <span>{retweets} ретвитов</span>
        <span>{likes} отметок "Нравится"</span>
      </div>
    </div>
  );
};

export default Tweet;
