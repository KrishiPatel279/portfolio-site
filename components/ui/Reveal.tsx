"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: Direction;
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  distance = 70,
  direction = "up",
  once = true,
}: RevealProps) {
  const offset = {
    x: 0,
    y: 0,
  };

  switch (direction) {
    case "up":
      offset.y = distance;
      break;

    case "down":
      offset.y = -distance;
      break;

    case "left":
      offset.x = distance;
      break;

    case "right":
      offset.x = -distance;
      break;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: 0.98,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </motion.div>
  );
}