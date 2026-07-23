"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.02,
            }
          : {}
      }
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={clsx(
        "glass relative overflow-hidden p-8",
        className
      )}
    >
      {/* Top Highlight */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Soft Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      {children}
    </motion.div>
  );
}