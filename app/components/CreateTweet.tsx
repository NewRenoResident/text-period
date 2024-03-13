import Image from "next/image";
import white from "/public/white.svg";
const CreateTweet = () => {
  return (
    <form className="w-full " action="">
      <div className="flex mb-4">
        <Image alt="user-picture" width={60} height={60} src={white} />
        <input
          type="text"
          className="bg-black text-xl"
          placeholder="What's happening?!"
        />
      </div>
      <div className="flex justify-between">
        <div className="ml-8">Icons</div>
        <button className="bg-[#0f4e78] rounded-2xl py-1 px-4 mr-8 mb-3">
          Опубликовать пост
        </button>
      </div>
    </form>
  );
};

export default CreateTweet;
