import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "@/app/globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Techatrax — AI Research, Development & Education",
    template: "%s | Techatrax",
  },
  description:
    "Techatrax is an AI research, development and educational institute pioneering the next generation of AI engineers across Africa.",
  keywords: [
    "AI",
    "Machine Learning",
    "Research",
    "Education",
    "Africa",
    "Deep Learning",
  ],
  authors: [{ name: "Techatrax Institute" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Techatrax",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="bg-[#080C0F] text-white antialiased">
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
