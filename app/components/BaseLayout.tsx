import { NextFont } from "next/dist/compiled/@next/font";
const BaseLayout = ({
  children,
  inter,
}: {
  children: React.ReactNode;
  inter: NextFont;
}) => {
  return (
    <html lang="en" className="h-screen ">
      <body className={inter.className + "h-screen"}>{children}</body>
    </html>
  );
};

export default BaseLayout;
