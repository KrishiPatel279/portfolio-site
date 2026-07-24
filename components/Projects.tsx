"use client";

import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import GlassButton from "@/components/ui/GlassButton";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A premium portfolio inspired by Apple's Liquid Glass aesthetic and Rockstar Games' cinematic storytelling, built with Next.js, TypeScript, GSAP and Framer Motion.",

    image: "/projects/portfolio.jpg",

    github: "https://github.com/KrishiPatel279/portfolio-site",

    live: "#",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },

  {
    title: "Cybersecurity Dashboard",

    description:
      "Interactive dashboard for monitoring threats, visualising security events and analysing network activity with a clean, responsive interface.",

    image: "/projects/dashboard.jpg",

    github: "#",

    live: "#",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
    ],
  },

  {
    title: "AI Chat Assistant",

    description:
      "An intelligent assistant capable of document analysis, workflow automation and contextual conversations powered by modern AI models.",

    image: "/projects/chat.jpg",

    github: "#",

    live: "#",

    tech: [
      "OpenAI",
      "Next.js",
      "TypeScript",
      "Python",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-10%] top-24 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[200px]" />

        <div className="absolute right-[-8%] bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[180px]" />

      </div>

      <div className="container relative z-10">

        <SectionHeading
          badge="Projects"
          title="Featured"
          accent="Work"
          description="A selection of projects showcasing cybersecurity, software engineering, artificial intelligence and immersive user experiences."
        />

        <div className="mt-24 space-y-20">

          {projects.map((project, index) => (

            <Reveal
              key={project.title}
              direction={index % 2 === 0 ? "left" : "right"}
            >

              <GlassCard className="overflow-hidden p-0">

                <div
                  className={`grid items-center lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}

                  <div className="group relative h-[420px] overflow-hidden">

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="prism absolute inset-0 opacity-25" />

                  </div>

                  {/* Content */}

                  <div className="relative p-10 lg:p-14">

                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                      Featured Project
                    </span>

                    <h3 className="mt-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 leading-8 text-white/70">
                      {project.description}
                    </p>

                    {/* Tech */}

                    <div className="mt-8 flex flex-wrap gap-3">

                      {project.tech.map((tech) => (

                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-xl transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                    {/* Buttons */}

                    <div className="mt-10 flex flex-wrap gap-4">

                      <GlassButton
                        href={project.github}
                        icon={<FaGithub size={18} />}
                        variant="secondary"
                      >
                        GitHub
                      </GlassButton>

                      <GlassButton
                        href={project.live}
                        icon={<FaExternalLinkAlt size={16} />}
                      >
                        Live Demo
                      </GlassButton>

                    </div>

                  </div>

                </div>

              </GlassCard>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}