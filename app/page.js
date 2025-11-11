import Link from "next/link";

const projects = [
  {
    title: "BTC/USDT Trading Simulator",
    description:
      "A real-time crypto trading simulation with live Binance API data, virtual balances, and transaction analytics for realistic trading experience.",
    tags: ["React", "WebSocket", "Django", "MongoDB"],
  },
  {
    title: "AI Research Agent",
    description:
      "An autonomous workflow system that reads datasets, interprets context, and generates reports using RAG and LangGraph pipelines.",
    tags: ["Agents", "LangChain", "LLM", "Python"],
  },
];

const services = [
  {
    title: "AI-Powered Product Development",
    description:
      "Design and build intelligent web or mobile products that integrate deep learning, NLP, or generative AI capabilities seamlessly.",
  },
  {
    title: "Full-Stack Engineering",
    description:
      "From frontend polish with React or Vite to scalable backends with Django or Node.js — complete product pipelines, done right.",
  },
  {
    title: "Data & Automation Solutions",
    description:
      "Build custom automation tools, scraping systems, and data pipelines that transform manual workflows into scalable systems.",
  },
];

const researchHighlights = [
  {
    title: "Agentic System Efficiency",
    summary:
      "Explored multi-agent architectures that learn from task outcomes to reduce redundant LLM calls and improve reasoning consistency.",
  },
  {
    title: "RAG Performance Optimization",
    summary:
      "Tested adaptive chunking and vector search tuning to minimize hallucinations in retrieval-augmented generation setups.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_0_80px_rgba(32,64,128,0.35)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/70 to-[#1B2237]/80" />
        <div className="relative z-10 flex flex-col gap-12 p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.1fr,0.9fr] lg:items-start lg:gap-10">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60 sm:text-sm">
                AI ENGINEER • RESEARCHER • FULL-STACK DEVELOPER
              </p>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Building intelligent systems that learn, adapt, and empower human creativity.
              </h1>
              <p className="max-w-xl text-base text-white/75 sm:text-lg">
                I’m <span className="font-semibold text-white">Hosain Ahmmed</span> — I design AI-driven applications and agentic systems that blend research, code, and real-world impact. From prototypes to production-ready systems, I help teams ship smarter, faster, and more reliably.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/80"
                >
                  Explore Projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Let’s Collaborate
                </Link>
              </div>
            </div>

            <div className="grid gap-6 rounded-3xl border border-white/10 bg-black/50 p-6 backdrop-blur sm:grid-cols-2 sm:items-start">
              <div className="space-y-1">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/45 sm:text-xs">
                  AI & Software Projects
                </p>
                <p className="text-3xl font-semibold sm:text-4xl">40+</p>
              </div>
              <div className="space-y-1">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/45 sm:text-xs">Tech Stack</p>
                <p className="text-3xl font-semibold sm:text-4xl">MERN, Django, AI</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/45 sm:text-xs">
                  Current Focus
                </p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>• Building multi-agent AI research assistants.</li>
                  <li>• Developing scalable AI backends with Django & MongoDB.</li>
                  <li>• Applying real-time AI in trading and decision systems.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
          <Link href="/projects" className="text-sm font-semibold text-white/70 hover:text-white">
            View all projects →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                <p className="text-sm text-white/70">{project.description}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">How We Can Work Together</h2>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-[#0F1016] p-6 shadow-lg transition hover:-translate-y-1 hover:border-white/25"
            >
              <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
              <p className="text-sm text-white/70">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Research Section */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Research Highlights</h2>
          <Link href="/research" className="text-sm font-semibold text-white/70 hover:text-white">
            Explore Research →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {researchHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-linear-to-br from-purple-500/10 via-transparent to-blue-500/10 p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Ready to build your next intelligent system?</h2>
        <p className="mt-4 text-base text-white/70">
          Let’s collaborate on AI products that not only perform — but think, adapt, and evolve with users in mind.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/80"
          >
            Start the Conversation
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Review Service Menu
          </Link>
        </div>
      </section>
    </div>
  );
}
