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
  color: string;
  blur: number;
}

export default function FloatingParticles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,

      size: 2 + (i % 5),

      left: ((i * 37) % 100),

      duration: 14 + (i % 8),

      delay: (i % 10) * 0.8,

      opacity: 0.08 + ((i % 6) * 0.05),

      blur: 1 + (i % 3),

      color: [
        "#ffffff",
        "#b8f3ff",
        "#72dcff",
        "#7cc8ff",
      ][i % 4],
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"

          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            bottom: "-8%",
            opacity: particle.opacity,
            background: particle.color,
            filter: `blur(${particle.blur}px)`,
            boxShadow: `0 0 ${particle.size * 10}px ${particle.color}`,
          }}

          animate={{
            y: ["0vh", "-120vh"],
            x: [
              0,
              12,
              -18,
              15,
              -8,
              0,
            ],
            scale: [
              1,
              1.25,
              0.9,
              1.15,
              1,
            ],
            opacity: [
              0,
              particle.opacity,
              particle.opacity,
              particle.opacity * 0.6,
              0,
            ],
          }}

          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}