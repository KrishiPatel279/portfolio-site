import SmoothScroll from "@/components/SmoothScroll";

import Navbar from "@/components/Navbar";

import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Showcase from "@/components/Showcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import Noise from "@/components/ui/Noise";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      {/* Global Effects */}
      <SmoothScroll />
      <Noise />
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative overflow-hidden">
        <Hero />

        <section id="about" className="section">
          <About />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="showcase" className="section">
          <Showcase />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}