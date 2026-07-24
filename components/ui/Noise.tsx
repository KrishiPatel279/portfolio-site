"use client";

import { motion } from "framer-motion";

export default function Noise() {
  return (
    <>
      {/* Base Noise */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.025] mix-blend-soft-light"
        style={{
          backgroundImage: "url('/noise.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "220px",
        }}
        animate={{
          backgroundPosition: [
            "0px 0px",
            "120px -80px",
            "-100px 120px",
            "0px 0px",
          ],
        }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Subtle Light Refraction */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[2] opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(140,220,255,.08), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,.05), transparent 45%)",
        }}
        animate={{
          opacity: [0.03, 0.06, 0.03],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}