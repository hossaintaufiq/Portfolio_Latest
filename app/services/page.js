"use client";

import Link from "next/link";
import { Zap, Monitor, Smartphone, BookOpen, Settings, ArrowRight, CheckCircle2 } from "lucide-react";

const offerings = [
  {
    name: "Web Development",
    icon: Monitor,
    duration: "3–6 weeks",
    price: "$1200",
    gradient: "from-cyan-500/20 via-blue-500/20 to-teal-500/20",
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
    icon: Smartphone,
    duration: "4–8 weeks",
    price: "$1500",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
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
    icon: Zap,
    duration: "6–10 weeks",
    price: "$2000",
    gradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
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
    icon: BookOpen,
    duration: "2–4 weeks",
    price: "$800",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
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
    icon: Settings,
    duration: "8–12 weeks",
    price: "$2500",
    gradient: "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
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
    <div className="space-y-16 sm:space-y-24 lg:space-y-32 pb-12 sm:pb-16">
      {/* Header Section - Enhanced */}
      <section className="space-y-6 sm:space-y-8">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Services & Pricing
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed px-4">
            I help individuals, startups, and research teams bring ideas to life — from web and mobile applications to AI-powered systems and research collaborations.
          </p>
        </div>
      </section>

      {/* Offerings Grid - Enhanced */}
      <section className="space-y-8 sm:space-y-12">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            return (
              <article
                key={offering.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 sm:p-6 md:p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-1 flex-col">
                  {/* Icon and Header */}
                  <div className="mb-4 sm:mb-6 flex items-start justify-between">
                    <div className="rounded-xl sm:rounded-2xl bg-white/5 p-2.5 sm:p-3 backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-cyan-400 sm:h-6 sm:w-6" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40 sm:text-xs">
                      {offering.duration}
                    </span>
                  </div>

                  {/* Title and Price */}
                  <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                    <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {offering.name}
                    </h2>
                    <div className="flex items-baseline gap-1.5 sm:gap-2">
                      <span className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">
                        {offering.price}
                      </span>
                      <span className="text-xs text-white/50 sm:text-sm">
                        (Estimated)
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mb-4 sm:mb-6">
                    <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                      {offering.summary}
                    </p>
                  </div>
                  
                  {/* Deliverables */}
                  <div className="flex-1 space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <p className="text-white font-semibold text-base border-b border-white/10 pb-1.5 sm:text-lg sm:pb-2">
                      Key Deliverables
                    </p>
                    <ul className="space-y-2 sm:space-y-3">
                      {offering.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-cyan-400 flex-shrink-0 sm:h-4 sm:w-4" />
                          <span className="text-xs text-white/70 leading-relaxed sm:text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="mt-auto pt-4 border-t border-white/10 sm:pt-6">
                    <Link
                      href="/contact"
                      className="group/btn inline-flex items-center justify-center gap-2 w-full rounded-full bg-cyan-500/10 border border-cyan-500/30 px-4 py-2.5 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/25 sm:px-6 sm:py-3 sm:text-base"
                    >
                      Start Project
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Collaboration Values - Enhanced */}
      <section className="max-w-7xl mx-auto">
        <article className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F1016] to-[#050508] p-6 sm:p-8 md:p-12 backdrop-blur-sm shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
          
          <div className="relative z-10 grid gap-6 sm:gap-8 lg:grid-cols-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="rounded-lg sm:rounded-xl bg-white/5 p-1.5 sm:p-2 backdrop-blur-sm">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Collaboration Values
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                Every project is built on <span className="font-semibold text-white">communication</span>, <span className="font-semibold text-white">transparency</span>, and a shared goal of delivering lasting value. You&apos;ll always know what&apos;s being built, why, and how.
              </p>
            </div>
            
            <ul className="space-y-4 sm:space-y-6">
              {collaborationValues.map((value, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="rounded-lg bg-cyan-500/10 p-1 sm:p-1.5 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                  </div>
                  <span className="text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      {/* Contact CTA - Enhanced */}
      <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 text-center backdrop-blur-sm sm:p-12 md:p-16 max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
        
        <div className="relative z-10 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Ready to build your next intelligent system?
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg lg:text-xl px-4">
              Let&apos;s discuss your goals and create a custom roadmap that fits your vision — whether it&apos;s web, mobile, AI, or research-based innovation.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 sm:px-8 sm:py-4 sm:text-base"
            >
              Start the Conversation
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="rounded-xl border border-white/10 bg-[#0F1016]/50 p-4 sm:p-6 backdrop-blur-sm">
          <p className="text-xs text-white/60 sm:text-sm">
            Prices are listed in USD. The final total will be confirmed upon project scope agreement.
          </p>
        </div>
      </div>
    </div>
  );
}