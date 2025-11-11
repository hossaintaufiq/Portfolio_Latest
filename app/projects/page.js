export const metadata = {
  title: "Projects | Hossain Taufiq Ahmmed",
  description:
    "AI, Full-Stack, and Research projects built by Hossain Taufiq Ahmmed — combining ML, data science, and scalable web development.",
};

const projectSections = [
  {
    category: "Entrepreneurial & Full-Stack Projects",
    items: [
      {
        name: "Justkaaj – Service Marketplace Platform",
        summary:
          "Founded and developed a live service marketplace connecting users with verified service providers. Built the full-stack platform using Next.js, Node.js, and PostgreSQL with machine learning–powered recommendation features.",
        impact:
          "Laid the foundation for a scalable startup ecosystem; enabled seamless service discovery and matching for hundreds of early users.",
      },
      {
        name: "AcuMens Media Inc – AI-Powered Web Application",
        summary:
          "Developed a full-stack React.js application integrated with MongoDB and RESTful APIs to automate and optimize digital content delivery and analytics.",
        impact:
          "Improved client engagement by 30% through automated reporting and real-time analytics dashboards.",
      },
    ],
  },
  {
    category: "Academic & Research Projects",
    items: [
      {
        name: "Epilepsy Detection using Machine Learning",
        summary:
          "Research Assistant at North South University focusing on early detection of epileptic seizures using EEG data and deep learning models (TensorFlow, PyTorch).",
        impact:
          "Working toward improving seizure prediction accuracy for clinical research and healthcare applications.",
      },
      {
        name: "AI-Powered Daily Routine & Task Manager",
        summary:
          "Developed a personal productivity system using Retrieval-Augmented Generation (RAG) to generate personalized task recommendations and adaptive daily routines.",
        impact:
          "Enhanced user productivity and focus by applying context-aware AI scheduling techniques.",
      },
    ],
  },
  {
    category: "Web & System Development Projects",
    items: [
      {
        name: "Private University Admission Helper – MERN Stack App",
        summary:
          "Built a MERN web application that helps students explore universities, compare programs, view admission deadlines, and estimate costs using an interactive dashboard.",
        impact:
          "Simplified university comparison for hundreds of students and improved application preparation efficiency.",
      },
      {
        name: "Bitcoin Transaction Simulation – Web Application",
        summary:
          "Developed a blockchain-based BTC/USDT trading simulator using Vite.js, React.js, Django, and MongoDB, replicating real transaction flows for educational purposes.",
        impact:
          "Created an interactive learning environment for students to understand blockchain transactions and trading dynamics.",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="max-w-3xl text-lg text-white/70">
          A selection of full-stack, AI, and research projects showcasing my work
          across machine learning, data analysis, and scalable web application
          development. Each project reflects a balance between innovation,
          technical precision, and practical impact.
        </p>
      </section>

      {/* Projects */}
      <div className="space-y-12">
        {projectSections.map((section) => (
          <section key={section.category} className="space-y-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                {section.category}
              </h2>
              <p className="text-sm uppercase tracking-[0.4em] text-white/40">
                SELECTED WORK
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {section.items.map((item) => (
                <article
                  key={item.name}
                  className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                >
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-sm text-white/70">
                      {item.summary}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/70">
                    <span className="font-semibold text-white">Outcome:</span>{" "}
                    {item.impact}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer Note */}
      <section className="rounded-3xl border border-white/10 bg-[#0F1016] p-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Want to learn more about a specific project?
        </h2>
        <p className="mt-3 text-sm text-white/70">
          Detailed case studies, architecture diagrams, and code samples are
          available upon request for collaboration or professional review.
        </p>
      </section>
    </div>
  );
}
