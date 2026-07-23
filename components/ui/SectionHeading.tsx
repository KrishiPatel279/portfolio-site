"use client";

import AnimatedText from "./AnimatedText";

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <div
      className={`mb-20 ${
        center ? "text-center" : "text-left"
      }`}
    >
      <AnimatedText
        text={title}
        className="text-5xl md:text-6xl font-black text-gradient"
      />

      {subtitle && (
        <p className="mt-6 max-w-2xl text-white/70 mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}