// export const metadata = {
//   title: "About | Hossain Taufiq Ahmmed",
//   description:
//     "AI/ML Researcher, Full-Stack Developer, and Founder of Justkaaj — building intelligent, scalable solutions with Next.js, Django, and Machine Learning.",
// };

// const milestones = [

//   {
//     year: "2024",
//     title: "Founder & CEO, Justkaaj",
//     description:
//       "Founded and launched Justkaaj — a service marketplace platform connecting users with providers. Spearheaded full-stack development using Next.js, Node.js, PostgreSQL, and ML-powered recommendations.",
//   },
//   {
//     year: "2025",
//     title: "Research Assistant, North South University",
//     description:
//       "Conducting research on early detection of epileptic seizures using EEG data and deep learning under the supervision of Dr. MD. Sumon Hossain. Focused on model training, evaluation, and improving prediction accuracy.",
//   },
//   {
//     year: "2023",
//     title: "React Website Developer, Brooksource (Remote)",
//     description:
//       "Developed and deployed responsive web apps using React.js, TypeScript, and Redux. Improved performance by 20% through optimization techniques and collaborated in Agile teams for on-time project delivery.",
//   },
//   {
//     year: "2022",
//     title: "Website Developer, Americares (Remote)",
//     description:
//       "Built and maintained mobile-first, accessible applications using React.js and Tailwind CSS. Integrated APIs, optimized queries, and implemented secure authentication flows to enhance performance and security.",
//   },
// ];

// const principles = [
//   {
//     title: "AI with Purpose",
//     description:
//       "Apply machine learning to solve real-world challenges — from healthcare research to intelligent service systems — ensuring every model has measurable impact.",
//   },
//   {
//     title: "Full-Stack Excellence",
//     description:
//       "Design and implement robust, scalable systems from frontend to backend, balancing performance, security, and maintainability.",
//   },
//   {
//     title: "Continuous Growth",
//     description:
//       "Constantly learning and adapting — from new AI architectures to frontend frameworks — to stay at the frontier of technology and innovation.",
//   },
// ];

// export default function AboutPage() {
//   return (
//     <div className="space-y-16">
//       {/* Intro Section */}
//       <section className="space-y-6">
//         <h1 className="text-4xl font-semibold tracking-tight">
//           Hossain Taufiq Ahmmed
//         </h1>
//         <p className="max-w-3xl text-lg text-white/70">
//           I’m an AI/ML Researcher and Full-Stack Developer passionate about
//           transforming innovative ideas into intelligent, scalable solutions.
//           As the Founder & CEO of <span className="font-semibold">Justkaaj</span>, I combine
//           machine learning, data analysis, and full-stack development to create
//           impactful digital products. I’ve worked across React, Next.js, Django,
//           and AI frameworks like TensorFlow and PyTorch to build applications
//           that bridge human needs and technology.
//         </p>
//       </section>

//       {/* Core Principles */}
//       <section className="grid gap-8 lg:grid-cols-[1.1fr,1fr]">
//         <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
//           <h2 className="text-2xl font-semibold tracking-tight">
//             Core Principles
//           </h2>
//           <div className="mt-6 space-y-6">
//             {principles.map((principle) => (
//               <div key={principle.title}>
//                 <h3 className="text-lg font-semibold tracking-tight">
//                   {principle.title}
//                 </h3>
//                 <p className="mt-2 text-sm text-white/70">
//                   {principle.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </article>

//         <article className="rounded-3xl border border-white/10 bg-[#0F1016] p-8">
//           <h2 className="text-2xl font-semibold tracking-tight">
//             Beyond Development
//           </h2>
//           <p className="mt-4 text-sm text-white/70">
//             Outside of coding, I enjoy mentoring peers, exploring advancements
//             in AI ethics, and experimenting with automation tools. I’m also
//             passionate about traveling, fitness, and continuous self-improvement
//             to maintain creativity and focus. Sports like badminton and cricket
//             keep my teamwork and strategic thinking sharp.
//           </p>
//         </article>
//       </section>

//       {/* Milestones */}
//       <section className="space-y-8">
//         <h2 className="text-2xl font-semibold tracking-tight">Milestones</h2>
//         <div className="space-y-6">
//           {milestones.map((milestone) => (
//             <div
//               key={milestone.year}
//               className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between"
//             >
//               <div className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50">
//                 {milestone.year}
//               </div>
//               <div className="max-w-2xl space-y-1">
//                 <h3 className="text-lg font-semibold tracking-tight">
//                   {milestone.title}
//                 </h3>
//                 <p className="text-sm text-white/70">{milestone.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }

import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiDjango,
  SiNextdotjs,
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiFirebase,
  SiGraphql,
} from "react-icons/si";

