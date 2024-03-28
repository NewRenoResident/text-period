import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import BaseLayout from "../components/BaseLayout";
import HomeLayout from "../components/pages/HomeLayout";
import { auth } from "@/lib/auth";
import { useUserStore } from "@/store";
import InitializeUserStore from "../components/InitializeUserStore";
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
  return (
    <BaseLayout inter={inter}>
      <HomeLayout>{children}</HomeLayout>
    </BaseLayout>
  );
}
