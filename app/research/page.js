export const metadata = {
  title: "Research | Hossain Taufiq Ahmmed",
  description:
    "AI and Machine Learning research by Hossain Taufiq Ahmmed — focusing on multimodal RAG, epilepsy detection, materials science, and AI-driven productivity systems.",
};

const researchTracks = [
  {
    label: "Multimodal Retrieval-Augmented Generation (RAG)",
    description:
      "Developing a multimodal RAG framework that integrates text, images, and tables to enhance factual question answering while reducing hallucinations through cross-modal verification and confidence scoring. The system leverages models like CLIP and Mistral for cross-domain reasoning.",
    status: "In Progress",
  },
  {
    label: "Multi-Task Machine Learning for Materials Science",
    description:
      "Designing a multi-task model to predict band gap and formation energy simultaneously, improving the discovery of efficient semiconductors and catalysts. Combines classification and regression with explainable ML techniques for reliability and interpretability.",
    status: "Under Review",
  },
  {
    label: "Epilepsy Detection using Machine Learning",
    description:
      "Exploring EEG-based deep learning models (CNN and RNN) for early epileptic seizure detection. Focus on improving accuracy through signal denoising, feature extraction, and temporal pattern recognition.",
    status: "Ongoing",
  },
  {
    label: "AI-Powered Daily Routine & Task Manager",
    description:
      "Building an adaptive productivity system using Retrieval-Augmented Generation (RAG) to generate context-aware task recommendations and schedule optimization. Integrates user feedback loops for continuous learning.",
    status: "Prototype",
  },
  {
    label: "Applied AI in Service Recommendation Systems",
    description:
      "Implementing ML algorithms in Justkaaj, a service marketplace, to optimize provider-user matching and automate feedback cycles for personalized recommendations.",
    status: "In Development",
  },
];

const publications = [
  {
    title:
      "Multimodal Retrieval-Augmented Generation (RAG) for Factual Question Answering with Cross-Modal Hallucination Reduction",
    venue: "North South University Research Symposium, 2025",
    link: "#",
  },
  {
    title:
      "Multi-Task Machine Learning for Accelerated Prediction of Band Gap and Formation Energy",
    venue: "IEEE Student Research Conference, 2025",
    link: "#",
  },
  {
    title:
      "Epileptic Seizure Detection using Deep Learning on EEG Data",
    venue: "NSU Research Symposium, 2025",
    link: "#",
  },
  {
    title:
      "Adaptive Task Management through Retrieval-Augmented Generation",
    venue: "AI & Cognitive Systems Workshop, 2024",
    link: "#",
  },
];

export default function ResearchPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">Research</h1>
        <p className="max-w-3xl text-lg text-white/70">
          My research lies at the intersection of artificial intelligence,
          machine learning, and real-world problem-solving. I explore multimodal
          reasoning, scientific prediction, health analytics, and human-AI
          collaboration — focusing on building transparent, efficient, and
          impactful AI systems.
        </p>
      </section>

      {/* Active Research */}
      <section className="grid gap-8 md:grid-cols-[1fr,1.1fr]">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Active Investigations
          </h2>
          <div className="mt-6 space-y-6">
            {researchTracks.map((track) => (
              <div key={track.label} className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {track.label}
                  </h3>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
                    {track.status}
                  </span>
                </div>
                <p className="text-sm text-white/70">{track.description}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Research Philosophy */}
        <article className="rounded-3xl border border-white/10 bg-[#0F1016] p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Research Philosophy
          </h2>
          <p className="mt-4 text-sm text-white/70">
            I aim to combine theoretical innovation with practical application —
            ensuring that every AI system I build not only performs well but
            also behaves responsibly in real-world settings. My work prioritizes
            explainability, data ethics, and reproducibility.
          </p>
          <p className="mt-4 text-sm text-white/70">
            Collaboration is central to my research. I work with peers across
            AI, materials science, and cognitive systems to explore how
            cross-domain knowledge can accelerate discovery and responsible AI
            adoption.
          </p>
        </article>
      </section>

      {/* Publications */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Publications & Research Contributions
        </h2>
        <div className="grid gap-4">
          {publications.map((publication) => (
            <a
              key={publication.title}
              href={publication.link}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/30 hover:bg-white/10"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
                {publication.venue}
              </span>
              <span className="text-lg font-semibold tracking-tight text-white group-hover:text-white/90">
                {publication.title}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
