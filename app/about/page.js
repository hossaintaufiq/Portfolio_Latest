


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
          transforming innovative ideas into intelligent, scalable solutions.
          As the Founder & CEO of <span className="font-semibold">Justkaaj</span>, I combine
          machine learning, data analysis, and full-stack development to create
          impactful digital products. I’ve worked across React, Next.js, Django,
          and AI frameworks like TensorFlow and PyTorch to build applications
          that bridge human needs and technology.
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

      {/* Milestones */}
{/* <section className="relative py-12">
  <h2 className="text-2xl font-semibold tracking-tight mb-12">Milestones</h2>

  {/* Vertical line in the center */}
  {/* <div className="absolute left-1/2 top-0 h-full w-1 bg-white/20 -translate-x-1/2"></div>

  <div className="space-y-12">
    {milestones.map((milestone, index) => {
      const isLeft = index % 2 === 0; // alternate left/right
      return (
        <div
          key={milestone.year}
          className={`relative flex items-center justify-${isLeft ? "start" : "end"} w-full`}
        >
          {/* Card */}
          {/* <div
            className={`w-80 bg-[#0F1016] rounded-3xl p-6 border border-white/10 text-white ${
              isLeft ? "mr-auto text-left" : "ml-auto text-right"
            }`}
          >
            <h3 className="text-lg font-semibold tracking-tight">{milestone.title}</h3>
            <p className="mt-2 text-sm text-white/70">{milestone.description}</p>
          </div>

          {/* Circle icon */}
          {/* <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-[#0F1016] border-2 border-white/30 rounded-full">
            {milestone.year === "2024" ? (
              <span className="text-white font-bold">🔥</span>
            ) : milestone.year === "2025" ? (
              <span className="text-white font-bold">🟩</span>
            ) : (
              <span className="text-white font-bold">{milestone.year}</span>
            )}
          </div>

          {/* Year label near the circle */}
          {/* <div className="absolute left-1/2 top-12 -translate-x-1/2 text-sm font-semibold text-white/50">
            {milestone.year}
          </div>
        </div>
      );
    })}
  </div>
</section>  */}
    </div> 
  );
}


