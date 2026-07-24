"use client";

import {
  ArrowUp,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import GlassButton from "@/components/ui/GlassButton";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/KrishiPatel279",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/YOUR-LINKEDIN",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/YOUR-INSTAGRAM",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-24">

      {/* Background Lighting */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-10%] top-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[180px]" />

        <div className="absolute right-[-8%] bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[220px]" />

      </div>

      <div className="container relative z-10">

        <Reveal>

          <GlassCard className="rounded-[40px] p-12">

            <div className="grid gap-14 lg:grid-cols-2">

              {/* Left */}

              <div>

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                  Portfolio
                </p>

                <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-black text-transparent md:text-6xl">
                  Krishi Patel
                </h2>

                <p className="mt-8 max-w-xl text-lg leading-9 text-white/65">
                  Building secure, intelligent and immersive digital
                  experiences inspired by Apple's precision,
                  Rockstar Games' cinematic storytelling and modern
                  cybersecurity practices.
                </p>

                <div className="mt-10">

                  <GlassButton
                    href="mailto:pkrishi782@email.com"
                    icon={<Mail size={18} />}
                  >
                    Get In Touch
                  </GlassButton>

                </div>

              </div>

              {/* Right */}

              <div className="flex flex-col items-start justify-between lg:items-end">

                {/* Socials */}

                <div className="flex gap-5">

                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="glass flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:border-cyan-300/50"
                      >
                        <Icon size={22} />
                      </a>
                    );
                  })}

                </div>

                {/* Scroll to top */}

                <div className="mt-12 lg:mt-0">

                  <GlassButton
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    icon={<ArrowUp size={18} />}
                    variant="secondary"
                  >
                    Back to Top
                  </GlassButton>

                </div>

              </div>

            </div>

            {/* Bottom */}

            <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">

              <p>
                © {new Date().getFullYear()} Krishi Patel. All rights reserved.
              </p>

              <p>
                Designed & Developed with Next.js • TypeScript • Tailwind CSS • Framer Motion
              </p>

            </div>

          </GlassCard>

        </Reveal>

      </div>

    </footer>
  );
}