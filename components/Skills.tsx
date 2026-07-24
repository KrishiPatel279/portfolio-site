"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Magnetic from "@/components/ui/Magnetic";

const skillGroups = [
  {
    title: "Cybersecurity",
    icon: "🛡️",
    skills: [
      { name: "Penetration Testing", level: 90 },
      { name: "Network Security", level: 88 },
      { name: "Digital Forensics", level: 80 },
      { name: "Security Auditing", level: 85 },
    ],
  },
  {
    title: "Programming",
    icon: "💻",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 86 },
      { name: "TypeScript", level: 82 },
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js", level: 82 },
    ],
  },
  {
    title: "Cloud & AI",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Azure", level: 72 },
      { name: "OpenAI APIs", level: 85 },
      { name: "Machine Learning", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-10%] top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[200px]" />

        <div className="absolute right-[-10%] bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[200px]" />

      </div>

      <div className="container relative z-10">

        <SectionHeading
          badge="Skills"
          title="Technologies"
          accent="I Work With"
          description="A combination of cybersecurity expertise, software engineering, cloud technologies and artificial intelligence used to build secure, scalable and immersive digital experiences."
        />

        <div className="mt-24 grid gap-8 lg:grid-cols-2">

          {skillGroups.map((group, groupIndex) => (

            <Reveal
              key={group.title}
              delay={groupIndex * 0.1}
            >

              <Magnetic strength={0.12}>

                <GlassCard className="group relative overflow-hidden">

                  {/* Background Glow */}

                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-[80px] transition-all duration-700 group-hover:bg-cyan-400/20" />

                  {/* Prism */}

                  <div className="prism absolute inset-0 opacity-20" />

                  {/* Header */}

                  <div className="mb-10 flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-2xl backdrop-blur-xl">

                      {group.icon}

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">

                        {group.title}

                      </h3>

                      <p className="text-sm text-white/50">

                        Professional proficiency

                      </p>

                    </div>

                  </div>

                  {/* Skills */}

                  <div className="space-y-7">

                    {group.skills.map((skill) => (

                      <div key={skill.name}>

                        <div className="mb-3 flex items-center justify-between">

                          <span className="font-medium text-white/90">

                            {skill.name}

                          </span>

                          <span className="text-sm font-semibold text-cyan-300">

                            {skill.level}%

                          </span>

                        </div>

                        <div className="relative h-3 overflow-hidden rounded-full bg-white/10">

                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 shadow-[0_0_25px_rgba(56,189,248,.45)] transition-all duration-1000"
                            style={{
                              width: `${skill.level}%`,
                            }}
                          />

                          {/* Glass Reflection */}

                          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)]" />

                        </div>

                      </div>

                    ))}

                  </div>

                </GlassCard>

              </Magnetic>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}