"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import AnimatedText from "@/components/ui/AnimatedText";
import GlassButton from "@/components/ui/GlassButton";
import Magnetic from "@/components/ui/Magnetic";

import { ArrowRight } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function HeroContent() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 30,
        duration: 0.7,
      })
        .from(
          ".hero-heading",
          {
            opacity: 0,
            y: 60,
            duration: 1,
          },
          "-=0.2"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".hero-buttons",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-socials a",
          {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 0.5,
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative z-30 flex min-h-screen items-center"
    >
      <div className="container relative z-20">

        {/* Status Badge */}
        <div className="hero-badge mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm text-white/80">
            Available for Opportunities
          </span>
        </div>

        {/* Main Heading */}
        <AnimatedText
          text="Krishi Patel"
          className="hero-heading bg-gradient-to-b from-white to-white/60 bg-clip-text text-6xl font-black leading-none text-transparent md:text-8xl lg:text-[8rem]"
        />

        {/* Subtitle */}
        <h2 className="hero-heading mt-5 text-2xl font-medium tracking-wide text-white/75 md:text-4xl">
          Cybersecurity Analyst • Full-Stack Developer • AI Enthusiast
        </h2>

        {/* Description */}
        <p className="hero-description mt-8 max-w-2xl text-lg leading-9 text-white/65">
          I build secure, modern and immersive digital experiences inspired by
          Apple's precision and Rockstar Games' cinematic storytelling.
          Passionate about cybersecurity, software engineering, artificial
          intelligence and creating products people genuinely enjoy using.
        </p>

        {/* Buttons */}
        <div className="hero-buttons mt-12 flex flex-wrap gap-5">

          <Magnetic>
            <GlassButton
              href="#projects"
              variant="primary"
              icon={<ArrowRight size={18} />}
            >
              View Projects
            </GlassButton>
          </Magnetic>

          <Magnetic>
            <GlassButton
              href="#contact"
              variant="secondary"
            >
              Contact Me
            </GlassButton>
          </Magnetic>

        </div>

        {/* Social Links */}
        <div className="hero-socials mt-12 flex gap-5">

          <a
            href="https://github.com/KrishiPatel279"
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:pkrishi782@email.com"
            className="glass flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <MdEmail size={22} />
          </a>

        </div>

      </div>
    </div>
  );
}