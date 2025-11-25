import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // For GitHub and Live Site icons

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
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Machine Learning", "Flutter"],
        githubLink: "https://github.com/hossaintaufiq/JustKaaj",
        liveLink: "https://www.justkaaj.com/",
        thumbnail: "/images/projects/Justkaaj.png",
      },
       {
        id: "P002",
        name: "AgroTech – Smart Agriculture Solutions", // Unique Name
        summary:
          "Developed a full-stack React.js application integrated with MongoDB and RESTful APIs to automate and optimize digital content delivery and analytics.",
        impact:
          "Improved client engagement by 30% through automated reporting and real-time analytics dashboards.",
        technologies: [
          "React.js",
          "MongoDB",
          "RESTful APIs",
          "Analytics",
          "Full-Stack",
        ],
        githubLink: "https://github.com/hossain-taufiq/acumens",
        liveLink: "#",
        thumbnail: "/images/projects/AgroTech.png",
      },
       {
        id: "P003",
        name: "CRMPrime(An Ai powered CRM Web and App)", // Unique Name
        summary:
          "Developed a full-stack React.js application integrated with MongoDB and RESTful APIs to automate and optimize digital content delivery and analytics.",
        impact:
          "Improved client engagement by 30% through automated reporting and real-time analytics dashboards.",
        technologies: [
          "React.js",
          "MongoDB",
          "RESTful APIs",
          "Analytics",
          "Full-Stack",
        ],
        githubLink: "https://github.com/hossain-taufiq/acumens",
        liveLink: "#",
        thumbnail: "/images/projects/CRMPrime.png",
      },
      {
        id: "P004",
        name: "AcuMens Media Inc – AI-Powered Web App (Project A)", // Unique Name
        summary:
          "Developed a full-stack React.js application integrated with MongoDB and RESTful APIs to automate and optimize digital content delivery and analytics.",
        impact:
          "Improved client engagement by 30% through automated reporting and real-time analytics dashboards.",
        technologies: [
          "React.js",
          "MongoDB",
          "RESTful APIs",
          "Analytics",
          "Full-Stack",
        ],
        githubLink: "https://github.com/hossaintaufiq/AcuMens-Media-Inc",
        liveLink:
          "https://66923e66b61ecdb8aaf3c3f9--eclectic-syrniki-4de217.netlify.app/",
        thumbnail: "/images/projects/AcuMedia.jpg",
      },
      {
        id: "P005",
        name: "Ai Doctor", // Unique Name
        summary:
          "Developed a full-stack React.js application integrated with MongoDB and RESTful APIs to automate and optimize digital content delivery and analytics.",
        impact:
          "Improved client engagement by 30% through automated reporting and real-time analytics dashboards.",
        technologies: [
          "React.js",
          "MongoDB",
          "RESTful APIs",
          "Analytics",
          "Full-Stack",
        ],
        githubLink: "https://github.com/hossaintaufiq/Ai_Doctor",
        liveLink: "#",
        thumbnail: "/images/projects/AiDoctor.png",
      },
     
       {
        id: "P006",
        name: "Summary Evaluator", // Unique Name
        summary:
          "Developed a full-stack React.js application integrated with MongoDB and RESTful APIs to automate and optimize digital content delivery and analytics.",
        impact:
          "Improved client engagement by 30% through automated reporting and real-time analytics dashboards.",
        technologies: [
          "React.js",
          "MongoDB",
          "RESTful APIs",
          "Analytics",
          "Full-Stack",
        ],
        githubLink: "https://github.com/hossain-taufiq/acumens",
        liveLink: "#",
        thumbnail: "/images/projects/aisummary.png",
      },
      {
        id: "P007",
        name: "Ai powered Interview System", // Unique Name
        summary:
          "Developed a full-stack React.js application integrated with MongoDB and RESTful APIs to automate and optimize digital content delivery and analytics.",
        impact:
          "Improved client engagement by 30% through automated reporting and real-time analytics dashboards.",
        technologies: [
          "React.js",
          "MongoDB",
          "RESTful APIs",
          "Analytics",
          "Full-Stack",
        ],
        githubLink: "https://github.com/hossain-taufiq/acumens",
        liveLink: "#",
        thumbnail: "/images/projects/aiInterview.png",
      },
    ],
  },
  {
    category: "Academic & Research Projects",
    items: [
      {
        id: "P008",
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
        id: "P009",
        name: "Multimodel RAG System", // Unique Name
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
        id: "P0010",
        name: "Material Detection Using Computer Vision", // Unique Name
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
        id: "P0011",
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
        id: "P0012",
        name: "NSUPS_BootCamp_Season_21", // Unique Name
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
        id: "P0013",
        name: "StudyBuddy", // Unique Name
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
        id: "P0014",
        name: "Discord Bot", // Unique Name
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
        id: "P0015",
        name: "Private University Admission Helper MERN Stack App",
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
        id: "P0016",
        name: "Bitcoin Transaction Simulation Web App (Sim A)", // Unique Name
        summary:
          "Developed a blockchain-based BTC/USDT trading simulator using Vite.js, React.js, Django, and MongoDB, replicating real transaction flows for educational purposes.",
        impact:
          "Created an interactive learning environment for students to understand blockchain transactions and trading dynamics.",
        technologies: [
          "Vite.js",
          "React.js",
          "Django",
          "MongoDB",
          "Blockchain",
        ],
        githubLink:
          "https://github.com/hossaintaufiq/Bitcoin_Transaction_Simulation",
        liveLink: "https://sensational-dodol-441ab3.netlify.app/",
        thumbnail: "/images/projects/BitcoinProject.png",
      },
      {
        id: "P017",
        name: "CGPA Calculator(All University)", // Unique Name
        summary:
          "Developed a CGPA calculator web application using React.js and Node.js, allowing students to calculate their CGPA based on customizable grading scales.",
        impact:
          "Simplified CGPA calculation for students across various universities, enhancing academic planning and performance tracking.",
        technologies: [
          "Vite.js",
          "React.js",
          "Django",
          "MongoDB",
          "Blockchain",
        ],
        githubLink: "https://github.com/hossain-taufiq/bitcoin-simulator",
        liveLink: "#",
        thumbnail: "/images/placeholder-project6.png",
      },
        {
        id: "P018",
        name: "Ramadan Calendar ", // Unique Name
        summary:
          "Developed a CGPA calculator web application using React.js and Node.js, allowing students to calculate their CGPA based on customizable grading scales.",
        impact:
          "Simplified CGPA calculation for students across various universities, enhancing academic planning and performance tracking.",
        technologies: [
          "Vite.js",
          "React.js",
          "Django",
          "MongoDB",
          "Blockchain",
        ],
        githubLink: "https://github.com/hossain-taufiq/bitcoin-simulator",
        liveLink: "#",
        thumbnail: "/images/placeholder-project6.png",
      },
       {
        id: "P019",
        name: "Stone_Paper_Scissors ", // Unique Name
        summary:
          "Developed a Stone Paper Scissors game using React.js, allowing users to play against the computer with a simple and interactive interface.",
        impact:
          "Simplified CGPA calculation for students across various universities, enhancing academic planning and performance tracking.",
        technologies: [
          "Vite.js",
          "React.js",
          "Django",
          "MongoDB",
          "Blockchain",
        ],
        githubLink: "https://github.com/hossain-taufiq/bitcoin-simulator",
        liveLink: "#",
        thumbnail: "/images/placeholder-project6.png",
      },
      {
        id: "P020",
        name: "Tic_Tac_Toe ", // Unique Name
        summary:
          "Developed a Tic Tac Toe game using React.js, allowing users to play against the computer with a simple and interactive interface.",
        impact:
          "Simplified CGPA calculation for students across various universities, enhancing academic planning and performance tracking.",
        technologies: [
          "Vite.js",
          "React.js",
          "Django",
          "MongoDB",
          "Blockchain",
        ],
        githubLink: "https://github.com/hossain-taufiq/bitcoin-simulator",
        liveLink: "#",
        thumbnail: "/images/placeholder-project6.png",
      },
      {
        id: "P021",
        name: "E-Commerce-System ", // Unique Name
        summary:
          "Developed a Tic Tac Toe game using React.js, allowing users to play against the computer with a simple and interactive interface.",
        impact:
          "Simplified CGPA calculation for students across various universities, enhancing academic planning and performance tracking.",
        technologies: [
          "java",
          
        ],
        githubLink: "https://github.com/hossain-taufiq/bitcoin-simulator",
        liveLink: "#",
        thumbnail: "/images/placeholder-project6.png",
      },
       {
        id: "P022",
        name: "Espresso_Emporium ", // Unique Name
        summary:
          "Developed a Tic Tac Toe game using React.js, allowing users to play against the computer with a simple and interactive interface.",
        impact:
          "Simplified CGPA calculation for students across various universities, enhancing academic planning and performance tracking.",
        technologies: [
          "java",
          
        ],
        githubLink: "https://github.com/hossain-taufiq/bitcoin-simulator",
        liveLink: "#",
        thumbnail: "/images/placeholder-project6.png",
      },
      {
        id: "P023",
        name: "Dragon-News", // Unique Name
        summary:
          "Developed a Tic Tac Toe game using React.js, allowing users to play against the computer with a simple and interactive interface.",
        impact:
          "Simplified CGPA calculation for students across various universities, enhancing academic planning and performance tracking.",
        technologies: [
          "java",
          
        ],
        githubLink: "https://github.com/hossain-taufiq/bitcoin-simulator",
        liveLink: "#",
        thumbnail: "/images/placeholder-project6.png",
      },
       {
        id: "P024",
        name: "Donation-Campain ", // Unique Name
        summary:
          "Developed a Tic Tac Toe game using React.js, allowing users to play against the computer with a simple and interactive interface.",
        impact:
          "Simplified CGPA calculation for students across various universities, enhancing academic planning and performance tracking.",
        technologies: [
          "java",
          
        ],
        githubLink: "https://github.com/hossain-taufiq/bitcoin-simulator",
        liveLink: "#",
        thumbnail: "/images/placeholder-project6.png",
      },
      {
        id: "P025",
        name: "Insta-Shohor", // Unique Name
        summary:
          "Developed a Tic Tac Toe game using React.js, allowing users to play against the computer with a simple and interactive interface.",
        impact:
          "Simplified CGPA calculation for students across various universities, enhancing academic planning and performance tracking.",
        technologies: [
          "java",
          
        ],
        githubLink: "https://github.com/hossain-taufiq/bitcoin-simulator",
        liveLink: "#",
        thumbnail: "/images/placeholder-project6.png",
      },
      {
        id: "P026",
        name: "Penguine Fashion", // Unique Name
        summary:
          "Developed a Tic Tac Toe game using React.js, allowing users to play against the computer with a simple and interactive interface.",
        impact:
          "Simplified CGPA calculation for students across various universities, enhancing academic planning and performance tracking.",
        technologies: [
          "java",
          
        ],
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
      className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 // Subtle border is crucial
                 bg-black/30 // KEY CHANGE: Solid black with 30% opacity
                 shadow-lg transition-all duration-300 ease-in-out
                 hover:scale-[1.02] hover:border-cyan-400/20 hover:shadow-cyan-400/10
                 group"
    >
      {/* Top Section: Thumbnail and Links */}
      <div
        className="relative h-48 w-full overflow-hidden rounded-t-xl
                   bg-gradient-to-br from-purple-800/60 via-blue-800/60 to-indigo-800/60 // GLOSSY THUMBNAIL GRADIENT (with more opacity)
                   border-b border-white/10" // Added a subtle bottom border for separation
      >
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={`${project.name} Thumbnail`}
            // 🛑 New: Add the 'fill' prop to fix the Next.js error
            fill
            // 🛑 Updated: Use object-contain (or object-cover)
            // 🛑 Removed: h-full w-full (handled by 'fill')
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        )}

        <div className="absolute top-4 right-4 flex gap-3 z-10">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/15 text-white/90 hover:bg-white/25 hover:text-white transition-colors duration-200" // Slightly more prominent hover
              aria-label="GitHub Repository"
            >
              <FaGithub size={20} />
            </a>
          )}
          {project.liveLink && project.liveLink !== "#" && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/15 text-white/90 hover:bg-white/25 hover:text-white transition-colors duration-200" // Slightly more prominent hover
              aria-label="Live Website"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Bottom Section: Details and Tags */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        <h3 className="text-2xl font-semibold tracking-tight text-white ">
          {project.name}
        </h3>
        <p className="text-base text-white/70 flex-grow">{project.summary}</p>

        {/* Technologies (Tags with random coloring) */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {project.technologies.map((tech, index) => {
              const { bg, text } = getRandomTagColor();
              return (
                <span
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
    <div className="space-y-16  md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <section className="space-y-6 text-center">
        {" "}
        {/* Removed text-center from section */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
          Projects
        </h1>
        <p className="max-w-3xl text-lg text-white/70 justify-center mx-auto">
          {" "}
          {/* Removed justify-center mx-auto */}A selection of full-stack, AI,
          and research projects showcasing my work across machine learning, data
          analysis, and scalable web application development. Each project
          reflects a balance between innovation, technical precision, and
          practical impact.
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
            <hr className="border-white/50" />{" "}
            {/* Added class for visibility */}
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
