"use client";

import { useState, useEffect } from "react";
import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaChartBar,
  FaBrain,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiCplusplus,
  SiAnaconda,
  SiHtml5,
  SiCss3,
  SiJest,
} from "react-icons/si";
import { MdOutlineDevices, MdApi } from "react-icons/md";
import { Code, Sparkles, Rocket, Brain, Zap } from "lucide-react";

const milestones = [
  {
    year: "2024",
    title: "Founder & CEO, Justkaaj",
    description:
      "Founded and launched Justkaaj — a service marketplace platform connecting users with providers. Spearheaded full-stack development using Next.js, Node.js, PostgreSQL, and ML-powered recommendations.",
  },
  {
    year: "2025",
    title: "Research Assistant, North South University",
    description:
      "Conducting research on early detection of epileptic seizures using EEG data and deep learning under the supervision of Dr. MD. Sumon Hossain. Focused on model training, evaluation, and improving prediction accuracy.",
  },
  {
    year: "2023",
    title: "React Website Developer, Brooksource (Remote)",
    description:
      "Developed and deployed responsive web apps using React.js, TypeScript, and Redux. Improved performance by 20% through optimization techniques and collaborated in Agile teams for on-time project delivery.",
  },
  {
    year: "2022",
    title: "Website Developer, Americares (Remote)",
    description:
      "Built and maintained mobile-first, accessible applications using React.js and Tailwind CSS. Integrated APIs, optimized queries, and implemented secure authentication flows to enhance performance and security.",
  },
];

