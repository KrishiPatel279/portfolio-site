"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const jobs = [

{
year:"2025",
company:"Tech Company",
role:"Frontend Engineer"
},

{
year:"2024",
company:"Startup",
role:"React Developer"
},

{
year:"2023",
company:"Freelancer",
role:"Full Stack Developer"
}

]

export default function Experience(){

const ref=useRef(null)

useEffect(()=>{

gsap.from(".timeline-item",{

x:-120,
opacity:0,
duration:1,

stagger:.3,

scrollTrigger:{
trigger:ref.current,
start:"top 75%"
}

})

},[])

return(

<section
id="experience"
ref={ref}
className="py-40 bg-black"
>

<div className="container">

<h2 className="text-6xl font-bold mb-20">
Experience
</h2>

<div className="border-l border-white/20 ml-6">

{jobs.map(job=>(

<div
key={job.year}
className="timeline-item relative mb-20 pl-10"
>

<div
className="absolute w-5 h-5 rounded-full bg-white -left-[11px] top-2"
/>

<h3
className="text-3xl font-bold"
>
{job.role}
</h3>

<p
className="text-blue-400 mt-2"
>
{job.company}
</p>

<span
className="text-gray-500"
>
{job.year}
</span>

</div>

))}

</div>

</div>

</section>

)

}