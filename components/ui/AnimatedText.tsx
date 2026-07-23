"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
}: AnimatedTextProps) {
  return (
    <motion.h1
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            },
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}