"use client";

import { motion } from "framer-motion";


export default function AIBackground(){

const nodes = Array.from({length:20});


return (

<div
className="
absolute
inset-0
overflow-hidden
"
>


{
nodes.map((_,index)=>(

<motion.div

key={index}

className="
absolute
h-2
w-2
rounded-full
bg-[#C9A227]
"
style={{

left:`${Math.random()*100}%`,
top:`${Math.random()*100}%`

}}

animate={{

y:[0,-30,0],
opacity:[0.3,1,0.3]

}}

transition={{

duration:
3 + Math.random()*5,

repeat:Infinity,

delay:
Math.random()*3

}}

/>

))

}


</div>

)

}