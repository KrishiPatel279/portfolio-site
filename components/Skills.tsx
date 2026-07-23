"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "GSAP",
  "Git",
  "Docker",
];

export default function Skills() {
  const section = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(".skill-card", {
      opacity: 0,
      scale: 0.7,
      y: 50,
      duration: 0.6,
      stagger: 0.08,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: section.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section
      id="skills"
      ref={section}
      className="py-40 bg-zinc-950"
    >
      <div className="container">

        <h2 className="text-6xl font-bold mb-16">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {skills.map((skill) => (

            <div
              key={skill}
              className="skill-card bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white hover:text-black duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}