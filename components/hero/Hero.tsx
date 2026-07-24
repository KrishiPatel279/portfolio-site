"use client";

import HeroBackground from "./HeroBackground";
import FloatingParticles from "./FloatingParticles";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="hero relative isolate flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <HeroBackground />

      {/* Aurora Lighting */}
      <div className="aurora blue absolute -left-48 top-20" />
      <div className="aurora cyan absolute right-0 top-1/3" />
      <div className="aurora purple absolute left-1/2 bottom-0 -translate-x-1/2" />

      {/* Prism Refraction */}
      <div className="prism absolute inset-0" />

      {/* Floating Dust */}
      <FloatingParticles />

      {/* Main Content */}
      <div className="relative z-20 w-full">
        <HeroContent />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </section>
  );
}