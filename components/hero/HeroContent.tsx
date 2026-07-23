"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroContent() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
      })
        .from(
          ".hero-subtitle",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".hero-buttons",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="relative z-20 flex h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="mb-4 tracking-[0.4em] text-sm uppercase text-white/70">
        SOFTWARE ENGINEER
      </p>

      <h1 className="hero-title text-6xl font-black leading-none text-white md:text-8xl lg:text-[9rem]">
        KRISHI
      </h1>

      <h1 className="hero-title text-6xl font-black leading-none text-white md:text-8xl lg:text-[9rem]">
        PATEL
      </h1>

      <p className="hero-subtitle mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
        I design and build modern digital experiences with beautiful
        interfaces, cinematic animations and high-performance web
        applications.
      </p>

      <div className="hero-buttons mt-12 flex flex-col gap-5 sm:flex-row">
        <a
          href="#projects"
          className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-full border border-white/20 px-8 py-4 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}