"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  const scrollToNext = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <motion.button
      type="button"
      aria-label="Scroll to About section"
      onClick={scrollToNext}
      className="absolute bottom-10 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-3 text-white/70 transition hover:text-white focus:outline-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 2,
        duration: 0.9,
      }}
      whileHover={{
        scale: 1.05,
      }}
    >
      <span className="text-[11px] uppercase tracking-[0.45em]">
        Scroll
      </span>

      <div className="glass flex h-14 w-8 justify-center rounded-full border border-white/20">
        <motion.div
          className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,.8)]"
          animate={{
            y: [0, 22, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown
          size={18}
          strokeWidth={2.2}
        />
      </motion.div>
    </motion.button>
  );
}