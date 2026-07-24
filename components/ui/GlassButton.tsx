"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface GlassButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  disabled?: boolean;
}

const baseClasses =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-medium transition-all duration-300 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const variantClasses = {
  primary:
    "glass bg-white text-black shadow-xl hover:shadow-white/20",

  secondary:
    "glass border border-white/20 text-white hover:border-white/40",

  ghost:
    "text-white hover:bg-white/5",
};

function ButtonContent({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <>
      {/* Glass Shine */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/10 blur-xl transition-transform duration-700 group-hover:translate-x-[250%]" />
      </span>

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        <span>{children}</span>

        {icon && (
          <motion.span
            className="flex items-center"
            whileHover={{ x: 3 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {icon}
          </motion.span>
        )}
      </span>
    </>
  );
}

export default function GlassButton({
  children,
  href,
  onClick,
  icon,
  variant = "primary",
  className = "",
  disabled = false,
}: GlassButtonProps) {
  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    disabled && "pointer-events-none opacity-50",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{
          y: -3,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 22,
        }}
      >
        <ButtonContent icon={icon}>{children}</ButtonContent>
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 320,
        damping: 22,
      }}
    >
      <ButtonContent icon={icon}>{children}</ButtonContent>
    </motion.button>
  );
}