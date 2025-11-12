import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // For GitHub and Live Site icons

export const metadata = {
  title: "Projects | Hossain Taufiq Ahmmed",
  description:
    "AI, Full-Stack, and Research projects built by Hossain Taufiq Ahmmed — combining ML, data science, and scalable web development.",
};

// Add the color palettes and random selection logic
const tagColorPalettes = [
  { bg: "bg-blue-600/20", text: "text-blue-300" },
  { bg: "bg-green-600/20", text: "text-green-300" },
  { bg: "bg-purple-600/20", text: "text-purple-300" },
  { bg: "bg-pink-600/20", text: "text-pink-300" },
  { bg: "bg-yellow-600/20", text: "text-yellow-300" },
  { bg: "bg-red-600/20", text: "text-red-300" },
  { bg: "bg-cyan-600/22", text: "text-cyan-300" },
];

const getRandomTagColor = () => {
  const randomIndex = Math.floor(Math.random() * tagColorPalettes.length);
  return tagColorPalettes[randomIndex];
};


const projectSections = [
  
  {
    category: "Entrepreneurial & Full-Stack Projects",
    items: [
      {
        id: "P001",
        name: "Justkaaj – Service Marketplace Platform",
        summary:
          "Founded and developed a live service marketplace connecting users with verified service providers. Built the full-stack platform using Next.js, Node.js, and PostgreSQL with machine learning–powered recommendation features.",
        impact:
          "Laid the foundation for a scalable startup ecosystem; enabled seamless service discovery and matching for hundreds of early users.",
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Machine Learning"],
        githubLink: "https://github.com/hossain-taufiq/justkaaj",
        liveLink: "https://www.justkaaj.com",
        thumbnail: "/images/placeholder-project1.png",
      },
      {
        id: "P002",
        name: "AcuMens Media Inc – AI-Powered Web App (Project A)", // Unique Name
        summary:
          "Developed a full-stack React.js application integrated with MongoDB and RESTful APIs to automate and optimize digital content delivery and analytics.",
        impact:
          "Improved client engagement by 30% through automated reporting and real-time analytics dashboards.",
        technologies: ["React.js", "MongoDB", "RESTful APIs", "Analytics", "Full-Stack"],
        githubLink: "https://github.com/hossain-taufiq/acumens",
        liveLink: "https://www.google.com",
        thumbnail: "/images/placeholder-project2.png",
      },
      {
        id: "P003",
        name: "AcuMens Media Inc – AI-Powered Web App (Project B)", // Unique Name
        summary:
          "Developed a full-stack React.js application integrated with MongoDB and RESTful APIs to automate and optimize digital content delivery and analytics.",
        impact:
          "Improved client engagement by 30% through automated reporting and real-time analytics dashboards.",
        technologies: ["React.js", "MongoDB", "RESTful APIs", "Analytics", "Full-Stack"],
        githubLink: "https://github.com/hossain-taufiq/acumens",
        liveLink: "#",
        thumbnail: "/images/placeholder-project2.png",
      },
      {
        id: "P004",
        name: "AcuMens Media Inc – AI-Powered Web App (Project C)", // Unique Name
        summary:
          "Developed a full-stack React.js application integrated with MongoDB and RESTful APIs to automate and optimize digital content delivery and analytics.",
        impact:
          "Improved client engagement by 30% through automated reporting and real-time analytics dashboards.",
        technologies: ["React.js", "MongoDB", "RESTful APIs", "Analytics", "Full-Stack"],
        githubLink: "https://github.com/hossain-taufiq/acumens",
        liveLink: "#",
        thumbnail: "/images/placeholder-project2.png",
      },
    ],
  },
  {
    category: "Academic & Research Projects",
    items: [
      {
        id: "P005",
        name: "Epilepsy Detection using Machine Learning",
        summary:
          "Research Assistant at North South University focusing on early detection of epileptic seizures using EEG data and deep learning models (TensorFlow, PyTorch).",
        impact:
          "Working toward improving seizure prediction accuracy for clinical research and healthcare applications.",
        technologies: ["TensorFlow", "PyTorch", "Deep Learning", "EEG Data"],
        githubLink: "https://github.com/hossain-taufiq/epilepsy-detection",
        liveLink: "#",
        thumbnail: "/images/placeholder-project3.png",
      },
      {
        id: "P006",
        name: "AI-Powered Daily Routine & Task Manager (Project X)", // Unique Name
        summary:
          "Developed a personal productivity system using Retrieval-Augmented Generation (RAG) to generate personalized task recommendations and adaptive daily routines.",
        impact:
          "Enhanced user productivity and focus by applying context-aware AI scheduling techniques.",
        technologies: ["RAG", "Generative AI", "Python", "Adaptive Scheduling"],
        githubLink: "https://github.com/hossain-taufiq/ai-routine-manager",
        liveLink: "#",
        thumbnail: "/images/placeholder-project4.png",
      },
      {
        id: "P007",
        name: "AI-Powered Daily Routine & Task Manager (Project Y)", // Unique Name
        summary:
          "Developed a personal productivity system using Retrieval-Augmented Generation (RAG) to generate personalized task recommendations and adaptive daily routines.",
        impact:
          "Enhanced user productivity and focus by applying context-aware AI scheduling techniques.",
        technologies: ["RAG", "Generative AI", "Python", "Adaptive Scheduling"],
        githubLink: "https://github.com/hossain-taufiq/ai-routine-manager",
        liveLink: "#",
        thumbnail: "/images/placeholder-project4.png",
      },
    ],
  },
  {
    category: "Web & System Development Projects",
    items: [
      {
        id: "P008",
        name: "Private University Admission Helper – MERN Stack App",
        summary:
          "Built a MERN web application that helps students explore universities, compare programs, view admission deadlines, and estimate costs using an interactive dashboard.",
        impact:
          "Simplified university comparison for hundreds of students and improved application preparation efficiency.",
        technologies: ["MERN Stack", "React", "MongoDB", "Express", "Node.js"],
        githubLink: "https://github.com/hossain-taufiq/uni-admission-helper",
        liveLink: "#",
        thumbnail: "/images/placeholder-project5.png",
      },
      {
        id: "P009",
        name: "Bitcoin Transaction Simulation – Web App (Sim A)", // Unique Name
        summary:
          "Developed a blockchain-based BTC/USDT trading simulator using Vite.js, React.js, Django, and MongoDB, replicating real transaction flows for educational purposes.",
        impact:
          "Created an interactive learning environment for students to understand blockchain transactions and trading dynamics.",
        technologies: ["Vite.js", "React.js", "Django", "MongoDB", "Blockchain"],
        githubLink: "https://github.com/hossain-taufiq/bitcoin-simulator",
        liveLink: "#",
        thumbnail: "/images/placeholder-project6.png",
      },
      {
        id: "P010",
        name: "Bitcoin Transaction Simulation – Web App (Sim B)", // Unique Name
        summary:
          "Developed a blockchain-based BTC/USDT trading simulator using Vite.js, React.js, Django, and MongoDB, replicating real transaction flows for educational purposes.",
        impact:
          "Created an interactive learning environment for students to understand blockchain transactions and trading dynamics.",
        technologies: ["Vite.js", "React.js", "Django", "MongoDB", "Blockchain"],
        githubLink: "https://github.com/hossain-taufiq/bitcoin-simulator",
        liveLink: "#",
        thumbnail: "/images/placeholder-project6.png",
      },
    ],
  },
];


