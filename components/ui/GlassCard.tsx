"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
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
      className={clsx(
        "glass group relative overflow-hidden rounded-3xl border border-white/10",
        "bg-white/[0.04] backdrop-blur-2xl",
        "shadow-[0_20px_80px_rgba(0,0,0,0.35)]",
        className
      )}
      whileHover={
        hover
          ? {
              y: -10,
              scale: 1.02,
            }
          : undefined
      }
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
    >
      {/* Top Glass Reflection */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

      {/* Moving Shine */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div
          className="
            absolute
            -left-1/2
            top-0
            h-full
            w-1/2
            -skew-x-12
            bg-white/10
            blur-2xl
            transition-transform
            duration-1000
            group-hover:translate-x-[250%]
          "
        />
      </div>

      {/* Cyan Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-24
          left-1/2
          h-56
          w-56
          -translate-x-1/2
          rounded-full
          bg-cyan-400/10
          blur-3xl
          opacity-70
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Purple Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-40
          w-40
          rounded-full
          bg-violet-500/10
          blur-3xl
          opacity-50
        "
      />

      {/* Glass Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-soft-light bg-[url('/noise.svg')]" />

      {/* Prism Overlay */}
      <div className="prism pointer-events-none absolute inset-0 rounded-3xl opacity-40" />

      {/* Border Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5 group-hover:border-cyan-300/20 transition-colors duration-500" />

      {/* Content */}
      <div className="relative z-10 p-8">
        {children}
      </div>
    </motion.div>
  );
}