"use client";

export default function Noise() {
  return (
    <div
      className="pointer-events-none fixed inset-0 opacity-[0.03] z-[999]"
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  );
}