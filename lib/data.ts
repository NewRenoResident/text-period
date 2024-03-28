import { User } from "@/models/users";
import { auth } from "./auth";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { error: "User not found" };
    }

    return user;
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
