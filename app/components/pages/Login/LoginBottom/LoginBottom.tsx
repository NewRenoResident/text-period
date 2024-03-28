import Link from "next/link";

const items = [
  { title: "Download the Tweet Point app", href: "/" },
  { title: "Help Center", href: "/" },
  { title: "Terms of Service", href: "/" },
  { title: "Privacy Policy", href: "/" },
  { title: "Cookie Policy", href: "/" },
  { title: "Accessibility", href: "/" },
  { title: "Ads info", href: "/" },
  { title: "Blog", href: "/" },
  { title: "Status", href: "/" },
  { title: "Careers", href: "/" },
  { title: "Brand Resources", href: "/" },
  { title: "Advertising", href: "/" },
  { title: "Marketing", href: "/" },
  { title: "Tweet Point for Business", href: "/" },
  { title: "Developers", href: "/" },
  { title: "Directory", href: "/" },
  { title: "Settings", href: "/" },
];

const LoginBottom = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2 justify-center items-center px-4 pb-2">
      {items.map((item) => (
        <Link
          className="text-white text-opacity-20 text-sm"
          key={item.title}
          href={item.href}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default LoginBottom;
