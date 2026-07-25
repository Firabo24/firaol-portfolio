"use client";


import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "../../data/projects";

import {
fadeIn,
staggerContainer
}
from "../../animations/fade";



export default function Projects(){


return (

<section

id="projects"

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


<motion.div

variants={staggerContainer}

initial="hidden"

whileInView="visible"

viewport={{
once:true
}}

>


<motion.p

variants={fadeIn}

className="
text-sm
uppercase
tracking-[0.4em]
text-[#C9A227]
"

>

PROJECTS

</motion.p>



<motion.h2

variants={fadeIn}

className="
mt-4
text-4xl
font-bold
text-white
md:text-6xl
"

>

Things I Have Built

</motion.h2>




<div

className="
mt-16
space-y-12
"

>


{

projects.map((project,index)=>(


<motion.div

variants={fadeIn}

key={index}

className="
group
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
transition
hover:border-[#C9A227]/50
"

>


<div

className="
grid
lg:grid-cols-2
"

>


{/* Image */}

<div
className="
relative
min-h-[350px]
bg-black/30
"
>


<Image

src={project.image}

alt={project.title}

fill

className="
object-cover
transition
duration-700
group-hover:scale-110
"

/>


</div>



{/* Content */}

<div

className="
p-8
lg:p-12
"

>


<p

className="
text-[#C9A227]
"

>

{project.category}

</p>



<h3

className="
mt-4
text-4xl
font-bold
text-white
"

>

{project.title}

</h3>



<p

className="
mt-6
leading-relaxed
text-gray-400
"

>

{project.description}

</p>




<div

className="
mt-6
flex
flex-wrap
gap-3
"

>


{
project.technologies.map((tech)=>(


<span

key={tech}

className="
rounded-full
border
border-white/10
px-4
py-2
text-sm
text-gray-300
"

>

{tech}

</span>


))

}


</div>




<h4

className="
mt-8
font-semibold
text-white
"

>

Key Features

</h4>



<ul

className="
mt-4
space-y-2
text-gray-400
"

>

{

project.features.map((feature)=>(

<li key={feature}>

✓ {feature}

</li>

))

}

</ul>




<div

className="
mt-8
flex
gap-4
"

>


<a

href={project.github}

className="
flex
items-center
gap-2
rounded-full
border
border-white/20
px-5
py-3
hover:bg-white/10
"

>

<FaGithub size={20} />

GitHub

</a>



<a

href={project.demo}

className="
flex
items-center
gap-2
rounded-full
bg-[#C9A227]
px-5
py-3
text-black
"

>

<ExternalLink size={18}/>

Demo

</a>


</div>



</div>


</div>


</motion.div>


))


}


</div>



</motion.div>


</div>


</section>

)

}