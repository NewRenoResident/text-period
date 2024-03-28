import RegisterForm from "@/app/components/LoginForm/RegisterForm";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Suspense, useState } from "react";
import { useFormStatus } from "react-dom";
import { CgProfile } from "react-icons/cg";

const Page = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/home");
  }
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-900 md:bg-gray-800">
        <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-lg">
          <h1 className="text-center text-gray-100 text-2xl mb-6">Sign in</h1>
          <div className="flex items-center justify-between mb-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          </div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default Page;

// (
//   <div className=" w-screen h-screen flex justify-center items-center">
//     <div className="w-96 xl:w-[450px] flex flex-col gap-4 p-8 bg-gray-500 rounded-3xl">
//       <div className="flex items-center justify-center">
//         <CgProfile className="h-10 w-10" />
//       </div>
//       <h2 className="text-2xl font-bold text-white">CREATE NEW ACCOUNT</h2>
//       <form action={register} className="flex flex-col gap-2 ">
//         <input
//           type="text"
//           className="input-lgn"
//           name="username"
//           placeholder="User name"
//         />
//         <input
//           type="text"
//           className="input-lgn"
//           name="email"
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           className="input-lgn"
//           name="password"
//           placeholder="Password"
//         />
//         <input
//           type="password"
//           className="input-lgn"
//           name="repeatPassword"
//           placeholder="Repeat password"
//         />
//         <button className="bg-blue-600 rounded-2xl px-4 py-2">Submit</button>
//       </form>
//     </div>
//   </div>
// )
