"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { 
  Code2, 
  Brain, 
  Rocket, 
  Smartphone,
  Briefcase,
  Download,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Cpu,
  Network,
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
  },
  {
    title: "Mobile App Development",
    description: "React Native & Kotlin apps, from UI to backend integration.",
    icon: Smartphone,
  },
  {
    title: "AI & Machine Learning",
    description: "RAG systems, ML models, automation, intelligent agents.",
    icon: Brain,
  },
  {
    title: "Startup & Product Building",
    description: "Designing, launching, and scaling digital products for real users.",
    icon: Rocket,
  },
];

const featuredProjects = [
  {
    title: "CRMPrime – Full-Stack CRM System",
    description: "MERN + Next.js + Firebase Auth + Role Management",
    thumbnail: "/images/projects/CRMPrime.png",
  },
  {
    title: "Bitcoin Trading Simulator",
    description: "Django backend + MongoDB + real-time historical data simulation.",
    thumbnail: "/images/projects/BitcoinProject.png",
  },
  {
    title: "Women Security App",
    description: "React Native + Firebase offline alert system.",
    thumbnail: "/images/projects/AiDoctor.png",
  },
  {
    title: "RAG-Based Learning Assistant",
    description: "Python + LangChain + vector search engine.",
    thumbnail: "/images/projects/aisummary.png",
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
  const [displayValue, setDisplayValue] = useState(() => {
    const numValue = parseInt(value) || 0;
    return isNaN(numValue) || numValue === 0 ? value : 0;
  });
  const numValue = parseInt(value) || 0;

  useEffect(() => {
    if (isNaN(numValue) || numValue === 0) {
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
  }, [numValue]);

  return (
    <span>
      {typeof displayValue === 'number' && !isNaN(displayValue) ? displayValue : value}
      {value.includes("+") ? "+" : ""}{suffix}
    </span>
  );
}

export default function Home() {
  const codeSnippet = `// Building intelligent systems
const developer = {
  name: "Hossain Ahmmed",
  role: "Full-Stack Developer",
  expertise: [
    "MERN Stack",
    "React Native",
    "AI/ML Research"
  ],
  company: "Neptune Software Solutions",
  build: (project) => {
    return solveRealWorldProblems(project);
  }
};

developer.build("Your Next Project");`;

  return (
    <div className="flex flex-col gap-24 pb-16">
      {/* Hero Section */}
      <section className="flex flex-col gap-8 rounded-2xl border border-white/5 bg-black/30 p-8 sm:p-12">
        {/* Part 1: Text Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hossain Ahmmed
            </h1>
            <p className="text-lg font-medium text-white/80 sm:text-xl">
              Full-Stack Developer • App Developer • AI/ML Researcher
            </p>
            <p className="text-base text-cyan-400/80 sm:text-lg">
              Founder & CEO — Neptune Software Solutions
            </p>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            I build powerful web apps, mobile apps, and intelligent systems that solve real-world problems.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-600"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Part 2: Code Display */}
        <div className="rounded-lg border border-white/10 bg-[#0a0a0f] p-6 font-mono text-sm">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
            <span className="ml-4 text-xs text-white/50">index.js</span>
          </div>
          <pre className="overflow-x-auto">
            <code className="text-white/90">
              {codeSnippet.split('\n').map((line, index) => {
                const isComment = line.trim().startsWith('//');
                
                if (isComment) {
                  return (
                    <div key={index} className="flex min-h-6">
                      <span className="select-none text-white/20 pr-4">{String(index + 1).padStart(2, '0')}</span>
                      <span className="flex-1 text-gray-500">{line}</span>
                    </div>
                  );
                }
                
                // Highlight JavaScript syntax
                const highlightJS = (text) => {
                  const parts = [];
                  let remaining = text;
                  
                  // Extract strings first
                  const stringRegex = /"([^"]*)"/g;
                  const segments = [];
                  let lastIndex = 0;
                  let match;
                  
                  while ((match = stringRegex.exec(text)) !== null) {
                    if (match.index > lastIndex) {
                      segments.push({ type: 'code', text: text.substring(lastIndex, match.index) });
                    }
                    segments.push({ type: 'string', text: match[0] });
                    lastIndex = match.index + match[0].length;
                  }
                  
                  if (lastIndex < text.length) {
                    segments.push({ type: 'code', text: text.substring(lastIndex) });
                  }
                  
                  if (segments.length === 0) {
                    segments.push({ type: 'code', text });
                  }
                  
                  segments.forEach((segment, segIdx) => {
                    if (segment.type === 'string') {
                      parts.push(<span key={`seg-${segIdx}`} className="text-green-400">{segment.text}</span>);
                    } else {
                      // Highlight keywords and operators in code segments
                      const codeParts = segment.text.split(/(\bconst\b|\breturn\b|\bfunction\b|=>|[{}[\](),:;=])/);
                      codeParts.forEach((part, partIdx) => {
                        if (!part) return;
                        if (/\b(const|return|function|=>)\b/.test(part)) {
                          parts.push(<span key={`seg-${segIdx}-part-${partIdx}`} className="text-purple-400">{part}</span>);
                        } else if (/[{}[\](),:;=]/.test(part)) {
                          parts.push(<span key={`seg-${segIdx}-part-${partIdx}`} className="text-cyan-400">{part}</span>);
                        } else {
                          parts.push(<span key={`seg-${segIdx}-part-${partIdx}`}>{part}</span>);
                        }
                      });
                    }
                  });
                  
                  return parts.length > 0 ? parts : [text];
                };
                
                return (
                  <div key={index} className="flex min-h-6">
                    <span className="select-none text-white/20 pr-4">{String(index + 1).padStart(2, '0')}</span>
                    <span className="flex-1 whitespace-pre">{highlightJS(line)}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What I Do
          </h2>
          <p className="mt-2 text-base text-white/60">
            Showcasing my core expertise and services
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whatIDo.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-xl border border-white/5 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10"
              >
                <div className="mb-4 rounded-lg bg-white/5 p-3 w-fit">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-base text-white/60">
              Showcasing innovation in AI, full-stack, and mobile development
            </p>
          </div>
          <Link 
            href="/projects" 
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project) => {
            return (
              <article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-white/5 transition-all duration-300 hover:border-cyan-500/30"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {project.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* About Me Section */}
      <section className="rounded-2xl border border-white/5 bg-white/5 p-10 sm:p-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <div className="space-y-3 max-w-3xl">
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              I am a full-stack developer and AI researcher passionate about building products that impact people&apos;s lives.
            </p>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              Currently pursuing CSE at NSU and leading my startup Neptune Software Solutions.
            </p>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              I love working on ML projects, complex system design, and production-ready applications.
            </p>
          </div>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Read Full About Page
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Research Work Section */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Research Work
            </h2>
            <p className="mt-2 text-base text-white/60">
              Exploring cutting-edge AI and ML technologies
            </p>
          </div>
          <Link 
            href="/research" 
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            View All Research
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {researchAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article
                key={area.title}
                className="rounded-xl border border-white/5 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10"
              >
                <div className="mb-4 rounded-lg bg-white/5 p-3 w-fit">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {area.title}
                </h3>
              </article>
            );
          })}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-2 text-base text-white/60">
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div
              key={category}
              className="rounded-xl border border-white/5 bg-white/5 p-6"
            >
              <h3 className="mb-3 text-base font-bold text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Me Section */}
      <section className="rounded-2xl border border-white/5 bg-white/5 p-10 text-center sm:p-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something amazing together.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Ready to collaborate on your next project? Get in touch!
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              Email
            </Link>
            <a
              href="https://www.linkedin.com/in/hossain-taufiq/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/hosain-taufiq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}