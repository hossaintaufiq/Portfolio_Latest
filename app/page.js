"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { 
  Code2, 
  Brain, 
  Zap, 
  Database, 
  Rocket, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Cpu,
  Network
} from "lucide-react";

const projects = [
  {
    title: "BTC/USDT Trading Simulator",
    description:
      "A real-time crypto trading simulation with live Binance API data, virtual balances, and transaction analytics for realistic trading experience.",
    tags: ["React", "WebSocket", "Django", "MongoDB"],
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    icon: TrendingUp,
  },
  {
    title: "AI Research Agent",
    description:
      "An autonomous workflow system that reads datasets, interprets context, and generates reports using RAG and LangGraph pipelines.",
    tags: ["Agents", "LangChain", "LLM", "Python"],
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    icon: Brain,
  },
];

const services = [
  {
    title: "AI-Powered Product Development",
    description:
      "Design and build intelligent web or mobile products that integrate deep learning, NLP, or generative AI capabilities seamlessly.",
    icon: Sparkles,
    gradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    title: "Full-Stack Engineering",
    description:
      "From frontend polish with React or Vite to scalable backends with Django or Node.js — complete product pipelines, done right.",
    icon: Code2,
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "Data & Automation Solutions",
    description:
      "Build custom automation tools, scraping systems, and data pipelines that transform manual workflows into scalable systems.",
    icon: Database,
    gradient: "from-green-500/10 to-emerald-500/10",
  },
];

const researchHighlights = [
  {
    title: "Agentic System Efficiency",
    summary:
      "Explored multi-agent architectures that learn from task outcomes to reduce redundant LLM calls and improve reasoning consistency.",
    icon: Network,
  },
  {
    title: "RAG Performance Optimization",
    summary:
      "Tested adaptive chunking and vector search tuning to minimize hallucinations in retrieval-augmented generation setups.",
    icon: Cpu,
  },
];

const stats = [
  { label: "Projects Delivered", value: "40+", suffix: "" },
  { label: "Years Experience", value: "5+", suffix: "" },
  { label: "Tech Stack", value: "MERN", suffix: ", Django, AI" },
];

function AnimatedNumber({ value, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numValue = parseInt(value) || 0;

  useEffect(() => {
    const duration = 2000;
    const steps = 30;
    const increment = numValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setDisplayValue(numValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numValue]);

  return (
    <span>
      {displayValue}{value.includes("+") ? "+" : ""}{suffix}
    </span>
  );
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col gap-32 pb-16">
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#0a0a0f] to-[#1a1a2e] shadow-[0_0_100px_rgba(59,130,246,0.15)]">
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15) 0%, transparent 50%)`,
          }}
        />
        
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-[#1B2237]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="relative z-10 flex flex-col gap-12 p-8 sm:p-12 lg:p-20">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.2fr,0.8fr] lg:items-center lg:gap-16">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm">
                <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300 sm:text-sm">
                  AI ENGINEER • RESEARCHER • FULL-STACK DEVELOPER
                </p>
              </div>

              {/* Main heading with gradient text */}
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                  Building intelligent systems
                </span>
                <br />
                <span className="text-white">
                  that learn, adapt, and empower
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  human creativity.
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
                I&apos;m <span className="font-semibold text-white">Hosain Ahmmed</span> — I design AI-driven applications and agentic systems that blend research, code, and real-world impact. From prototypes to production-ready systems, I help teams ship smarter, faster, and more reliably.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
                >
                  Explore Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
                >
                  Let&apos;s Collaborate
                </Link>
              </div>
            </div>

            {/* Stats Card - Enhanced */}
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 via-black/40 to-[#0a0a1a]/60 p-8 backdrop-blur-xl sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-cyan-400/70 sm:text-xs">
                    {stat.label}
                  </p>
                  <p className="text-4xl font-bold text-white sm:text-5xl">
                    {stat.value.includes("+") ? (
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    ) : (
                      <>{stat.value}{stat.suffix}</>
                    )}
                  </p>
                </div>
              ))}
              <div className="sm:col-span-2 space-y-3 pt-4 border-t border-white/10">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-400/70">
                  Current Focus
                </p>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                    <span>Building multi-agent AI research assistants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span>Developing scalable AI backends with Django & MongoDB</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Rocket className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" />
                    <span>Applying real-time AI in trading and decision systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section className="space-y-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-lg text-white/60">
              Showcasing innovation in AI, full-stack, and research
            </p>
          </div>
          <Link 
            href="/projects" 
            className="group inline-flex items-center gap-2 text-base font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-1 flex-col">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="rounded-2xl bg-white/5 p-3 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  
                  <div className="mb-6 space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="text-base leading-relaxed text-white/70">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors group-hover:border-cyan-500/30 group-hover:text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="space-y-12">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            How We Can Work Together
          </h2>
          <p className="mt-2 text-lg text-white/60">
            Comprehensive solutions from concept to deployment
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F1016] to-[#050508] p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                <div className="relative z-10 flex flex-1 flex-col gap-6">
                  <div className="rounded-2xl bg-white/5 p-4 backdrop-blur-sm w-fit">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-base leading-relaxed text-white/70">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Research Section - Enhanced */}
      <section className="space-y-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Research Highlights
            </h2>
            <p className="mt-2 text-lg text-white/60">
              Cutting-edge AI research and innovation
            </p>
          </div>
          <Link 
            href="/research" 
            className="group inline-flex items-center gap-2 text-base font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Explore Research
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {researchHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-2 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-white/80">
                  {item.summary}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Final CTA - Enhanced */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-12 text-center backdrop-blur-sm sm:p-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to build your next intelligent system?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/80">
            Let&apos;s collaborate on AI products that not only perform — but think, adapt, and evolve with users in mind.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
            >
              Start the Conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              Review Service Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
