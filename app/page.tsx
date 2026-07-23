import SmoothScroll from "@/components/SmoothScroll";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Showcase from "@/components/Showcase";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <SmoothScroll />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <Hero />
      <Showcase />
      <Loader />
    </>
  );
}