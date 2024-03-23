"use client";
import { signIn } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
interface ICredentialsButton {
  type: "signIn" | "signUp";
}

const CredentialsButton = ({ type }: ICredentialsButton) => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    router.push("/signup");
  };
  return (
    <div className="mt-3">
      <form>
        <button
          onClick={() => signIn("credentials")}
          type="button"
          className="bg-gray-800 text-white cursor-pointer border-none w-72 gap-2 items-center px-4 py-2 rounded-3xl flex"
        >
          {type === "signIn" ? <div>Sign in</div> : <div>Sign up</div>}
        </button>
      </form>
    </div>
  );
};

export default CredentialsButton;
<form
  action={async () => {
    "use server";
    await signIn("credentials", {
      email: "test",
      password: "test",
    });
  }}
>
  <button type="submit">Test</button>;
</form>;
