

// "use client";

// import Link from "next/link";

// // Replace these with actual Stripe payment links or create dynamic checkout sessions
// const offerings = [
//   {
//     name: "Web Development",
//     duration: "3–6 weeks",
//     price: "$1200",
//     summary:
//       "End-to-end web development using modern frameworks like React, Next.js, and Django. I create responsive, high-performance web apps tailored to business and academic needs.",
//     deliverables: [
//       "Responsive UI/UX with React or Next.js",
//       "Backend APIs with Django, Node.js, or Express",
//       "Database integration (MongoDB, PostgreSQL, MySQL, Firebase)",
//       "Deployment & CI/CD setup",
//     ],
//   },
//   {
//     name: "App Development",
//     duration: "4–8 weeks",
//     price: "$1500",
//     summary:
//       "Native and cross-platform mobile applications built using React Native or Flutter, with backend and AI integration for real-world scalability.",
//     deliverables: [
//       "Android & iOS apps with seamless UI",
//       "Authentication & database connectivity",
//       "AI-based features (chatbots, recommendations)",
//       "App store publishing support",
//     ],
//   },
//   {
//     name: "AI & Machine Learning Solutions",
//     duration: "6–10 weeks",
//     price: "$2000",
//     summary:
//       "Designing and implementing machine learning models for automation, analytics, and prediction — from data preprocessing to model deployment.",
//     deliverables: [
//       "Custom ML/DL models (classification, prediction, NLP)",
//       "Data preprocessing & visualization",
//       "Model training, testing & evaluation",
//       "API deployment for real-time inference",
//     ],
//   },
//   {
//     name: "Research & Academic Support",
//     duration: "2–4 weeks",
//     price: "$800",
//     summary:
//       "Guidance and collaboration on research projects, academic papers, and AI model implementation for students and professionals.",
//     deliverables: [
//       "Research paper structure & writing support",
//       "ML/AI model design for research",
//       "Data analysis & visualization",
//       "Citation, formatting & publication assistance",
//     ],
//   },
//   {
//     name: "Custom Software Solutions",
//     duration: "8–12 weeks",
//     price: "$2500",
//     summary:
//       "Building tailored digital systems such as CRMs, ERPs, automation dashboards, and analytics tools that streamline operations and drive measurable impact.",
//     deliverables: [
//       "Requirement analysis & architecture design",
//       "Feature-rich dashboards and APIs",
//       "Scalable & secure backend systems",
//       "Comprehensive documentation & team handoff",
//     ],
//   },
// ];

// const collaborationValues = [
//   "Transparent communication with weekly progress updates.",
//   "Secure data handling and responsible AI implementation.",
//   "Focus on maintainable, documented, and scalable code.",
//   "Tailored development roadmap for every client or project.",
// ];

// export default function ServicesPage() {
//   return (
//     <div className="space-y-16 px-4 sm:px-8 lg:px-16 py-12 ">
//       {/* Header */}
//       <section className="space-y-6 text-center">
//         <h1 className="text-5xl font-bold text-white">
//           Services & Pricing
//         </h1>
//         <p className="max-w-3xl mx-auto text-lg text-gray-300">
//           I help individuals, startups, and research teams bring ideas to life —
//           from web and mobile applications to AI-powered systems and research
//           collaborations. Each engagement is tailored for clarity, scalability,
//           and real-world impact.
//         </p>
//       </section>

//       {/* Offerings - Grid Layout */}
//       <section className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
//         {offerings.map((offering, index) => (
//           <article
//             key={offering.name}
//             className="flex flex-col rounded-2xl p-8 transition-all duration-300 hover:scale-105 bg-gradient-to-b from-[#1A1A2E] to-[#16213E] border border-gray-700 shadow-2xl relative overflow-hidden"
//           >
            
//             {/* Header with Price */}
//             <div className="text-center mb-8">
//               <h2 className="text-2xl font-bold text-white mb-2">
//                 {offering.name}
//               </h2>
//               <hr />
//               <div className="flex items-baseline justify-center gap-2 mb-4 mt-1">
//                 <span className="text-4xl font-bold text-white">
//                   {offering.price}
//                 </span>
//                 <span className="text-gray-400 text-sm">
//                   {offering.duration}
//                 </span>
//               </div>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 {offering.summary}
//               </p>
//             </div>

