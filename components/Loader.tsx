"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Loader(){

const [loading,setLoading]=useState(true)

useEffect(()=>{

gsap.to(".loader",{

opacity:0,

delay:2,

duration:1,

onComplete(){

setLoading(false)

}

})

},[])

if(!loading) return null

return(

<div className="loader fixed inset-0 z-[999] bg-black flex items-center justify-center">

<h1 className="text-6xl font-bold tracking-[10px]">
KRISHI
</h1>

</div>

)

}