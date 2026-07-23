"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const title = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate the title when the page loads
    gsap.from(title.current, {
      y: 120,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
    });

    // GTA-style parallax effect on the background image
    gsap.to(".hero-bg", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      className="hero relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/hero.jpg"
        alt="Hero Background"
        className="hero-bg absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1
          ref={title}
          className="text-7xl md:text-9xl font-bold"
        >
          Krishi Patel
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          Software Engineer
        </p>

        <a
          href="#about"
          className="inline-block mt-12 px-8 py-4 rounded-full bg-white text-black hover:scale-105 transition"
        >
          Explore
        </a>
      </div>
    </section>
  );
}