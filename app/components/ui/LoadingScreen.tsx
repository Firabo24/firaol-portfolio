"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function LoadingScreen(){

const [loading,setLoading]=useState(true);


useEffect(()=>{

const timer=setTimeout(()=>{

setLoading(false);

},1800);


return()=>clearTimeout(timer);


},[]);



if(!loading) return null;



return (

<motion.div

initial={{
opacity:1
}}

animate={{
opacity:0
}}

transition={{
duration:0.8,
delay:1
}}

className="
fixed
inset-0
z-[100]
flex
items-center
justify-center
bg-[#0B1120]
"

>


<div
className="
text-center
"
>


<motion.h1

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

className="
text-4xl
font-bold
text-white
"

>

FIRAOL SYSTEMS

</motion.h1>



<p
className="
mt-6
text-[#C9A227]
tracking-widest
uppercase
"

>

Initializing Intelligence...

</p>



<div
className="
mx-auto
mt-8
h-1
w-64
overflow-hidden
rounded-full
bg-white/10
"

>


<motion.div

initial={{
x:"-100%"
}}

animate={{
x:"100%"
}}

transition={{

duration:1.5,

repeat:Infinity

}}

className="
h-full
w-full
bg-[#C9A227]
"

/>


</div>



<p
className="
mt-6
text-sm
text-gray-500
"

>

Healthcare • AI • Software Engineering

</p>


</div>


</motion.div>


)

}