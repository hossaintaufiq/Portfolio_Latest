"use client";

import Link from "next/link";

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
    <div className="space-y-16 px-4 sm:px-8 lg:px-16 py-8">
      {/* Header */}
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400">
          Services & Pricing
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-white/70">
          I help individuals, startups, and research teams bring ideas to life —
          from web and mobile applications to AI-powered systems and research
          collaborations. Each engagement is tailored for clarity, scalability,
          and real-world impact.
        </p>
      </section>

      {/* Offerings */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {offerings.map((offering) => (
          <article
            key={offering.name}
            className="flex flex-col justify-between rounded-3xl p-6 shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-tr from-[#1F1B24] via-[#2C1F3C] to-[#3E2B5B] border border-white/10"
          >
            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight text-white">
                {offering.name}
              </h2>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {offering.duration}
              </p>
              <p className="text-sm text-white/70">{offering.summary}</p>
              <p className="text-lg font-bold text-emerald-400 ">
                {offering.price}
              </p>

              <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/70">
                <p className="mb-2 font-semibold text-white">Deliverables</p>
                <ul className="space-y-2">
                  {offering.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-pink-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Payment / Book Now */}
            <div className="mt-4 text-center">
              <a
                href="#" // Replace with Stripe checkout link
                className="inline-block w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-white shadow-md hover:scale-105 hover:shadow-lg transition transform"
              >
                Book Now
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* Collaboration Values */}
      <section className="grid gap-8 rounded-3xl border border-white/10 bg-[#0F1016] p-8 md:grid-cols-[1fr,1.1fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Collaboration Values
          </h2>
          <p className="text-sm text-white/70">
            Every project is built on communication, transparency, and a shared
            goal of delivering lasting value. You’ll always know what’s being
            built, why, and how.
          </p>
        </div>
        <ul className="space-y-4 text-sm text-white/70">
          {collaborationValues.map((value) => (
            <li key={value} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Ready to start a project or collaborate?
        </h2>
        <p className="mt-3 text-sm text-white/70">
          Let’s discuss your goals and create a custom roadmap that fits your
          vision — whether it's web, mobile, AI, or research-based innovation.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-white shadow-md hover:scale-105 hover:shadow-lg transition transform"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
}
