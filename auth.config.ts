import { NextConfig } from "next";
import { headers } from "next/headers";
import { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./lib/serverActions";
import { Tweet } from "./models/tweets";
import { User } from "./models/users";

export const authConfig = {
  providers: [],
  callbacks: {
    async jwt({ token, user, account, profile, trigger }) {
      if (user) {
        if (account?.provider === "github") {
          console.log("EMAIL" + user.email);
          const res = await User.findOne({ email: user?.email });
          token.id = res?.id;
        } else {
          token.id = user.id;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        if (token && typeof token.id === "string") {
          session.user.id = token.id;
        }
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnHomePage = request.nextUrl?.pathname.startsWith("/home");
      const isOnMainPage = request.nextUrl?.pathname.startsWith("/");
      if (isOnHomePage && !user) {
        return false;
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
