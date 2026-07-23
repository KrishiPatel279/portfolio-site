"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: Direction;
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 1,
  distance = 80,
  direction = "up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const axis = {
      x: 0,
      y: 0,
    };

    switch (direction) {
      case "up":
        axis.y = distance;
        break;

      case "down":
        axis.y = -distance;
        break;

      case "left":
        axis.x = distance;
        break;

      case "right":
        axis.x = -distance;
        break;
    }

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        x: axis.x,
        y: axis.y,
        filter: "blur(14px)",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 82%",
          once,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [delay, distance, direction, duration, once]);

  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
}