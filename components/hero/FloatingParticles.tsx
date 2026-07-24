"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FloatingParticles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 18 + 12,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.35 + 0.1,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            bottom: "-40px",
            opacity: particle.opacity,
            filter: "blur(1px)",
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: [0, 20, -20, 10, 0],
            opacity: [
              0,
              particle.opacity,
              particle.opacity,
              0,
            ],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}