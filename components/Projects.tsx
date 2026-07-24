"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A premium portfolio inspired by Apple's liquid glass design and GTA VI cinematic animations, built using Next.js, Tailwind CSS, GSAP, and Framer Motion.",
    image: "/projects/portfolio.jpg",
    github: "https://github.com/KrishiPatel279/portfolio-site",
    live: "#",
    tech: ["Next.js", "Tailwind", "GSAP", "Framer Motion"],
  },
  {
    title: "Cybersecurity Dashboard",
    description:
      "Interactive dashboard for monitoring security events, visualizing alerts, and analyzing network activity.",
    image: "/projects/dashboard.jpg",
    github: "#",
    live: "#",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "AI Chat Assistant",
    description:
      "AI-powered chatbot capable of document analysis, intelligent responses, and workflow automation.",
    image: "/projects/chat.jpg",
    github: "#",
    live: "#",
    tech: ["OpenAI", "Next.js", "TypeScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            Featured Work
          </h2>
        </motion.div>

        <div className="space-y-24">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                duration: 0.8,
                delay: index * 0.15,
              }}
              className="glass overflow-hidden rounded-[40px]"
            >
              <div className="grid lg:grid-cols-2">

                <div className="relative h-[420px] overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 hover:scale-110"
                  />

                </div>

                <div className="flex flex-col justify-center p-10">

                  <h3 className="text-4xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-6 leading-8 text-white/70">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  <div className="mt-10 flex gap-5">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="glass flex items-center gap-3 rounded-full px-6 py-3"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="glass flex items-center gap-3 rounded-full px-6 py-3"
                    >
                      <FaExternalLinkAlt size={18} />
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}