import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { pagesSiteUrl } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreyansh Sharma — Full Stack Developer",
  description:
    "CS junior at CSULB building full-stack SaaS, ML pipelines, and Web3 tools.",
  metadataBase: new URL(pagesSiteUrl),
  openGraph: {
    title: "Shreyansh Sharma",
    description: "Full-stack developer · CSULB · Long Beach CA",
    url: pagesSiteUrl,
    images: [{ url: `${pagesSiteUrl}/og.png`, width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#040814]">
      <body
        className={`${spaceGrotesk.className} min-h-screen bg-transparent text-[#eef2ff] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
