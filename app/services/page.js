export const metadata = {
  title: "Services | Hossain Taufiq Ahmmed",
  description:
    "Professional services by Hossain Taufiq Ahmmed — delivering AI, web, and app solutions with research-grade precision and production reliability.",
};

const offerings = [
  {
    name: "Web Development",
    duration: "3–6 weeks",
    summary:
      "End-to-end web development using modern frameworks like React, Next.js, and Django. I create responsive, high-performance web apps tailored to business and academic needs.",
    deliverables: [
      "Responsive UI/UX with React or Next.js",
      "Backend APIs with Django, Node.js, or Express",
      "Database integration (MongoDB, PostgreSQL, Firebase)",
      "Deployment & CI/CD setup",
    ],
  },
  {
    name: "App Development",
    duration: "4–8 weeks",
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
    <div className="space-y-16">
      {/* Header */}
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
        <p className="max-w-3xl text-lg text-white/70">
          I help individuals, startups, and research teams bring ideas to life —
          from web and mobile applications to AI-powered systems and research
          collaborations. Each engagement is designed for clarity, scalability,
          and real-world impact.
        </p>
      </section>

      {/* Offerings */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {offerings.map((offering) => (
          <article
            key={offering.name}
            className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight">{offering.name}</h2>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {offering.duration}
              </p>
            </div>
            <p className="text-sm text-white/70">{offering.summary}</p>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/70">
              <p className="mb-2 font-semibold text-white">Deliverables</p>
              <ul className="space-y-2">
                {offering.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* Collaboration Values */}
      <section className="grid gap-8 rounded-3xl border border-white/10 bg-[#0F1016] p-8 md:grid-cols-[1fr,1.1fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Collaboration Values</h2>
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
        <h2 className="text-2xl font-semibold tracking-tight">
          Ready to start a project or collaborate?
        </h2>
        <p className="mt-3 text-sm text-white/70">
          Let’s discuss your goals and create a custom roadmap that fits your
          vision — whether it's web, mobile, AI, or research-based innovation.
        </p>
      </section>
    </div>
  );
}
