"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  const imageRef = useRef<HTMLDivElement>(null);

  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Cinematic Intro
      gsap.fromTo(
        imageRef.current,
        {
          scale: 1.18,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2.8,
          ease: "power3.out",
        }
      );

      // High-performance mouse parallax
      const imageX = gsap.quickTo(imageRef.current, "x", {
        duration: 1.2,
        ease: "power3.out",
      });

      const imageY = gsap.quickTo(imageRef.current, "y", {
        duration: 1.2,
        ease: "power3.out",
      });

      const glowX = gsap.quickTo(glowRef.current, "x", {
        duration: 1.5,
        ease: "power3.out",
      });

      const glowY = gsap.quickTo(glowRef.current, "y", {
        duration: 1.5,
        ease: "power3.out",
      });

      const handleMove = (e: MouseEvent) => {
        const x =
          (e.clientX / window.innerWidth - 0.5) * 24;

        const y =
          (e.clientY / window.innerHeight - 0.5) * 24;

        imageX(x);

        imageY(y);

        glowX(x * 1.6);

        glowY(y * 1.6);
      };

      window.addEventListener(
        "mousemove",
        handleMove
      );

      return () =>
        window.removeEventListener(
          "mousemove",
          handleMove
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Background Image */}

      <div
        ref={imageRef}
        className="absolute inset-0"
      >
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark Base */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Top Gradient */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />

      {/* Bottom Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Cyan Glow */}

      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[180px]"
      />

      {/* Secondary Blue Glow */}

      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[180px]" />

      {/* Purple Glow */}

      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[180px]" />

      {/* Animated Prism */}

      <div className="prism absolute inset-0" />

      {/* Glass Refraction */}

      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-cyan-300/[0.04]" />

      {/* Noise */}

      <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light bg-[url('/noise.svg')]" />

      {/* Vignette */}

      <div className="absolute inset-0 shadow-[inset_0_0_280px_rgba(0,0,0,.95)]" />

      {/* Hero Grid */}

      <div className="hero-grid absolute inset-0" />
    </div>
  );
}