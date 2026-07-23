"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {

useEffect(()=>{

gsap.from(".contact",{

opacity:0,
y:100,

duration:1,

scrollTrigger:{
trigger:".contact",
start:"top 80%"
}

})

},[])

return(

<section
id="contact"
className="contact py-40 bg-zinc-950"
>

<div className="container max-w-3xl">

<h2 className="text-6xl font-bold mb-16">
Let's Work Together
</h2>

<form className="space-y-8">

<input
placeholder="Name"
className="w-full p-5 rounded-xl bg-white/5 border border-white/10 outline-none"
/>

<input
placeholder="Email"
className="w-full p-5 rounded-xl bg-white/5 border border-white/10 outline-none"
/>

<textarea
rows={6}
placeholder="Tell me about your project..."
className="w-full p-5 rounded-xl bg-white/5 border border-white/10 outline-none"
/>

<button
className="px-8 py-4 rounded-full bg-white text-black hover:scale-105 duration-300"
>
Send Message
</button>

</form>

</div>

</section>

)

}