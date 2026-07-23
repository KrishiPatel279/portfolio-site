"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = backgroundRef.current;

    if (!bg) return;

    // Initial cinematic zoom
    gsap.fromTo(
      bg,
      {
        scale: 1.15,
      },
      {
        scale: 1,
        duration: 2,
        ease: "power3.out",
      }
    );

    // GTA-style parallax
    gsap.to(bg, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="absolute inset-0 overflow-hidden"
    >
      {/* Hero Image */}
      <Image
        src="/hero.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_250px_rgba(0,0,0,0.9)]" />
    </div>
  );
}