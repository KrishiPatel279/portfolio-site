"use client";

import { motion, Variants } from "framer-motion";
import { ElementType } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  as?: ElementType;
  stagger?: number;
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
  as = "h1",
  stagger = 0.045,
}: AnimatedTextProps) {
  const MotionComponent = motion(as);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.6,
      }}
      variants={container}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
            willChange: "transform, opacity, filter",
          }}
        >
          {char}
        </motion.span>
      ))}
    </MotionComponent>
  );
}