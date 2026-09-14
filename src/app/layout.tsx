import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INQWIKLLY | News. Without the noise.",
  description: "Your daily news, in 30 seconds. No unnecessary details. No endless videos. Just news that gets to the point.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden bg-brand-offwhite text-brand-black">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
