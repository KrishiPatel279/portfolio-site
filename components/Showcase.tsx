"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Immersive UI",
    description:
      "Inspired by Apple’s precision and Rockstar’s cinematic storytelling.",
    image: "/projects/portfolio.jpg",
  },
  {
    title: "Cyber Security",
    description:
      "Building secure systems that are fast, scalable and reliable.",
    image: "/projects/dashboard.jpg",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Creating intelligent software powered by modern AI technologies.",
    image: "/projects/chat.jpg",
  },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !sliderRef.current) return;

    const slider = sliderRef.current;

    const ctx = gsap.context(() => {
      gsap.to(slider, {
        x: () => -(slider.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${slider.scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative h-[300vh]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        <div
          ref={sliderRef}
          className="flex gap-10 px-20"
        >
          {slides.map((slide) => (
            <div
              key={slide.title}
              className="glass relative h-[75vh] w-[75vw] overflow-hidden rounded-[40px]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-0 left-0 p-10">

                <h2 className="text-5xl font-black">
                  {slide.title}
                </h2>

                <p className="mt-4 max-w-xl text-white/75 text-lg">
                  {slide.description}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}