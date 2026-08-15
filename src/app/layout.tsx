import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yatharth Zinzuwadia | Full-Stack AI Developer",
  description:
    "Portfolio of Yatharth Zinzuwadia — Full-Stack Developer specializing in React.js, Next.js, Node.js, TypeScript, AWS, CI/CD, and AI-integrated applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
