"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Cybersecurity",
    skills: [
      { name: "Penetration Testing", level: 90 },
      { name: "Network Security", level: 88 },
      { name: "Digital Forensics", level: 80 },
      { name: "Security Auditing", level: 85 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 86 },
      { name: "TypeScript", level: 82 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js", level: 82 },
    ],
  },
  {
    title: "Cloud & AI",
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
      className="relative py-32"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400 text-sm">
            Skills
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            Technologies
            <br />
            I Work With.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">

          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="glass rounded-3xl p-8"
            >
              <h3 className="mb-8 text-2xl font-bold">
                {group.title}
              </h3>

              <div className="space-y-6">

                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-white/50">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        transition={{
                          duration: 1.2,
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />

                    </div>

                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}