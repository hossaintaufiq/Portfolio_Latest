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
  Network,
  Smartphone,
  Briefcase,
  Download,
  Mail,
  Github,
  Linkedin,
  FileText,
  FlaskConical
} from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Years Coding Experience", value: "3+", icon: Code2 },
  { label: "Full Projects Delivered", value: "10+", icon: Rocket },
  { label: "Startup Products Built", value: "2", icon: Briefcase },
  { label: "AI/ML Research Areas", value: "RAG, LLMs & Computer Vision", icon: Brain },
];

const whatIDo = [
  {
    title: "Full-Stack Development",
    description: "Building scalable MERN & Django-based web applications with modern UI and clean architecture.",
    icon: Code2,
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
  },
  {
    title: "Mobile App Development",
    description: "React Native & Kotlin apps, from UI to backend integration.",
    icon: Smartphone,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
  },
  {
    title: "AI & Machine Learning",
    description: "RAG systems, ML models, automation, intelligent agents.",
    icon: Brain,
    gradient: "from-green-500/20 via-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Startup & Product Building",
    description: "Designing, launching, and scaling digital products for real users.",
    icon: Rocket,
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
  },
];

const featuredProjects = [
  {
    title: "CRMPrime – Full-Stack CRM System",
    description: "MERN + Next.js + Firebase Auth + Role Management",
    thumbnail: "/images/projects/CRMPrime.png",
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
  },
  {
    title: "Bitcoin Trading Simulator",
    description: "Django backend + MongoDB + real-time historical data simulation.",
    thumbnail: "/images/projects/BitcoinProject.png",
    gradient: "from-green-500/20 via-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "Women Security App",
    description: "React Native + Firebase offline alert system.",
    thumbnail: "/images/projects/AiDoctor.png",
    gradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
  },
  {
    title: "RAG-Based Learning Assistant",
    description: "Python + LangChain + vector search engine.",
    thumbnail: "/images/projects/aisummary.png",
    gradient: "from-purple-500/20 via-indigo-500/20 to-blue-500/20",
  },
];

const researchAreas = [
  {
    title: "Retrieval-Augmented Generation (RAG)",
    icon: FlaskConical,
  },
  {
    title: "ML for Pattern Analysis & Prediction",
    icon: Cpu,
  },
  {
    title: "LangChain & LLM Applications",
    icon: Network,
  },
];

const techStack = {
  Frontend: ["React.js", "Next.js", "Tailwind", "Redux"],
  Backend: ["Node.js", "Express", "Django", "Firebase"],
  Mobile: ["React Native", "Kotlin"],
  Database: ["MongoDB", "MySQL", "PostgreSQL"],
  "AI/ML": ["Python", "TensorFlow", "PyTorch", "LangChain"],
  DevOps: ["Docker", "GitHub CI/CD"],
};

function AnimatedNumber({ value, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numValue = parseInt(value) || 0;

  useEffect(() => {
    if (isNaN(numValue) || numValue === 0) {
      setDisplayValue(value);
      return;
    }
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
  }, [numValue, value]);

  return (
    <span>
      {typeof displayValue === 'number' && !isNaN(displayValue) ? displayValue : value}
      {value.includes("+") ? "+" : ""}{suffix}
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
      {/* 🌌 1. Hero Section */}
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
              {/* Name & Title */}
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                    Hossain Ahmmed
                  </span>
                </h1>
                <p className="text-xl font-semibold text-white/90 sm:text-2xl">
                  Full-Stack Developer • App Developer • AI/ML Researcher
                </p>
                <p className="text-lg text-cyan-300/90 sm:text-xl">
                  Founder & CEO — Neptune Software Solutions
                </p>
              </div>

              {/* Description */}
              <p className="max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
                I build powerful web apps, mobile apps, and intelligent systems that solve real-world problems.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
                >
                  View My Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cyan-500/30 bg-cyan-500/10 px-8 py-4 text-base font-semibold text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/20"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Stats Card - Glowing */}
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-black/60 via-black/40 to-[#0a0a1a]/60 p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,0.2)] sm:grid-cols-2">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20">
                    <Icon className="h-6 w-6 text-cyan-400 mb-2" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/70 sm:text-sm">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-white sm:text-4xl">
                      {stat.value.includes("+") || (!isNaN(parseInt(stat.value)) && stat.value.length < 10) ? (
                        <AnimatedNumber value={stat.value} />
                      ) : (
                        <span className="text-base sm:text-lg">{stat.value}</span>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 2. What I Do Section */}
      <section className="space-y-12">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            What I Do
          </h2>
          <p className="mt-2 text-lg text-white/60">
            Showcasing my core expertise and services
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {whatIDo.map((service, index) => {
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

      {/* 🚀 3. Featured Projects Section */}
      <section className="space-y-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-lg text-white/60">
              Showcasing innovation in AI, full-stack, and mobile development
            </p>
          </div>
          <Link 
            href="/projects" 
            className="group inline-flex items-center gap-2 text-base font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => {
            return (
              <article
                key={project.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-1 flex-col p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 👨‍🚀 4. About Me Section */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 p-12 backdrop-blur-sm sm:p-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About Me
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
            I am a full-stack developer and AI researcher passionate about building products that impact people&apos;s lives.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Currently pursuing CSE at NSU and leading my startup Neptune Software Solutions.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
            I love working on ML projects, complex system design, and production-ready applications.
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-base font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Read Full About Page
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* 🔬 5. Research Work Section */}
      <section className="space-y-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Research Work
            </h2>
            <p className="mt-2 text-lg text-white/60">
              Exploring cutting-edge AI and ML technologies
            </p>
          </div>
          <Link 
            href="/research" 
            className="group inline-flex items-center gap-2 text-base font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            View All Research
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {researchAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article
                key={area.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {area.title}
                </h3>
              </article>
            );
          })}
        </div>
      </section>

      {/* 🛠️ 6. Tech Stack Section */}
      <section className="space-y-12">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tech Stack
          </h2>
          <p className="mt-2 text-lg text-white/60">
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div
              key={category}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F1016] to-[#050508] p-8 backdrop-blur-sm"
            >
              <h3 className="mb-4 text-lg font-bold text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📬 7. Contact Me Section */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-12 text-center backdrop-blur-sm sm:p-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something amazing together.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/80">
            Ready to collaborate on your next project? Get in touch!
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
            >
              <Mail className="h-5 w-5" />
              Email
            </Link>
            <a
              href="https://www.linkedin.com/in/hossain-taufiq/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/hosain-taufiq"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-cyan-500/30 bg-cyan-500/10 px-8 py-4 text-base font-semibold text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/20"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}