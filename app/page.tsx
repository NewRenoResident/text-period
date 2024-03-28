import { redirect } from "next/navigation";
import Login from "./components/pages/Login/Login";
import { auth } from "@/lib/auth";
const Page = async () => {
  const user = await auth();
  if (user) {
    redirect("/home");
  }
  return (
    <div>
      <Login />
    </div>
  );
};

export default Page;
