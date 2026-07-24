"use client";

import Image from "next/image";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Magnetic from "@/components/ui/Magnetic";

const stats = [
  {
    value: "3+",
    label: "Years Learning",
  },
  {
    value: "15+",
    label: "Projects Built",
  },
  {
    value: "10+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Passion",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-8%] top-24 h-[500px] w-[500px] rounded-full bg-cyan-400/8 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[180px]" />

      </div>

      <div className="container relative z-10">

        <SectionHeading
          badge="About Me"
          title="Building Secure"
          accent="Experiences"
          description="Cybersecurity analyst, software developer and AI enthusiast passionate about creating secure, modern and immersive digital experiences inspired by Apple's precision and cinematic storytelling."
        />

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

          {/* Profile */}

          <Reveal direction="left">

            <Magnetic strength={0.18}>

              <GlassCard className="mx-auto max-w-md p-3">

                <div className="relative overflow-hidden rounded-[30px]">

                  <Image
                    src="/profile.png"
                    alt="Krishi Patel"
                    width={520}
                    height={700}
                    priority
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Prism */}

                  <div className="prism absolute inset-0 opacity-30" />

                  {/* Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                </div>

              </GlassCard>

            </Magnetic>

          </Reveal>

          {/* Content */}

          <Reveal direction="right">

            <div>

              <p className="text-lg leading-9 text-white/75">
                I'm a cybersecurity enthusiast and software developer focused on
                building secure, scalable and visually immersive digital
                experiences. My interests span cybersecurity, artificial
                intelligence, cloud technologies and modern full-stack
                development.
              </p>

              <p className="mt-8 text-lg leading-9 text-white/70">
                I enjoy solving real-world problems, exploring emerging
                technologies and crafting interfaces inspired by Apple's design
                philosophy and Rockstar Games' cinematic attention to detail.
                Every project I build aims to balance beautiful user experience,
                strong engineering principles and security-first thinking.
              </p>

              <div className="mt-16 grid gap-6 sm:grid-cols-2">

                {stats.map((stat, index) => (

                  <Reveal
                    key={stat.label}
                    delay={index * 0.1}
                  >

                    <GlassCard>

                      <h3 className="bg-gradient-to-r from-cyan-300 via-sky-400 to-white bg-clip-text text-5xl font-black text-transparent">

                        {stat.value}

                      </h3>

                      <p className="mt-3 text-white/60">

                        {stat.label}

                      </p>

                    </GlassCard>

                  </Reveal>

                ))}

              </div>

            </div>

          </Reveal>

        </div>

      </div>
    </section>
  );
}