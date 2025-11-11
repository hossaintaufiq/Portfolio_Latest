import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";

import "./globals.css";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "AI Portfolio",
    template: "%s | AI Portfolio",
  },
  description:
    "Showcase of AI-driven projects, research, and services crafted by an AI engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B0C10] text-white`}
      >
        <Navbar />
        <main className="mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-6xl flex-col px-6 py-16">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
