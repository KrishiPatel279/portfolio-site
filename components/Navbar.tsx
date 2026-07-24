"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 40);

      if (current > lastScroll && current > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{
          y: hidden ? -120 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className="fixed top-0 left-0 z-50 w-full"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "mx-5 mt-4 rounded-2xl border border-white/10 bg-black/35 backdrop-blur-2xl shadow-2xl"
              : "border-b border-white/10 bg-transparent"
          }`}
        >
          <div className="container flex h-20 items-center justify-between">

            {/* Logo */}

            <a
              href="#home"
              className="text-xl font-bold tracking-wide transition hover:text-cyan-400"
            >
              Krishi Patel
            </a>

            {/* Desktop Navigation */}

            <ul className="hidden items-center gap-10 md:flex">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative text-white/80 transition hover:text-white"
                  >
                    {link.name}

                    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Resume Button */}

            <a
              href="#contact"
              className="glass hidden rounded-full px-6 py-3 md:block"
            >
              Let's Talk
            </a>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/95 backdrop-blur-3xl"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-semibold transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}