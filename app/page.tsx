import { redirect } from "next/navigation";
import Login from "./components/pages/Login";
import { auth } from "@/lib/auth";
const Page = async () => {
  const session = await auth();
  console.log(session);

  if (session?.user) {
    redirect("/home");
  }
  return (
    <div>
      <Login />
    </div>
  );
};

export default Page;
