import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreyansh Sharma — Full Stack Developer",
  description:
    "CS junior at CSULB building full-stack SaaS, ML pipelines, and Web3 tools.",
  metadataBase: new URL("https://shreyanshsharma.vercel.app"),
  openGraph: {
    title: "Shreyansh Sharma",
    description: "Full-stack developer · CSULB · Long Beach CA",
    url: "https://shreyanshsharma.vercel.app",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#f6f5f1]">
      <body className={`${inter.className} min-h-screen bg-[#f6f5f1] text-[#1a1a18] antialiased`}>
        {children}
      </body>
    </html>
  );
}
