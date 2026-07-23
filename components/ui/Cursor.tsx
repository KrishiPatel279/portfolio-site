"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    damping: 25,
    stiffness: 250,
  });

  const y = useSpring(mouseY, {
    damping: 25,
    stiffness: 250,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="fixed left-0 top-0 h-5 w-5 rounded-full bg-white mix-blend-difference pointer-events-none z-[99999]"
    />
  );
}