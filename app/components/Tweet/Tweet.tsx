"use client";
import Image from "next/image";
import TweetBottom from "./TweetBottom";
import { useRouter } from "next/navigation";

interface TweetI {
  profile_img?: string;
  image?: string;
  tweet_id: string;
}

const Tweet = ({ profile_img, image, tweet_id }: TweetI) => {
  const router = useRouter();
  const handleClick = (tweet_id: string) => {
    router.push(`/home/${tweet_id}`);
  };

  return (
    <div
      className=" flex gap-3"
      onClick={() => {
        handleClick(tweet_id);
      }}
    >
      <div className="w-10 h-10 rounded-full bg-[#393b3e] pr-10">
        {profile_img && (
          <Image src={profile_img} width={60} height={60} alt="user-picture" />
        )}
      </div>
      <div>
        <div className="flex gap-1">
          <h2 className="font-bold">Litavrin</h2>
          <p className="text-[#71767b]">@belteanews 20 ч</p>
        </div>
        <div className="flex">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem libero, officiis neque hic recusandae praesentium
          assumenda vitae aperiam non dolore unde! Consequuntur exercitationem
          sint dignissimos quaerat blanditiis autem quisquam expedita?
        </div>
        {image && (
          <div className="w-full border border-solid border-[#2f3336] rounded-xl">
            <Image src={image} alt="image" width={500} height={500} />
          </div>
        )}
        <TweetBottom />
      </div>
    </div>
  );
};

export default Tweet;
