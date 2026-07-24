"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32"
    >
      <div className="container">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="mb-3 text-cyan-400 uppercase tracking-[0.35em] text-sm">
            About Me
          </p>

          <h2 className="text-5xl font-black md:text-7xl">
            Building Secure &
            <br />
            Beautiful Experiences.
          </h2>
        </motion.div>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="glass relative overflow-hidden rounded-[40px]">

              <Image
                src="/profile.png"
                alt="Profile"
                width={500}
                height={650}
                className="object-cover"
              />

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-9 text-white/70">
              I'm a cybersecurity enthusiast and software developer passionate
              about creating secure, scalable, and visually immersive digital
              experiences. My interests span cybersecurity, AI, cloud
              technologies, and full-stack web development.
            </p>

            <p className="mt-8 text-lg leading-9 text-white/70">
              I enjoy solving real-world problems, learning emerging
              technologies, and designing interfaces inspired by Apple's
              minimalism and Rockstar Games' cinematic storytelling.
            </p>

            <div className="mt-16 grid grid-cols-2 gap-6">

              <div className="glass rounded-3xl p-8">
                <h3 className="text-5xl font-black text-cyan-400">3+</h3>
                <p className="mt-3 text-white/60">
                  Years Learning
                </p>
              </div>

              <div className="glass rounded-3xl p-8">
                <h3 className="text-5xl font-black text-cyan-400">15+</h3>
                <p className="mt-3 text-white/60">
                  Projects Built
                </p>
              </div>

              <div className="glass rounded-3xl p-8">
                <h3 className="text-5xl font-black text-cyan-400">10+</h3>
                <p className="mt-3 text-white/60">
                  Technologies
                </p>
              </div>

              <div className="glass rounded-3xl p-8">
                <h3 className="text-5xl font-black text-cyan-400">100%</h3>
                <p className="mt-3 text-white/60">
                  Passion
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}