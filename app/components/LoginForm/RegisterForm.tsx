"use client";
import { auth, signIn } from "@/lib/auth";
import { handleLogin, register } from "@/lib/serverActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useFormState, useFormStatus } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && handleLogin();
  }, [state?.success]);

  return (
    <form action={formAction}>
      <input
        type="text"
        className="w-full px-4 py-2 mb-4 text-base text-gray-300 bg-gray-700 border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
        name="username"
        placeholder="User name"
      />
      <input
        className="w-full px-4 py-2 mb-4 text-base text-gray-300 bg-gray-700 border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
        type="email"
        name="email"
        placeholder="Email"
      />

      <input
        className="w-full px-4 py-2 mb-4 text-base text-gray-300 bg-gray-700 border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
        type="password"
        name="password"
        placeholder="Password"
      />
      <input
        type="password"
        className="w-full px-4 py-2 mb-4 text-base text-gray-300 bg-gray-700 border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
        name="repeatPassword"
        placeholder="Repeat password"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Register
      </button>
      <div className="flex">{state?.error}</div>
    </form>
  );
};

export default RegisterForm;