const principles = [
  {
    title: "AI with Purpose",
    description:
      "Apply machine learning to solve real-world challenges — from healthcare research to intelligent service systems — ensuring every model has measurable impact.",
    icon: Brain,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Full-Stack Excellence",
    description:
      "Design and implement robust, scalable systems from frontend to backend, balancing performance, security, and maintainability.",
    icon: Code,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Continuous Growth",
    description:
      "Constantly learning and adapting — from new AI architectures to frontend frameworks — to stay at the frontier of technology and innovation.",
    icon: Rocket,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

// Animated floating particles
function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-16">
      {/* Intro Section - Enhanced */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 via-[#0a0a0f]/40 to-[#1a1a2e]/40 p-8 sm:p-12 lg:p-16 backdrop-blur-sm">
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-pulse-slow" />
        
        <div className="relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              AI Engineer • Full-Stack Developer • Researcher
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Hossain Taufiq Ahmmed
            </span>
          </h1>
          
          <p className="max-w-3xl text-lg sm:text-xl text-white/80 leading-relaxed mx-auto">
            I&apos;m an AI/ML Researcher and Full-Stack Developer passionate about
            transforming innovative ideas into intelligent, scalable solutions. As
            the Founder & CEO of <span className="font-semibold text-white">Justkaaj</span>,
            I combine machine learning, data analysis, and full-stack development
            to create impactful digital products. I&apos;ve worked across React,
            Next.js, Django, and AI frameworks like TensorFlow and PyTorch to
            build applications that bridge human needs and technology.
          </p>

          {/* Code snippet decoration */}
          <div className="mt-8 flex justify-center">
            <div className="rounded-lg bg-black/60 p-4 border border-white/10 font-mono text-xs sm:text-sm max-w-2xl w-full">
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-400">about.js</span>
              </div>
              <div className="space-y-1 text-white/70">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-400">developer</span>{" "}
                  <span className="text-white">=</span> {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-green-400">role</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-400">&apos;Full-Stack AI Engineer&apos;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">passion</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-400">&apos;Building Intelligent Systems&apos;</span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">status</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-400">&apos;Always Learning&apos;</span>
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles - Enhanced */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Zap className="h-6 w-6 text-cyan-400" />
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Core Principles
          </h2>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <article
                key={principle.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                <div className="relative z-10 space-y-4">
                  <div className="rounded-2xl bg-white/5 p-4 w-fit backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {principle.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/70">
                    {principle.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Beyond Development Card */}
        <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F1016] to-[#050508] p-8 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Beyond Development
              </h2>
            </div>
            <p className="text-base leading-relaxed text-white/80">
              Outside of coding, I enjoy mentoring peers, exploring advancements
              in AI ethics, and experimenting with automation tools. I&apos;m also
              passionate about traveling, fitness, and continuous self-improvement
              to maintain creativity and focus. Sports like badminton and cricket
              keep my teamwork and strategic thinking sharp.
            </p>
          </div>
        </article>
      </section>

      {/* Milestones - Enhanced */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Rocket className="h-6 w-6 text-cyan-400" />
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Career Milestones
          </h2>
        </div>
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className="group relative overflow-hidden flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 md:flex-row md:items-center md:justify-between backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex-shrink-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="text-sm font-bold uppercase tracking-[0.4em] text-cyan-400/80">
                  {milestone.year}
                </div>
              </div>
              
              <div className="relative z-10 max-w-2xl space-y-2 flex-1">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {milestone.title}
                </h3>
                <p className="text-base leading-relaxed text-white/70">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section - Enhanced */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Code className="h-6 w-6 text-cyan-400" />
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
        </div>
        {/* The main grid handles 6 items consistently across 2 rows of 3 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Programming & SQL (1/6) */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-4 text-white">Programming & SQL</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaPython className="text-yellow-400" /> <span>Python</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaJava className="text-red-600" /> <span>Java</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiCplusplus className="text-blue-500" /> <span>C++</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaDatabase className="text-sky-500" /> <span>SQL</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaJs className="text-yellow-300" />{" "}
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiTypescript className="text-blue-400" />{" "}
                <span>TypeScript</span>
              </div>
            </div>
            </div>
          </div>

          {/* Frontend Development (2/6) */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-teal-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-4 text-white">Frontend Development</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaReact className="text-cyan-400" /> <span>React.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiNextdotjs className="text-white" /> <span>Next.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiTailwindcss className="text-teal-400" />{" "}
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiHtml5 className="text-orange-500" /> <span>HTML</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiCss3 className="text-blue-500" /> <span>CSS</span>
              </div>
            </div>
            </div>
          </div>

          {/* Backend Development (3/6) */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-4 text-white">Backend Development</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaNodeJs className="text-green-500" /> <span>Node.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiExpress className="text-white/80" /> <span>Express.js</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiDjango className="text-green-700" /> <span>Django</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <MdApi className="text-purple-400" /> <span>RESTful APIs</span>{" "}
                {/* <--- Changed to MdApi */}
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiGraphql className="text-pink-500" /> <span>GraphQL</span>
              </div>
            </div>
            </div>
          </div>

          {/* Databases & Web Scraping (4/6) */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-4 text-white">Data & Scraping</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiPostgresql className="text-sky-500" />{" "}
                <span>PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaDatabase className="text-orange-400" />{" "}
                <span>MySQL / SSMS</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiMongodb className="text-green-400" /> <span>MongoDB</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiFirebase className="text-yellow-500" /> <span>Firebase</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaPython className="text-gray-400" />{" "}
                <span>Beautiful Soup</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaCode className="text-gray-400" />{" "}
                <span>Automation Scripts</span>
              </div>
            </div>
            </div>
          </div>

          {/* Machine Learning & Data Science (5/6) */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-4 text-white">ML & Data Science</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiTensorflow className="text-orange-400" />{" "}
                <span>TensorFlow</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiPytorch className="text-red-500" /> <span>PyTorch</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiAnaconda className="text-cyan-600" />{" "}
                <span>NumPy, Pandas</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiScikitlearn className="text-orange-600" />{" "}
                <span>Scikit-learn</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaChartBar className="text-blue-300" />{" "}
                <span>Data Analysis/Viz</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaBrain className="text-pink-300" />{" "}
                <span>Model Training/Eval</span>
              </div>
            </div>
            </div>
          </div>

          {/* DevOps, Testing & Core Skills (6/6) */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-4 text-white">DevOps & Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaGitAlt className="text-orange-400" />{" "}
                <span>Git & GitHub</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaDocker className="text-blue-500" />{" "}
                <span>Docker & CI/CD</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <SiJest className="text-red-600" />{" "}
                <span>Jest / Mocha / Chai</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <FaCode className="text-purple-400" />{" "}
                <span>DSA & Problem Solving</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <MdOutlineDevices className="text-green-300" />{" "}
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <MdApi className="text-yellow-500" />{" "}
                <span>API Integration</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