//             {/* Features/Deliverables */}
//             <div className="flex-1 space-y-4 mb-8">
//               <div className="text-center">
//                 <p className="text-white font-semibold mb-4 text-lg">Deliverables</p>
//               </div>
//               <ul className="space-y-3">
//                 {offering.deliverables.map((item) => (
//                   <li key={item} className="flex items-start gap-3">
//                     <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
//                     <span className="text-gray-300 text-sm">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Book Now Button */}
//             <div className="text-center pt-4 border-t border-gray-700">
//               <a
//                 href="#"
//                 className="inline-block w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
//               >
//                 Book Now
//               </a>
//             </div>
//           </article>
//         ))}
//       </section>

//       {/* Collaboration Values */}
//       <section className="max-w-7xl mx-auto grid gap-8 rounded-2xl border border-gray-700 bg-gradient-to-br from-[#1A1A2E] to-[#16213E] p-12 md:grid-cols-2 shadow-2xl">
//         <div className="space-y-6">
//           <h2 className="text-3xl font-bold text-white">
//             Collaboration Values
//           </h2>
//           <p className="text-gray-300 text-lg leading-relaxed">
//             Every project is built on communication, transparency, and a shared
//             goal of delivering lasting value. You'll always know what's being
//             built, why, and how.
//           </p>
//         </div>
//         <ul className="space-y-6">
//           {collaborationValues.map((value) => (
//             <li key={value} className="flex items-start gap-4">
//               <span className="mt-1.5 h-3 w-3 rounded-full bg-blue-400 flex-shrink-0" />
//               <span className="text-gray-300 text-lg">{value}</span>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Contact CTA */}
//       <section className="max-w-4xl mx-auto rounded-2xl border border-gray-700 bg-gradient-to-br from-[#1A1A2E] to-[#16213E] p-12 text-center shadow-2xl">
//         <h2 className="text-3xl font-bold text-white mb-4">
//           Ready to start a project or collaborate?
//         </h2>
//         <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
//           Let's discuss your goals and create a custom roadmap that fits your
//           vision — whether it's web, mobile, AI, or research-based innovation.
//         </p>
//         <Link
//           href="/contact"
//           className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
//         >
//           Contact Me
//         </Link>
//       </section>

//       {/* Footer Note */}
//       <div className="text-center text-gray-500 text-sm max-w-4xl mx-auto pt-8 border-t border-gray-800">
//         <p>
//           Prices are listed in USD. The final total will be displayed at checkout.
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { Zap, Monitor, Smartphone, BookOpen, Settings } from "lucide-react";

// Mapping icons to offerings
const offeringIcons = {
  "Web Development": <Monitor className="w-6 h-6 text-cyan-400" />,
  "App Development": <Smartphone className="w-6 h-6 text-cyan-400" />,
  "AI & Machine Learning Solutions": <Zap className="w-6 h-6 text-cyan-400" />,
  "Research & Academic Support": <BookOpen className="w-6 h-6 text-cyan-400" />,
  "Custom Software Solutions": <Settings className="w-6 h-6 text-cyan-400" />,
};

// Replace these with actual Stripe payment links or create dynamic checkout sessions
const offerings = [
  {
    name: "Web Development",
    duration: "3–6 weeks",
    price: "$1200",
    summary:
      "End-to-end web development using modern frameworks like React, Next.js, and Django. I create responsive, high-performance web apps tailored to business and academic needs.",
    deliverables: [
      "Responsive UI/UX with React or Next.js",
      "Backend APIs with Django, Node.js, or Express",
      "Database integration (MongoDB, PostgreSQL, MySQL, Firebase)",
      "Deployment & CI/CD setup",
    ],
  },
  {
    name: "App Development",
    duration: "4–8 weeks",
    price: "$1500",
    summary:
      "Native and cross-platform mobile applications built using React Native or Flutter, with backend and AI integration for real-world scalability.",
    deliverables: [
      "Android & iOS apps with seamless UI",
      "Authentication & database connectivity",
      "AI-based features (chatbots, recommendations)",
      "App store publishing support",
    ],
  },
  {
    name: "AI & Machine Learning Solutions",
    duration: "6–10 weeks",
    price: "$2000",
    summary:
      "Designing and implementing machine learning models for automation, analytics, and prediction — from data preprocessing to model deployment.",
    deliverables: [
      "Custom ML/DL models (classification, prediction, NLP)",
      "Data preprocessing & visualization",
      "Model training, testing & evaluation",
      "API deployment for real-time inference",
    ],
  },
  {
    name: "Research & Academic Support",
    duration: "2–4 weeks",
    price: "$800",
    summary:
      "Guidance and collaboration on research projects, academic papers, and AI model implementation for students and professionals.",
    deliverables: [
      "Research paper structure & writing support",
      "ML/AI model design for research",
      "Data analysis & visualization",
      "Citation, formatting & publication assistance",
    ],
  },
  {
    name: "Custom Software Solutions",
    duration: "8–12 weeks",
    price: "$2500",
    summary:
      "Building tailored digital systems such as CRMs, ERPs, automation dashboards, and analytics tools that streamline operations and drive measurable impact.",
    deliverables: [
      "Requirement analysis & architecture design",
      "Feature-rich dashboards and APIs",
      "Scalable & secure backend systems",
      "Comprehensive documentation & team handoff",
    ],
  },
];

