"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code, Sparkles, Brain, FlaskConical, BookOpen, FileText, Network, Cpu, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";

const researchTracks = [
  {
    label: "Multimodal Retrieval-Augmented Generation (RAG)",
    description:
      "Developing a multimodal RAG framework that integrates text, images, and tables to enhance factual question answering while reducing hallucinations through cross-modal verification and confidence scoring. The system leverages models like CLIP and Mistral for cross-domain reasoning.",
    status: "In Progress",
    icon: Network,
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    statusColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
  {
    label: "Multi-Task Machine Learning for Materials Science",
    description:
      "Designing a multi-task model to predict band gap and formation energy simultaneously, improving the discovery of efficient semiconductors and catalysts. Combines classification and regression with explainable ML techniques for reliability and interpretability.",
    status: "Under Review",
    icon: FlaskConical,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    statusColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
  {
    label: "Epilepsy Detection using Machine Learning",
    description:
      "Exploring EEG-based deep learning models (CNN and RNN) for early epileptic seizure detection. Focus on improving accuracy through signal denoising, feature extraction, and temporal pattern recognition.",
    status: "Ongoing",
    icon: Brain,
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    statusColor: "bg-green-500/20 text-green-300 border-green-500/30",
  },
  {
    label: "AI-Powered Daily Routine & Task Manager",
    description:
      "Building an adaptive productivity system using Retrieval-Augmented Generation (RAG) to generate context-aware task recommendations and schedule optimization. Integrates user feedback loops for continuous learning.",
    status: "Prototype",
    icon: Cpu,
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    statusColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  },
  {
    label: "Applied AI in Service Recommendation Systems",
    description:
      "Implementing ML algorithms in Justkaaj, a service marketplace, to optimize provider-user matching and automate feedback cycles for personalized recommendations.",
    status: "In Development",
    icon: Sparkles,
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    statusColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
];

const publications = [
  {
    title:
      "Multimodal Retrieval-Augmented Generation (RAG) for Factual Question Answering with Cross-Modal Hallucination Reduction",
    venue: "North South University Research Symposium, 2025",
    link: "#",
    year: "2025",
  },
  {
    title:
      "Multi-Task Machine Learning for Accelerated Prediction of Band Gap and Formation Energy",
    venue: "IEEE Student Research Conference, 2025",
    link: "#",
    year: "2025",
  },
  {
    title:
      "Epileptic Seizure Detection using Deep Learning on EEG Data",
    venue: "NSU Research Symposium, 2025",
    link: "#",
    year: "2025",
  },
  {
    title:
      "Adaptive Task Management through Retrieval-Augmented Generation",
    venue: "AI & Cognitive Systems Workshop, 2024",
    link: "#",
    year: "2024",
  },
];

// Animated floating particles
function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
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

export default function ResearchPage() {
  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-24 lg:space-y-32 pb-10 sm:pb-12 md:pb-16">
      {/* Header Section - Enhanced */}
      <section className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 via-[#0a0a0f]/40 to-[#1a1a2e]/40 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 backdrop-blur-sm">
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 animate-pulse-slow" />
        
        <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 backdrop-blur-sm">
            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-purple-400" />
            <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-semibold uppercase tracking-wider text-purple-300">
              AI Research • Machine Learning • Innovation
            </span>
          </div>
          
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-purple-100 to-cyan-200 bg-clip-text text-transparent">
                Research
              </span>
            </h1>
            
            <p className="max-w-3xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/80 leading-relaxed">
              My research lies at the intersection of artificial intelligence,
              machine learning, and real-world problem-solving. I explore multimodal
              reasoning, scientific prediction, health analytics, and human-AI
              collaboration — focusing on building transparent, efficient, and
              impactful AI systems.
            </p>
          </div>

          {/* Code snippet decoration */}
          <div className="mt-4 sm:mt-6 md:mt-8">
            <div className="rounded-lg bg-black/60 p-2.5 sm:p-3 border border-white/10 font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-sm max-w-2xl">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 md:mb-3">
                <Code className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 text-purple-400" />
                <span className="text-purple-400">research.py</span>
              </div>
              <div className="space-y-0.5 sm:space-y-1 text-white/70">
                <div>
                  <span className="text-purple-400">def</span>{" "}
                  <span className="text-cyan-400">explore_ai</span>
                  <span className="text-white">():</span>
                </div>
                <div className="pl-2.5 sm:pl-3 md:pl-4">
                  <span className="text-green-400">return</span>{" "}
                  <span className="text-yellow-400">&apos;Innovation + Impact&apos;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Research - Enhanced */}
      <section className="space-y-6 sm:space-y-8 md:space-y-12">
        <div className="flex items-center gap-2 sm:gap-3">
          <Brain className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-purple-400" />
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
              Active Investigations
            </h2>
            <p className="mt-1 sm:mt-1.5 md:mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-white/60">
              Cutting-edge AI research and innovation
            </p>
          </div>
        </div>
        
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
          {researchTracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <article
                key={track.label}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 sm:p-5 md:p-6 lg:p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                <div className="relative z-10 flex flex-1 flex-col space-y-2.5 sm:space-y-3 md:space-y-4">
                  <div className="flex items-start justify-between gap-2 sm:gap-3 md:gap-4">
                    <div className="rounded-lg sm:rounded-xl md:rounded-2xl bg-white/5 p-2 sm:p-2.5 md:p-3 backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-400" />
                    </div>
                    <span className={`rounded-full border px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider shrink-0 ${track.statusColor}`}>
                      {track.status}
                    </span>
                  </div>
                  
                  <div className="flex-1 space-y-1.5 sm:space-y-2 md:space-y-3">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white">
                      {track.label}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white/70">
                      {track.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Research Philosophy - Enhanced */}
        <article className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F1016] to-[#050508] p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
          <div className="relative z-10 space-y-3 sm:space-y-4 md:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="rounded-lg sm:rounded-xl bg-white/5 p-1.5 sm:p-2 backdrop-blur-sm">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-purple-400" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Research Philosophy
              </h2>
            </div>
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/80">
                I aim to combine theoretical innovation with practical application —
                ensuring that every AI system I build not only performs well but
                also behaves responsibly in real-world settings. My work prioritizes
                explainability, data ethics, and reproducibility.
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/80">
                Collaboration is central to my research. I work with peers across
                AI, materials science, and cognitive systems to explore how
                cross-domain knowledge can accelerate discovery and responsible AI
                adoption.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* Publications - Enhanced */}
      <section className="space-y-6 sm:space-y-8 md:space-y-12">
        <div className="flex items-center gap-2 sm:gap-3">
          <FileText className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-400" />
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
              Publications & Research Contributions
            </h2>
            <p className="mt-1 sm:mt-1.5 md:mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-white/60">
              Recent publications and conference contributions
            </p>
          </div>
        </div>
        <div className="grid gap-3 sm:gap-4 md:gap-6">
          {publications.map((publication, index) => (
            <a
              key={publication.title}
              href={publication.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden flex flex-col gap-2.5 sm:gap-3 md:gap-4 rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-3 sm:p-4 md:p-6 lg:p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 flex items-start justify-between gap-2 sm:gap-3 md:gap-4">
                <div className="flex-1 space-y-1.5 sm:space-y-2 md:space-y-3 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3">
                    <div className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-1 sm:p-1.5 md:p-2 group-hover:scale-110 transition-transform">
                      <FileText className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-cyan-400" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-cyan-400/80 px-1.5 py-0.5 sm:px-2 sm:py-0.5 md:px-3 md:py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10">
                      {publication.year}
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-white/50">
                      {publication.venue}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {publication.title}
                  </h3>
                </div>
                <div className="shrink-0 flex items-center gap-1 sm:gap-1.5 md:gap-2">
                  <div className="rounded-full bg-white/5 p-1 sm:p-1.5 md:p-2 group-hover:bg-cyan-500/20 transition-colors">
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-white/60 group-hover:text-cyan-300">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white/40 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-6 sm:p-8 md:p-12 lg:p-16 text-center backdrop-blur-sm max-w-7xl mx-auto px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
        
        <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
              Interested in collaborating on research?
            </h2>
            <p className="mx-auto mt-3 sm:mt-4 md:mt-6 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-white/80">
              I&apos;m always open to discussing research opportunities, academic collaborations, and innovative AI projects. Let&apos;s explore how we can advance AI together.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm md:text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
            >
              Start Collaboration
              <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border-2 border-white/30 bg-white/5 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm md:text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
