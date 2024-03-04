import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Text Period",
  description: "Generated by create next app",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen ">
      <body className={inter.className + "h-screen"}>
        <div className="flex h-screen ">
          <div className="h-full ">
            <nav className="">
              <Nav />
            </nav>
          </div>
          <div className="flex-grow">{children}</div>
          <div className="w-32 hidden lg:block"></div>
        </div>
      </body>
    </html>
  );
}
