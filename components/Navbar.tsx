"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import GlassButton from "@/components/ui/GlassButton";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    let lastScroll = 0;

    const sections = [
      "#home",
      "#about",
      "#skills",
      "#projects",
      "#experience",
      "#contact",
    ];

    const onScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 40);

      if (current > lastScroll && current > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = current;

      sections.forEach((id) => {
        const section = document.querySelector(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{
          y: hidden ? -140 : 0,
        }}
        transition={{
          duration: 0.45,
        }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-5"
      >
        <div
          className={`
          relative
          w-full
          max-w-7xl
          overflow-hidden
          rounded-2xl
          border
          transition-all
          duration-500
          ${
            scrolled
              ? "border-white/10 bg-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-3xl"
              : "border-transparent bg-transparent"
          }
        `}
        >
          {/* Prism */}

          <div className="prism absolute inset-0 opacity-20" />

          {/* Glow */}

          <div className="absolute inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

          <div className="container flex h-20 items-center justify-between">

            {/* Logo */}

            <a
              href="#home"
              className="group relative text-xl font-black tracking-wide"
            >
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent transition-all duration-300 group-hover:brightness-125">
                Krishi Patel
              </span>
            </a>

            {/* Desktop */}

            <nav className="hidden md:block">

              <ul className="flex items-center gap-8">

                {links.map((link) => {

                  const selected = active === link.href;

                  return (
                    <li key={link.href}>

                      <a
                        href={link.href}
                        className="relative py-2 text-sm font-medium text-white/70 transition hover:text-white"
                      >
                        {link.name}

                        {selected && (
                          <motion.span
                            layoutId="navbar-indicator"
                            className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-cyan-300"
                          />
                        )}

                      </a>

                    </li>
                  );
                })}

              </ul>

            </nav>

            {/* CTA */}

            <div className="hidden md:block">

              <GlassButton
                href="#contact"
                variant="secondary"
              >
                Let's Talk
              </GlassButton>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-xl p-2 transition hover:bg-white/10 md:hidden"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(30px)",
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/80"
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              className="glass w-[90%] max-w-sm rounded-[32px] p-10"
            >
              <nav className="flex flex-col gap-8">

                {links.map((link) => (

                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-center text-2xl font-semibold text-white/80 transition hover:text-cyan-300"
                  >
                    {link.name}
                  </a>

                ))}

              </nav>

            </motion.div>
          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}