"use client";

import { useState, useEffect } from "react";
import { Code, Sparkles, Brain, FlaskConical, BookOpen, FileText, Network, Cpu } from "lucide-react";

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
    <div className="space-y-20 pb-16">
      {/* Header - Enhanced */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 via-[#0a0a0f]/40 to-[#1a1a2e]/40 p-8 sm:p-12 lg:p-16 backdrop-blur-sm">
        <FloatingParticles />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 animate-pulse-slow" />
        
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              AI Research • Machine Learning • Innovation
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-100 to-cyan-200 bg-clip-text text-transparent">
              Research
            </span>
          </h1>
          
          <p className="max-w-3xl text-lg sm:text-xl text-white/80 leading-relaxed">
            My research lies at the intersection of artificial intelligence,
            machine learning, and real-world problem-solving. I explore multimodal
            reasoning, scientific prediction, health analytics, and human-AI
            collaboration — focusing on building transparent, efficient, and
            impactful AI systems.
          </p>

          {/* Code snippet decoration */}
          <div className="mt-8">
            <div className="rounded-lg bg-black/60 p-4 border border-white/10 font-mono text-xs sm:text-sm max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-4 w-4 text-purple-400" />
                <span className="text-purple-400">research.py</span>
              </div>
              <div className="space-y-1 text-white/70">
                <div>
                  <span className="text-purple-400">def</span>{" "}
                  <span className="text-cyan-400">explore_ai</span>
                  <span className="text-white">():</span>
                </div>
                <div className="pl-4">
                  <span className="text-green-400">return</span>{" "}
                  <span className="text-yellow-400">&apos;Innovation + Impact&apos;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Research - Enhanced */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Brain className="h-6 w-6 text-purple-400" />
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Active Investigations
          </h2>
        </div>
        
        <div className="grid gap-6 lg:grid-cols-2">
          {researchTracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <article
                key={track.label}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl bg-white/5 p-3 backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <span className={`rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${track.statusColor}`}>
                      {track.status}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                      {track.label}
                    </h3>
                    <p className="text-base leading-relaxed text-white/70">
                      {track.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Research Philosophy - Enhanced */}
        <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F1016] to-[#050508] p-8 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-purple-400" />
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Research Philosophy
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-white/80">
                I aim to combine theoretical innovation with practical application —
                ensuring that every AI system I build not only performs well but
                also behaves responsibly in real-world settings. My work prioritizes
                explainability, data ethics, and reproducibility.
              </p>
              <p className="text-base leading-relaxed text-white/80">
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
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-cyan-400" />
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Publications & Research Contributions
          </h2>
        </div>
        <div className="grid gap-6">
          {publications.map((publication, index) => (
            <a
              key={publication.title}
              href={publication.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden flex flex-col gap-3 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-2 group-hover:scale-110 transition-transform">
                      <FileText className="h-4 w-4 text-cyan-400" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400/80">
                      {publication.year}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
                      {publication.venue}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {publication.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 rounded-full bg-white/5 p-2 group-hover:bg-cyan-500/20 transition-colors">
                  <span className="text-xs font-bold text-white/60 group-hover:text-cyan-300">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
