import { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import BaseLayout from "./components/BaseLayout";
import Providers from "./Prorviders";
export const metadata: Metadata = {
  title: "Text Period",
  description: "Login Page",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout inter={inter}>{children}</BaseLayout>;
}
