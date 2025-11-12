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



"use client"; // REQUIRED FOR REACT HOOKS AND 3D LIBRARIES

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

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

// --- 3D Animated Globe Component ---
function AnimatedGlobe() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere args={[1.2, 64, 64]} ref={meshRef}>
      <MeshDistortMaterial
        color="#7C3AED"
        distort={0.5}
        speed={2}
        roughness={0.4}
        metalness={0.3}
      />
    </Sphere>
  );
}

// --- Main Contact Client Component ---
export default function ContactClientPage() {
  return (
    <div className="relative min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
      {/* Title */}
      <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter mb-16 text-center z-10 relative">
        Let’s Work Together
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

        {/* Right Section: 3D Globe */}
        <div className="md:w-1/2 min-h-[400px] md:min-h-auto relative flex items-center justify-center p-4">
          <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 2, 5]} intensity={1.2} />
            <AnimatedGlobe />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
          </Canvas>
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
        </div>
      </div>

      {/* Optional subtle background overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>
    </div>
  );
}
