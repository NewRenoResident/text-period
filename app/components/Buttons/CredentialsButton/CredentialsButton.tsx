"use client";
import { useRouter } from "next/navigation";
interface ICredentialsButton {
  type: "signIn" | "signUp";
}

const CredentialsButton = ({ type }: ICredentialsButton) => {
  const router = useRouter();
  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log(1);
    e.preventDefault();
    router.push("signup");
  };
  return (
    <div className="mt-3">
      <form
        onSubmit={() => {
          handleClick;
        }}
      >
        <button className="bg-gray-800 text-white cursor-pointer border-none w-72 gap-2 items-center px-4 py-2 rounded-3xl flex">
          {type === "signIn" ? <div>Sign in</div> : <div>Sign up</div>}
        </button>
      </form>
    </div>
  );
};

export default CredentialsButton;
