import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import BaseLayout from "../components/BaseLayout";
import HomeLayout from "../components/pages/HomeLayout";
import { auth } from "@/lib/auth";
import { useUserStore } from "@/store";
import InitializeUserStore from "../components/InitializeUserStore";
import ky from "ky";
import TestComponent from "../components/TestComponent";
import StoreSessionUser from "../components/StoreSessionUser";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Text Period",
  description: "Home Page",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dirtyRandomUsers = await ky(
    "http://localhost:3000/api/users?random=true&count=5"
  ).json();
  const randomUsers = JSON.parse(JSON.stringify(dirtyRandomUsers));
  const session = await auth();
  return (
    <BaseLayout inter={inter}>
      <StoreSessionUser session={session}>
        <HomeLayout randomUsers={randomUsers.users}>{children}</HomeLayout>
      </StoreSessionUser>
    </BaseLayout>
  );
}
