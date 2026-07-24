"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2,
  });

  return (
    <>
      {/* Main Progress Bar */}
      <motion.div
        className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left"
        style={{
          scaleX,
          background:
            "linear-gradient(90deg,#ffffff 0%,#8BE9FF 35%,#56CCF2 65%,#ffffff 100%)",
          boxShadow:
            "0 0 14px rgba(139,233,255,.45), 0 0 28px rgba(86,204,242,.25)",
        }}
      />

      {/* Soft Glow */}
      <motion.div
        className="fixed left-0 top-0 z-[9998] h-[6px] w-full origin-left blur-md opacity-50"
        style={{
          scaleX,
          background:
            "linear-gradient(90deg,#8BE9FF,#56CCF2,#8BE9FF)",
        }}
      />
    </>
  );
}