"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-3 text-white/70"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 2,
        duration: 1,
      }}
    >
      <span className="text-xs uppercase tracking-[0.4em]">
        Scroll
      </span>

      <div className="flex h-14 w-8 justify-center rounded-full border border-white/30">
        <motion.div
          className="mt-2 h-2 w-2 rounded-full bg-white"
          animate={{
            y: [0, 22, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </motion.div>
  );
}