"use client";

import HeroBackground from "./HeroBackground";
import FloatingParticles from "./FloatingParticles";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <HeroBackground />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Hero Content */}
      <HeroContent />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}