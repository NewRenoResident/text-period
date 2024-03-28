"use server";
import { User } from "@/models/users";
import { signIn } from "./auth";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { IUser } from "@/models/types";
import { useUserStore } from "@/store";
import { redirect } from "next/navigation";

export const setUserStoreData = async () => {
  "use server";
  const { user, setUserId } = useUserStore();
  console.log("USER" + user);
  return [user, setUserId];
};

export const getUserByEmail = async (
  email: string
): Promise<IUser | { error: string }> => {
  "use server";

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

export const handleSubmit = async (event) => {
  "use server";
  event.preventDefault();
  // Extract credentials (email, password) from form data
  const credentials = { email: "test", password: "test" }; // ...
  await signIn("credentials", credentials);
};

export const goToRegisterPage = async () => {
  "use server";
  redirect("register");
};

export const goToLoginPage = async () => {
  "use server";
  redirect("login");
};

export const register = async (previousState, formData: FormData) => {
  "use server";
  const { username, email, password, img, repeatPassword } =
    Object.fromEntries(formData);
  if (repeatPassword !== password) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ email });
    console.log(user);

    if (user) {
      return { error: "Username already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      passwordHash: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
export const login = async (formData) => {
  "use server";

  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

export const handleLogin = async () => {
  "use server";
  await signIn();
};
