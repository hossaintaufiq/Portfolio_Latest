// "use client"; // REQUIRED FOR REACT HOOKS AND 3D LIBRARIES

// import { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import * as THREE from "three";

// // --- Inline SVG Paper Plane Icon ---
// const PaperPlaneIcon = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 512 512"
//     className={className}
//     fill="currentColor"
//   >
//     <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 32.7 2.4 41.5l213.9 103.5c1.4.7 2.8 1.4 4.3 1.9c.7.2 1.5.5 2.2.7c26.9 8.9 57.6-5.8 67.2-31.4l123.6-328.3c1.9-4.3.9-9.6-2.8-12.7s-8.1-4.3-12.5-2.5L476 3.2zM277.5 428.6l103.5-213.9c8.9-18.1-5.8-57.6-31.4-67.2l-328.3-123.6c-4.3-1.9-9.6-.9-12.7 2.8s-4.3 8.1-2.5 12.5l264.4 264.4z" />
//   </svg>
// );

// // --- 3D Animated Globe Component ---
// function AnimatedGlobe() {
//   const meshRef = useRef();

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += 0.001;
//       meshRef.current.rotation.y += 0.002;
//     }
//   });

//   return (
//     <Sphere args={[1.2, 64, 64]} ref={meshRef}>
//       <MeshDistortMaterial
//         color="#7C3AED"
//         distort={0.5}
//         speed={2}
//         roughness={0.4}
//         metalness={0.3}
//       />
//     </Sphere>
//   );
// }

// // --- Main Contact Client Component ---
// export default function ContactClientPage() {
//   return (
//     <div className="relative min-h-screen bg-[#0E0E1A] text-white flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
//       {/* Title */}
//       <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-16 text-center z-10 relative">
//         Let’s Work Together
//       </h1>

//       {/* Content: Form + Globe */}
//       <div className="relative w-full max-w-7xl flex flex-col md:flex-row rounded-3xl overflow-hidden border border-white/10 bg-black/20 shadow-2xl backdrop-blur-sm z-10">
//         {/* Left Section: Contact Form */}
//         <div className="md:w-1/2 p-8 sm:p-12 space-y-8 flex flex-col justify-center">
//           <div className="space-y-2">
//             <span className="text-sm uppercase tracking-widest text-white/50">
//               Get In Touch
//             </span>
//             <h2 className="text-5xl font-extrabold tracking-tight">Contact.</h2>
//           </div>

//           <form className="space-y-6">
//             <div>
//               <label
//                 htmlFor="fullName"
//                 className="block text-sm font-medium text-white/70 mb-2"
//               >
//                 Full name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 placeholder="Your Name"
//                 className="w-full px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-white/40 transition duration-200"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-white/70 mb-2"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="you@example.com"
//                 className="w-full px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-white/40 transition duration-200"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-white/70 mb-2"
//               >
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="6"
//                 placeholder="Tell me about your project, goals, or idea..."
//                 className="w-full px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-white/40 resize-y transition duration-200"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-semibold bg-cyan-600 hover:bg-cyan-700 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black/20"
//             >
//               Send Message <PaperPlaneIcon className="h-5 w-5 ml-2" />
//             </button>
//           </form>
//         </div>

//         {/* Right Section: 3D Globe */}
//         <div className="md:w-1/2 min-h-[400px] md:min-h-auto relative flex items-center justify-center p-4">
//           <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
//             <ambientLight intensity={0.6} />
//             <directionalLight position={[2, 2, 5]} intensity={1.2} />
//             <AnimatedGlobe />
//             <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
//           </Canvas>
//           <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-tr from-transparent via-black/10 to-transparent"></div>
//         </div>
//       </div>

//       {/* Background Overlay */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50"></div>
//     </div>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaPhone, FaClock } from "react-icons/fa";
import { Mail, Send, Code, Sparkles } from "lucide-react";

