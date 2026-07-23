"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {

const ref=useRef(null)

useEffect(()=>{

const tl=gsap.timeline({

scrollTrigger:{

trigger:ref.current,

start:"top top",

end:"+=2500",

scrub:1,

pin:true

}

})

tl

.from(".card1",{

x:-400,
opacity:0

})

.from(".card2",{

x:400,
opacity:0

})

.from(".card3",{

y:300,
opacity:0

})

},[])

return(

<section
ref={ref}
className="h-screen flex justify-center items-center bg-black overflow-hidden"
>

<div className="container grid lg:grid-cols-3 gap-10">

<div className="card1 bg-zinc-900 rounded-3xl p-12">

<h2 className="text-3xl font-bold">
Modern UI
</h2>

</div>

<div className="card2 bg-zinc-900 rounded-3xl p-12">

<h2 className="text-3xl font-bold">
Cinematic Motion
</h2>

</div>

<div className="card3 bg-zinc-900 rounded-3xl p-12">

<h2 className="text-3xl font-bold">
Performance
</h2>

</div>

</div>

</section>

)

}