export const metadata = {
  title: "About | Hossain Taufiq Ahmmed",
  description:
    "AI/ML Researcher, Full-Stack Developer, and Founder of Justkaaj — building intelligent, scalable solutions with Next.js, Django, and Machine Learning.",
};

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
  },
  {
    title: "Full-Stack Excellence",
    description:
      "Design and implement robust, scalable systems from frontend to backend, balancing performance, security, and maintainability.",
  },
  {
    title: "Continuous Growth",
    description:
      "Constantly learning and adapting — from new AI architectures to frontend frameworks — to stay at the frontier of technology and innovation.",
  },
];

const skills = [
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-400" /> },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Intro Section */}
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">
          Hossain Taufiq Ahmmed
        </h1>
        <p className="max-w-3xl text-lg text-white/70">
          I’m an AI/ML Researcher and Full-Stack Developer passionate about
          transforming innovative ideas into intelligent, scalable solutions. As
          the Founder & CEO of <span className="font-semibold">Justkaaj</span>,
          I combine machine learning, data analysis, and full-stack development
          to create impactful digital products. I’ve worked across React,
          Next.js, Django, and AI frameworks like TensorFlow and PyTorch to
          build applications that bridge human needs and technology.
        </p>
      </section>

      {/* Core Principles */}
      <section className="grid gap-8 lg:grid-cols-[1.1fr,1fr]">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Core Principles
          </h2>
          <div className="mt-6 space-y-6">
            {principles.map((principle) => (
              <div key={principle.title}>
                <h3 className="text-lg font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[#0F1016] p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Beyond Development
          </h2>
          <p className="mt-4 text-sm text-white/70">
            Outside of coding, I enjoy mentoring peers, exploring advancements
            in AI ethics, and experimenting with automation tools. I’m also
            passionate about traveling, fitness, and continuous self-improvement
            to maintain creativity and focus. Sports like badminton and cricket
            keep my teamwork and strategic thinking sharp.
          </p>
        </article>
      </section>

      {/* Milestones */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Milestones</h2>
        <div className="space-y-6">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:justify-between"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.4em] text-white/50">
                {milestone.year}
              </div>
              <div className="max-w-2xl space-y-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  {milestone.title}
                </h3>
                <p className="text-sm text-white/70">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      {/* Skills Section - Consistent 3-Column Grid */}
<section className="space-y-8">
  <h2 className="text-2xl font-semibold tracking-tight">
    Technical Skills
  </h2>
  {/* The main grid now handles 6 items consistently across 2 rows of 3 */}
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    {/* Programming (1/6) */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <h3 className="text-lg font-semibold mb-3">Programming</h3>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <FaPython className="text-yellow-400" /> <span>Python</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <FaJava className="text-orange-500" /> <span>Java</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <FaJs className="text-yellow-300" /> <span>JavaScript</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <SiTypescript className="text-blue-400" />{" "}
          <span>TypeScript</span>
        </div>
      </div>
    </div>

    {/* Frontend (2/6) */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <h3 className="text-lg font-semibold mb-3">Frontend</h3>
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
          <span>HTML</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <span>CSS</span>
        </div>
      </div>
    </div>

    {/* Backend (3/6) */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <h3 className="text-lg font-semibold mb-3">Backend</h3>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <FaNodeJs className="text-green-500" /> <span>Node.js</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <FaNodeJs className="text-green-500" /> <span>Express.js</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <SiDjango className="text-green-700" /> <span>Django</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <SiGraphql className="text-pink-500" /> <span>GraphQL</span>
        </div>
      </div>
    </div>

    {/* Database (4/6) */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <h3 className="text-lg font-semibold mb-3">Database</h3>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <SiPostgresql className="text-sky-500" />{" "}
          <span>PostgreSQL</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <FaDatabase className="text-orange-400" /> <span>MySQL</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <SiMongodb className="text-green-400" /> <span>MongoDB</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <SiFirebase className="text-yellow-500" /> <span>Firebase</span>
        </div>
      </div>
    </div>

    {/* Machine Learning (5/6) - Split from the original "ML & Tools" */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <h3 className="text-lg font-semibold mb-3">
        Machine Learning
      </h3>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <SiTensorflow className="text-orange-400" />{" "}
          <span>TensorFlow</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <SiPytorch className="text-red-500" /> <span>PyTorch</span>
        </div>
      </div>
    </div>

    {/* DevOps & Tools (6/6) - New category created from the original "ML & Tools" */}
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <h3 className="text-lg font-semibold mb-3">
        DevOps & Tools
      </h3>
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <FaGitAlt className="text-orange-400" />{" "}
          <span>Git & GitHub</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <FaDocker className="text-blue-500" /> <span>Docker</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
          <span>Jest / Mocha</span>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
