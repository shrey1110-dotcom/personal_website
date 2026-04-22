import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { pagesSiteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreyansh Sharma — Software Engineer",
  description:
    "Software engineer building full-stack products, integrations, and applied machine learning systems.",
  metadataBase: new URL(pagesSiteUrl),
  openGraph: {
    title: "Shreyansh Sharma",
    description: "Software engineer · CSULB · Long Beach, CA",
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
    <html lang="en" className="bg-[#080c14]">
      <body
        className={`${inter.className} min-h-screen bg-transparent text-[#edf2ff] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
