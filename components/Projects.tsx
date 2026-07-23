"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AI Chat Application",
    image: "/projects/chat.jpg",
    stack: "Next.js • OpenAI • Tailwind",
  },
  {
    title: "Finance Dashboard",
    image: "/projects/dashboard.jpg",
    stack: "React • Node • PostgreSQL",
  },
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.jpg",
    stack: "Next.js • GSAP",
  },
];

export default function Projects() {

  const section = useRef(null);

  useEffect(() => {

    gsap.from(".project",{

      y:150,
      opacity:0,
      stagger:.25,
      duration:1.1,

      scrollTrigger:{
        trigger:section.current,
        start:"top 70%"
      }

    })

  },[])

return(

<section
id="projects"
ref={section}
className="py-40"
>

<div className="container">

<h2 className="text-6xl font-bold mb-20">
Featured Projects
</h2>

<div className="grid lg:grid-cols-3 gap-10">

{projects.map(project=>(

<div
key={project.title}
className="project rounded-3xl overflow-hidden bg-zinc-900 group"
>

<div className="overflow-hidden">

<img
src={project.image}
className="w-full h-80 object-cover duration-700 group-hover:scale-110"
/>

</div>

<div className="p-8">

<h3 className="text-2xl font-bold">

{project.title}

</h3>

<p className="mt-3 text-gray-400">

{project.stack}

</p>

<button
className="mt-8 px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black duration-300"
>

View Project

</button>

</div>

</div>

))}

</div>

</div>

</section>

)

}