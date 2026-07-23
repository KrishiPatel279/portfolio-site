"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface GlassButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export default function GlassButton({
  children,
  href,
  onClick,
  icon,
  variant = "primary",
  className = "",
}: GlassButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-medium transition-all duration-300 select-none";

  const variants = {
    primary:
      "glass bg-white text-black hover:scale-105 hover:shadow-2xl",

    secondary:
      "glass text-white hover:bg-white/10 hover:scale-105",

    ghost:
      "text-white hover:bg-white/5",
  };

  const content = (
    <motion.span
      className={clsx(base, variants[variant], className)}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {icon}

      <span>{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="inline-block"
    >
      {content}
    </button>
  );
}