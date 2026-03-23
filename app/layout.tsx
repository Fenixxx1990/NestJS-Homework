import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { type JSX } from "react";

const openSans = Open_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Мой блог самый луший блог",
  description: "Буду писать тут всякую дичь",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ru" className={openSans.variable}>
      <body>{children}</body>
    </html>
  );
}