// --- Inline SVG Paper Plane Icon ---
const PaperPlaneIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
    fill="currentColor"
  >
    <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 32.7 2.4 41.5l213.9 103.5c1.4.7 2.8 1.4 4.3 1.9c.7.2 1.5.5 2.2.7c26.9 8.9 57.6-5.8 67.2-31.4l123.6-328.3c1.9-4.3.9-9.6-2.8-12.7s-8.1-4.3-12.5-2.5L476 3.2zM277.5 428.6l103.5-213.9c8.9-18.1-5.8-57.6-31.4-67.2l-328.3-123.6c-4.3-1.9-9.6-.9-12.7 2.8s-4.3 8.1-2.5 12.5l264.4 264.4z" />
  </svg>
);

// Animated floating particles
function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// --- Main Contact Client Component ---
export default function ContactClientPage() {
  // Replace with your actual phone number
  const phoneNumber = "+1234567890"; // Update this with your phone number
  
  const socialLinks = [
    {
      href: "https://www.facebook.com/yourprofile", // Update with your Facebook URL
      icon: FaFacebook,
      label: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      href: "https://www.linkedin.com/in/hossain-taufiq/",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      href: "https://github.com/hosain-taufiq",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:text-gray-300",
    },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
      {/* Title */}
      <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-16 text-center z-10 relative">
        Let&apos;s Work Together
      </h1>

      {/* Content: Form + Globe */}
      <div className="relative w-full max-w-7xl flex flex-col md:flex-row rounded-3xl overflow-hidden border border-white/20 backdrop-blur-2xl shadow-2xl z-10">
        {/* Left Section: Contact Form */}
        <div className="md:w-1/2 p-8 sm:p-12 space-y-8 flex flex-col justify-center">
          <div className="space-y-2">
            <span className="text-sm uppercase tracking-widest text-white/50">
              Get In Touch
            </span>
            <h2 className="text-5xl font-extrabold tracking-tight">Contact.</h2>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-white/70 mb-2"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-lg border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-200 bg-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/70 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-5 py-3 rounded-lg border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-200 bg-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/70 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project, goals, or idea..."
                className="w-full px-5 py-3 rounded-lg border border-white/20 text-white placeholder-white/40 resize-y focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-200 bg-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-semibold bg-cyan-600/50 hover:bg-cyan-700/50 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black/20"
            >
              Send Message <PaperPlaneIcon className="h-5 w-5 ml-2" />
            </button>
          </form>

        </div>

        {/* Right Section: Contact Info Panel */}
        <div className="md:w-1/2 min-h-[400px] md:min-h-auto relative flex items-center justify-center p-8 sm:p-12">
          <FloatingParticles />
          
          {/* Animated gradient background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse-slow" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-purple-500/5 via-transparent to-cyan-500/5" />
          
          <div className="relative z-10 w-full max-w-md space-y-8">
            {/* Header */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                  Quick Connect
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white">
                Let&apos;s Build Something Amazing
              </h3>
              <p className="text-white/70 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:hossain.taufiq@northsouth.edu"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-3 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Email</p>
                  <p className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    hossain.taufiq@northsouth.edu
                  </p>
                </div>
                <Send className="h-5 w-5 text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-3 group-hover:scale-110 transition-transform">
                  <FaPhone className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Phone</p>
                  <p className="text-base font-semibold text-white group-hover:text-green-300 transition-colors">
                    {phoneNumber}
                  </p>
                </div>
                <Send className="h-5 w-5 text-white/40 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Response Time */}
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3">
                  <FaClock className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Response Time</p>
                  <p className="text-base font-semibold text-white">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-4">
                Follow Me
              </p>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`group flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20 ${social.color}`}
                    >
                      <Icon className="h-6 w-6 text-white/80 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-medium text-white/60 group-hover:text-white transition-colors">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Code snippet decoration */}
            <div className="pt-4 border-t border-white/10">
              <div className="rounded-lg bg-black/40 p-4 border border-white/5 font-mono text-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-3 w-3 text-cyan-400" />
                  <span className="text-cyan-400">contact.js</span>
                </div>
                <div className="space-y-1 text-white/60">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-400">connect</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-yellow-400">async</span>{" "}
                    <span className="text-white">()</span>{" "}
                    <span className="text-white">=&gt;</span> {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">return</span>{" "}
                    <span className="text-white">collaboration</span>
                    <span className="text-white">;</span>
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional subtle background overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>
    </div>
  );
}
