"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 220,
    damping: 18,
    mass: 0.3,
  });

  const y = useSpring(mouseY, {
    stiffness: 220,
    damping: 18,
    mass: 0.3,
  });

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const offsetX =
      e.clientX - rect.left - rect.width / 2;

    const offsetY =
      e.clientY - rect.top - rect.height / 2;

    mouseX.set(offsetX * strength);

    mouseY.set(offsetY * strength);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x,
        y,
        display: "inline-flex",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}
