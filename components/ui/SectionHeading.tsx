"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  accent?: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  accent,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={center ? "mx-auto max-w-4xl text-center" : ""}
    >
      {/* Badge */}
      {badge && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.15,
            duration: 0.5,
          }}
          className="glass mb-6 inline-flex items-center rounded-full border border-cyan-300/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200"
        >
          {badge}
        </motion.div>
      )}

      {/* Heading */}
      <h2 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
        <span className="bg-gradient-to-b from-white to-white/65 bg-clip-text text-transparent">
          {title}
        </span>

        {accent && (
          <>
            {" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-200 bg-clip-text text-transparent">
              {accent}
            </span>
          </>
        )}
      </h2>

      {/* Divider */}
      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: 120,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.35,
          duration: 0.8,
        }}
        className="mx-auto mt-8 h-px rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
      />

      {/* Description */}
      {description && (
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.45,
            duration: 0.7,
          }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/65 md:text-xl"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}