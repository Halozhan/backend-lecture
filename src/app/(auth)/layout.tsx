import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auth Page",
  description: "This is Auth page",
};

const navLinks = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {navLinks.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
