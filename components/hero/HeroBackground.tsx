"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    const ctx = gsap.context(() => {
      // Cinematic zoom on page load
      gsap.fromTo(
        ".hero-image",
        {
          scale: 1.18,
        },
        {
          scale: 1,
          duration: 2.5,
          ease: "power3.out",
        }
      );

      // Mouse Parallax
      const move = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 25;
        const y = (e.clientY / window.innerHeight - 0.5) * 25;

        gsap.to(".hero-image", {
          x,
          y,
          duration: 1.2,
          ease: "power3.out",
        });

        gsap.to(".hero-glow", {
          x: x * 1.5,
          y: y * 1.5,
          duration: 1.5,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", move);

      return () => {
        window.removeEventListener("mousemove", move);
      };
    }, bgRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={bgRef}
      className="absolute inset-0 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Hero Background"
        fill
        priority
        className="hero-image object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Top Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Radial Light */}
      <div className="hero-glow absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_250px_rgba(0,0,0,.95)]" />

      {/* Grid */}
      <div className="hero-grid absolute inset-0" />
    </div>
  );
}