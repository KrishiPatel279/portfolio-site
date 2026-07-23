"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 h-1 bg-white z-[9999] origin-left"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}