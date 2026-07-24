"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionHeading from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    number: "01",
    title: "Immersive UI",
    description:
      "Elegant interfaces inspired by Apple's precision and Rockstar Games' cinematic storytelling.",
    image: "/projects/portfolio.jpg",
  },
  {
    number: "02",
    title: "Cyber Security",
    description:
      "Designing secure systems with performance, resilience and user trust at the core.",
    image: "/projects/dashboard.jpg",
  },
  {
    number: "03",
    title: "Artificial Intelligence",
    description:
      "Building intelligent software powered by modern AI models and automation.",
    image: "/projects/chat.jpg",
  },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
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
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
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
      className="relative h-[420vh] overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-[-15%] top-24 h-[650px] w-[650px] rounded-full bg-cyan-400/10 blur-[220px]" />

        <div className="absolute right-[-10%] bottom-0 h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-[220px]" />

      </div>

      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">

        <div className="container pt-24">

          <SectionHeading
            badge="Showcase"
            title="Featured"
            accent="Experience"
            description="A cinematic glimpse into the technologies and disciplines shaping my work."
          />

        </div>

        <div
          ref={sliderRef}
          className="flex h-full items-center gap-14 px-[10vw]"
        >
          {slides.map((slide) => (
            <div
              key={slide.title}
              className="group relative h-[72vh] w-[82vw] shrink-0 overflow-hidden rounded-[42px] border border-white/10 bg-white/5 backdrop-blur-3xl"
            >
              {/* Image */}

              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />

              {/* Prism */}

              <div className="prism absolute inset-0 opacity-30" />

              {/* Glass reflection */}

              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,.12)_20%,transparent_40%)]" />

              {/* Floating info */}

              <div className="absolute bottom-10 left-10 max-w-xl rounded-[28px] border border-white/10 bg-white/10 p-8 backdrop-blur-3xl">

                <span className="text-sm tracking-[0.4em] text-cyan-300">
                  {slide.number}
                </span>

                <h2 className="mt-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-6xl font-black text-transparent">
                  {slide.title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/75">
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