const collaborationValues = [
  "Transparent communication with weekly progress updates.",
  "Secure data handling and responsible AI implementation.",
  "Focus on maintainable, documented, and scalable code.",
  "Tailored development roadmap for every client or project.",
];

export default function ServicesPage() {
  return (
    <div className="space-y-20 px-4 sm:px-8 lg:px-16 py-16">
      {/* Header */}
      <section className="space-y-6 text-center">
        <h1 className="text-5xl font-extrabold text-white tracking-tight">
          Services & Pricing ✨
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-300">
          I help individuals, startups, and research teams bring ideas to life —
          from web and mobile applications to AI-powered systems and research
          collaborations.
        </p>
      </section>

      {/* Offerings - Grid Layout */}
      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {offerings.map((offering) => (
          <article
            key={offering.name}
            // Retained transparency, updated borders and hover effects
            className="flex flex-col rounded-xl p-8 transition-all duration-300 border border-white/10 bg-transparent hover:border-cyan-500 shadow-xl relative overflow-hidden"
          >
            {/* 1. Price and Icon Header - Clear and Immediate */}
            <div className="mb-6 pb-4 border-b border-white/10">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                    {offeringIcons[offering.name]}
                    <h2 className="text-2xl font-bold text-white">
                    {offering.name}
                    </h2>
                </div>
                <span className="text-sm text-gray-400 font-medium">
                    {offering.duration}
                </span>
              </div>
              
              <div className="flex items-baseline justify-start gap-2">
                <span className="text-5xl font-extrabold text-cyan-400">
                  {offering.price}
                </span>
                <span className="text-base text-gray-400">
                  (Estimated)
                </span>
              </div>
            </div>

            {/* 2. Summary - Primary Text Block */}
            <div className="mb-8">
              <p className="text-gray-300 text-base leading-relaxed">
                {offering.summary}
              </p>
            </div>
            
            {/* 3. Features/Deliverables - Aligned List */}
            <div className="flex-1 space-y-3 mb-8">
              <p className="text-white font-semibold mb-4 text-lg border-b border-white/10 pb-2">Key Deliverables</p>
              <ul className="space-y-3">
                {offering.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    {/* Checkmark icon for modern clarity */}
                    <svg
                      className="mt-1.5 w-4 h-4 text-cyan-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Action Button - Stays at the bottom */}
            <div className="text-center mt-auto pt-6 border-t border-white/10">
              <a
                href="#"
                className="inline-block w-full rounded-full bg-cyan-600/20 px-8 py-3 font-semibold text-cyan-400 shadow-md transition-all duration-300 hover:bg-cyan-600 hover:text-white"
              >
                Start Project
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Collaboration Values (Unchanged, already well-aligned) */}
      <section 
        className="max-w-7xl mx-auto grid gap-10 rounded-xl border border-white/10 bg-transparent p-12 lg:grid-cols-2 shadow-xl"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white flex items-center space-x-2">
            <span>Collaboration Values</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Every project is built on **communication, transparency**, and a shared
            goal of delivering lasting value. You'll always know what's being
            built, why, and how.
          </p>
        </div>
        <ul className="space-y-6">
          {collaborationValues.map((value) => (
            <li key={value} className="flex items-start gap-4">
              <svg
                className="mt-1.5 w-5 h-5 text-blue-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-300 text-lg">{value}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact CTA (Unchanged, already well-aligned) */}
      <section 
        className="max-w-4xl mx-auto rounded-xl border border-white/10 bg-transparent p-12 text-center shadow-xl"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to start a project or collaborate?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss your goals and create a custom roadmap that fits your
          vision — whether it's web, mobile, AI, or research-based innovation.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-full bg-cyan-500 px-10 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-500/50"
        >
          Contact Me
        </Link>
      </section>

      {/* Footer Note */}
      <div className="text-center text-gray-500 text-sm max-w-4xl mx-auto pt-8 border-t border-gray-800">
        <p>
          Prices are listed in USD. The final total will be confirmed upon project scope agreement.
        </p>
      </div>
    </div>
  );
}