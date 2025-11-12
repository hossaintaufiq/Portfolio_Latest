
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import SpaceBackground from "../components/SpaceBackground";
import "./globals.css";
import ThreeBlackHole from "@/components/ThreeBlackHole";
import floating_nav from "@/components/floating_nav";
import FloatingSidebarNavigation from "@/components/floating_nav";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white relative overflow-x-hidden`}
      >
        {/* Client background component (safe to import into server layout) */}
        <SpaceBackground starCount={100} />

        <Navbar />
        <ThreeBlackHole/>
        
        <main className="mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-6xl flex-col px-6 py-16">
          {children}
        </main>
        <FloatingSidebarNavigation />
        <Footer />
      </body>
    </html>
  );
}
