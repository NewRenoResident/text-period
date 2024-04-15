import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import BaseLayout from "../components/BaseLayout";
import HomeLayout from "../components/pages/HomeLayout";
import { auth } from "@/lib/auth";
import { useUserStore } from "@/store";
import InitializeUserStore from "../components/InitializeUserStore";
import ky from "ky";
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
  const randomUsers = await ky(
    "http://localhost:3000/api/users?random=true&count=5"
  ).json();

  return (
    <BaseLayout inter={inter}>
      <HomeLayout randomUsers={randomUsers.users}>{children}</HomeLayout>
    </BaseLayout>
  );
}
