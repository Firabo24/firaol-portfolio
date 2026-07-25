"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Server,
  Brain,
  Database,
  ShieldCheck,
  Network
} from "lucide-react";


const layers = [

{
title:"Applications",
items:[
"Patient Mobile App",
"Healthcare Worker Dashboard"
],
icon:Smartphone
},


{
title:"Platform Layer",
items:[
"API Gateway",
"Authentication",
"FHIR Services"
],
icon:Server
},


{
title:"Intelligence Layer",
items:[
"AI Decision Support",
"Clinical Models",
"AI Agents"
],
icon:Brain
},


{
title:"Data Layer",
items:[
"PostgreSQL",
"Offline SQLite",
"Event Storage"
],
icon:Database
},


{
title:"Integration Layer",
items:[
"Fayda ID",
"CBHI",
"SMS Gateway"
],
icon:Network
},


];


export default function Architecture(){


return (

<section
className="
py-32
bg-[#0B1120]
"
>


<div
className="
mx-auto
max-w-7xl
px-6
"
>


<p
className="
text-sm
uppercase
tracking-[0.4em]
text-[#C9A227]
"
>
SYSTEM ARCHITECTURE
</p>



<h2
className="
mt-5
text-5xl
font-bold
text-white
"
>

How Jano Health Works

</h2>



<div
className="
mt-16
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
"
>


{

layers.map((layer,index)=>{


const Icon=layer.icon;


return (

<motion.div

key={layer.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

viewport={{
once:true
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
transition
hover:-translate-y-3
hover:border-[#C9A227]/50
"

>


<Icon
className="
h-10
w-10
text-[#C9A227]
"
/>


<h3
className="
mt-6
text-2xl
font-bold
text-white
"
>

{layer.title}

</h3>



<ul
className="
mt-5
space-y-3
text-gray-400
"
>

{

layer.items.map(item=>(

<li key={item}>

→ {item}

</li>

))

}

</ul>



</motion.div>

)

})

}


</div>



</div>


</section>

)

}