import Image from "next/image";
import white from "/public/white.svg";
import { IUser } from "@/models/types";

interface Props {
  userImage: string | undefined;
}

const CreateTweet = ({ userImage }: Props) => {
  return (
    <form className="w-full " action="">
      <div className="flex mb-4">
        <div className="w-20 h-20 bg-white rounded-full relative">
          {userImage ? (
            <Image
              alt=""
              src={`/uploads/${userImage}`}
              fill
              sizes="1"
              className="object-cover rounded-full"
            />
          ) : (
            <Image alt="user-picture" width={60} height={60} src={white} />
          )}
        </div>
        <input
          type="text"
          className="bg-inherit text-xl p-2 focus:border-none focus:outline-none"
          placeholder="What's happening?!"
        />
      </div>
      <div className="flex justify-between">
        <div className="ml-8">Icons</div>
        <button className="bg-[#0f4e78] rounded-2xl py-1 px-4 mr-8 mb-3 font-bold text-gray-400">
          Опубликовать пост
        </button>
      </div>
    </form>
  );
};

export default CreateTweet;
