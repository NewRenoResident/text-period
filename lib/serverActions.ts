import { User } from "@/models/users";
import { signIn } from "./auth";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export const handleSubmit = async (event) => {
  "use server";
  event.preventDefault();
  // Extract credentials (email, password) from form data
  const credentials = { email: "test", password: "test" }; // ...
  await signIn("credentials", credentials);
  // Redirect to protected route after successful login
};

export const goToRegisterPage = async () => {
  "use server";
  redirect("register");
};

export const goToLoginPage = async () => {
  "use server";
  redirect("login");
};

export const register = async (formData: FormData) => {
  "use server";
  const { username, email, password, img, repeatPassword } =
    Object.fromEntries(formData);
  if (repeatPassword !== password) {
    return "Passwords do not match";
  }

  try {
    connectToDb();
    const user = await User.findOne({ email });
    console.log(user);

    if (user) {
      return "User already exists";
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
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
