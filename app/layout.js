// import { Geist, Geist_Mono } from "next/font/google";
// import Navbar from "../components/Navbar";

// import "./globals.css";
// import Footer from "../components/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: {
//     default: "AI Portfolio",
//     template: "%s | AI Portfolio",
//   },
//   description:
//     "Showcase of AI-driven projects, research, and services crafted by an AI engineer.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white relative overflow-x-hidden`}
//       >
//         {/* 🌌 Black Hole Background */}
//         <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
//           <div className="absolute inset-0 bg-gradient-to-br from-[#020202] via-[#050810] to-[#000000]" />

//           {/* Central Black Hole Glow */}
//           <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(30,30,60,0.3)_0%,_rgba(0,0,0,1)_70%)] blur-[60px] animate-spin-slow" />

//           {/* Event Horizon Rings */}
//           <div className="absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 blur-[2px] animate-rotate-ring" />
//           <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 blur-[1px] animate-rotate-ring-rev" />

//           {/* Floating Stars */}
//           <div className="absolute inset-0 overflow-hidden">
//             {[...Array(80)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute bg-white/30 rounded-full"
//                 style={{
//                   width: Math.random() * 2 + "px",
//                   height: Math.random() * 2 + "px",
//                   top: Math.random() * 100 + "%",
//                   left: Math.random() * 100 + "%",
//                   animation: `twinkle ${3 + Math.random() * 5}s ease-in-out infinite`,
//                   animationDelay: `${Math.random() * 5}s`,
//                 }}
//               ></div>
//             ))}
//           </div>
//         </div>

//         {/* Page Content */}
//         <Navbar />
//         <main className="mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-6xl flex-col px-6 py-16">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import SpaceBackground from "../components/SpaceBackground";
import "./globals.css";
import ThreeBlackHole from "@/components/ThreeBlackHole";

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
        <Footer />
      </body>
    </html>
  );
}
