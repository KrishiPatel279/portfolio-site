"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";

const timeline = [
  {
    year: "2025",
    title: "Cybersecurity Analyst",
    company: "Freelance • Personal Projects",
    description:
      "Developed cybersecurity tools, security auditing workflows, AI-assisted automation, and secure web applications while expanding expertise in offensive and defensive security.",
  },
  {
    year: "2024",
    title: "Full-Stack Developer",
    company: "Portfolio & Independent Projects",
    description:
      "Designed and developed modern web applications using Next.js, React, TypeScript, Tailwind CSS, Framer Motion and GSAP with an emphasis on premium user experiences.",
  },
  {
    year: "2023",
    title: "Cybersecurity Student",
    company: "Academic Journey",
    description:
      "Focused on networking, Linux, penetration testing, cryptography, cloud security, ethical hacking and secure software engineering.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-8%] top-32 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[180px]" />

        <div className="absolute right-[-8%] bottom-10 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[200px]" />

      </div>

      <div className="container relative z-10">

        <SectionHeading
          badge="Experience"
          title="My"
          accent="Journey"
          description="Every project and learning experience has shaped my approach to cybersecurity, software engineering and creating immersive digital experiences."
        />

        <div className="relative mt-28">

          {/* Timeline */}

          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-300/70 via-white/20 to-transparent lg:left-1/2 lg:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <Reveal
              key={item.year}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.15}
            >
              <div
                className={`relative mb-20 flex ${
                  index % 2 === 0
                    ? "lg:justify-start"
                    : "lg:justify-end"
                }`}
              >
                {/* Timeline Node */}

                <div className="absolute left-6 top-10 lg:left-1/2 lg:-translate-x-1/2">

                  <div className="relative flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-300 shadow-[0_0_30px_rgba(103,232,249,.8)]">

                    <div className="absolute h-10 w-10 rounded-full bg-cyan-300/20 blur-xl" />

                  </div>

                </div>

                {/* Card */}

                <GlassCard className="ml-16 max-w-xl lg:ml-0 lg:w-[46%]">

                  {/* Glass Highlight */}

                  <div className="prism absolute inset-0 opacity-20" />

                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {item.year}
                  </span>

                  <h3 className="mt-4 text-3xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-white/60">
                    {item.company}
                  </p>

                  <p className="mt-6 leading-8 text-white/70">
                    {item.description}
                  </p>

                </GlassCard>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}