import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import github from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { hash, compare } from "bcryptjs";
import { User } from "@/models/users";
import { IUser } from "@/models/types";

const login = async (credentials: any) => {
  try {
    connectToDb();
    const user: IUser | null = await User.findOne({ email: credentials.email });
    if (!user || !user.passwordHash) throw new Error("Wrong credentials!");
    const isPasswordCorrect = await compare(
      credentials.password,
      user.passwordHash
    );
    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login");
  }
};

const credentialsConfig = CredentialsProvider({
  name: "credentials",
  credentials: {
    email: {
      label: "Email",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    try {
      const user = await login(credentials);
      return user;
    } catch (err) {
      return null;
    }
  },
});

const config = {
  providers: [github],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile?.email });

          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              image: profile?.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
