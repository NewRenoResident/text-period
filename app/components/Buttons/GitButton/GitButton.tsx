import Image from "next/image";
import github_white from "@/public/github-mark-white.svg";
import { signIn } from "auth";
const GitButton = async () => {
  return (
    <div className="mt-3">
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <button
          type="submit"
          className="bg-gray-800 text-white cursor-pointer border-none w-72 gap-2 items-center px-4 py-2 rounded-3xl flex"
        >
          <Image src={github_white} alt="github image" width={22} height={24} />
          <div>Sign in with GitHub</div>
        </button>
      </form>
    </div>
  );
};

export default GitButton;