// --- ProjectCard Component (OUTSIDE ProjectsPage, and with correct random color logic) ---
function ProjectCard({ project }) {
  return (
    <article
      className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/5 bg-[#0A0A10] 
                 shadow-lg transition-all duration-300 ease-in-out
                 hover:scale-[1.02] hover:border-cyan-400/20 hover:shadow-cyan-400/10
                 group" // Added group for hover effects on children
    >
      {/* Top Section: Thumbnail and Links */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {project.thumbnail && (
          // In a real Next.js app, use the <Image> component for better performance
          <img
            src={project.thumbnail}
            alt={`${project.name} Thumbnail`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute top-4 right-4 flex gap-3 z-10">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors duration-200"
              aria-label="GitHub Repository"
            >
              <FaGithub size={20} />
            </a>
          )}
          {project.liveLink && project.liveLink !== '#' && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors duration-200"
              aria-label="Live Website"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Bottom Section: Details and Tags */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {project.name}
        </h3>
        <p className="text-base text-white/70 flex-grow">
          {project.summary}
        </p>

        {/* Technologies (Tags with random coloring) */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {project.technologies.map((tech, index) => {
              const { bg, text } = getRandomTagColor();
              return (
                <span
                  // Index is okay here since the list of technologies is static
                  key={tech + index} 
                  className={`rounded-full px-3 py-1 text-xs font-medium ${bg} ${text}`}
                >
                  #{tech.toLowerCase().replace(/[^a-z0-9]/g, "")}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}


// --- Main ProjectsPage Component (Fixed) ---
export default function ProjectsPage() {
  return (
    <div className="space-y-16 py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <section className="space-y-6 text-center"> {/* Removed text-center from section */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white">Projects</h1>
        <p className="max-w-3xl text-lg text-white/70 justify-center mx-auto"> {/* Removed justify-center mx-auto */}
          A selection of full-stack, AI, and research projects showcasing my work
          across machine learning, data analysis, and scalable web application
          development. Each project reflects a balance between innovation,
          technical precision, and practical impact.
        </p>
      </section>

      {/* Projects Grid (UNCOMMENTED AND FIXED) */}
      <div className="space-y-12">
        {projectSections.map((section) => (
          <section key={section.category} className="space-y-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                {section.category}
              </h2>
              <p className="text-md uppercase tracking-[0.3em] text-cyan-400/80">
                SELECTED WORK
              </p>
            </div>
            <hr className="border-white/50" /> {/* Added class for visibility */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer Note */}
      <section className="rounded-xl border border-white/10 bg-[#0F1016] p-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Want to learn more about a specific project?
        </h2>
        <p className="mt-3 text-lg text-white/70">
          Detailed case studies, architecture diagrams, and code samples are
          available upon request for collaboration or professional review.
        </p>
      </section>
    </div>
  );
}