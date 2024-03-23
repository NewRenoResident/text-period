import { register } from "@/lib/serverActions";
import { CgProfile } from "react-icons/cg";

const Page = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="w-96 xl:w-[450px] flex flex-col gap-4 p-8 bg-gray-500 rounded-3xl">
        <div className="flex items-center justify-center">
          <CgProfile className="h-10 w-10" />
        </div>
        <h2 className="text-2xl font-bold text-white">CREATE NEW ACCOUNT</h2>
        <form action={register} className="flex flex-col gap-2 ">
          <input
            type="text"
            className="input-lgn"
            name="username"
            placeholder="User name"
          />
          <input
            type="text"
            className="input-lgn"
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            className="input-lgn"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="input-lgn"
            name="repeatPassword"
            placeholder="Repeat password"
          />
          <button className="bg-blue-600 rounded-2xl px-4 py-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Page;
