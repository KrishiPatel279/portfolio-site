import SmoothScroll from "@/components/SmoothScroll";

import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Showcase from "@/components/Showcase";
import Loader from "@/components/Loader";

import Cursor from "@/components/ui/Cursor";
import Noise from "@/components/ui/Noise";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      {/* Global Components */}
      <Loader />
      <SmoothScroll />
      <Cursor />
      <Noise />
      <ScrollProgress />

      {/* Main Website */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Showcase />
        <Contact />
      </main>

      <Footer />
    </>
  );
}