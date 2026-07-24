"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "Cybersecurity Analyst",
    company: "Freelance / Personal Projects",
    description:
      "Developed cybersecurity tools, security audits, and AI-assisted workflows while building immersive web applications.",
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    company: "Personal Portfolio",
    description:
      "Built modern web applications using React, Next.js, Tailwind CSS, GSAP, and Framer Motion with a strong focus on UI/UX.",
  },
  {
    year: "2023",
    title: "Cybersecurity Student",
    company: "Academic Journey",
    description:
      "Studied penetration testing, networking, cryptography, Linux, ethical hacking, and cloud security.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-24"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm mb-4">
            Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            My Journey
          </h2>
        </motion.div>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-4 top-0 h-full w-[2px] bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((item, index) => (

            <motion.div
              key={item.year}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: index * .15,
              }}
              className={`mb-20 flex w-full ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              <div className="glass relative ml-12 max-w-xl rounded-[32px] p-8 md:ml-0">

                {/* Timeline Dot */}

                <div className="absolute -left-[42px] top-10 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,.8)] md:left-auto md:right-[-50px]" />

                <span className="text-cyan-400 font-semibold">
                  {item.year}
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-white/60">
                  {item.company}
                </p>

                <p className="mt-6 leading-8 text-white/70">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}