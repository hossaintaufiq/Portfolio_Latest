export const metadata = {
  title: "Contact",
  description:
    "Let’s connect to discuss web development, app creation, AI/ML projects, or research collaborations.",
};

const contactMethods = [
  {
    label: "Email",
    detail: "hosain.dev@outlook.com",
    href: "mailto:hosain.dev@outlook.com",
    description:
      "Share details about your project, goals, or idea — I’ll get back with a tailored response.",
  },
  {
    label: "Calendly",
    detail: "Book a free 30-min consultation",
    href: "https://calendly.com/hosain-dev/consultation",
    description:
      "Let’s explore your project scope, tech stack, and best implementation strategy.",
  },
  {
    label: "LinkedIn",
    detail: "Connect with me professionally",
    href: "https://www.linkedin.com/in/hosain-ahmmed",
    description:
      "Stay updated with my latest work, collaborations, and AI/ML insights.",
  },
  {
    label: "GitHub",
    detail: "View my projects and open-source work",
    href: "https://github.com/hosain-ahmmed",
    description:
      "Check out recent repositories, experiments, and full-stack applications I’ve built.",
  },
];

const responseNotes = [
  "Average response time: within 24–48 hours.",
  "Open to project-based, freelance, or research collaborations.",
  "Available across Asia and global time zones for remote work.",
];

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">Let’s Build Something Great</h1>
        <p className="max-w-3xl text-lg text-white/70">
          Whether you need a modern web app, a production-grade AI system, or help with research and technical writing,
          I’d love to collaborate. Reach out and let’s turn your ideas into reality.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            rel={method.href.startsWith("http") ? "noreferrer" : undefined}
            className="flex h-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-white/50">
              {method.label}
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              {method.detail}
            </span>
            <p className="text-sm text-white/70">{method.description}</p>
          </a>
        ))}
      </section>

      <section className="grid gap-8 rounded-3xl border border-white/10 bg-[#0F1016] p-8 md:grid-cols-[1fr,1.1fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Before reaching out</h2>
          <p className="text-sm text-white/70">
            A short brief helps make our first conversation productive. Here’s what’s most helpful to include:
          </p>
        </div>
        <ul className="space-y-4 text-sm text-white/70">
          <li>• Project goals or specific problems you want to solve.</li>
          <li>• Tech preferences or platforms you’d like to use (React, Django, Flutter, etc.).</li>
          <li>• Desired timeline, budget range, or collaboration format (freelance, long-term, research).</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Response & Availability</h2>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          {responseNotes.map((note) => (
            <li key={note} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
