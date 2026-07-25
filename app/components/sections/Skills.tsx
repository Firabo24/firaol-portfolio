"use client";


import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import {
 fadeIn,
 staggerContainer
} from "../../animations/fade";



export default function Skills(){


return (

<section
id="skills"
className="
py-32
bg-black/20
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

TECHNICAL SKILLS

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

Technologies I Build With

</motion.h2>




<div
className="
mt-16
grid
gap-8
md:grid-cols-2
"
>


{
skills.map((category,index)=>{


const Icon = category.icon;


return (

<motion.div

variants={fadeIn}

key={index}

className="
group
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
transition-all
duration-300
hover:-translate-y-3
hover:border-[#C9A227]/40
"


>


<div
className="
flex
items-center
gap-4
"
>


<div
className="
rounded-xl
bg-[#C9A227]/10
p-3
"
>

<Icon
className="
h-8
w-8
text-[#C9A227]
"
/>

</div>


<h3
className="
text-2xl
font-semibold
text-white
"
>

{category.title}

</h3>


</div>




<div
className="
mt-8
flex
flex-wrap
gap-3
"
>


{
category.skills.map((skill)=>(


<span

key={skill}

className="
rounded-full
border
border-white/10
bg-black/20
px-4
py-2
text-sm
text-gray-300
transition
hover:bg-[#C9A227]
hover:text-black
"

>

{skill}

</span>


))

}


</div>



</motion.div>

)

})

}


</div>


</motion.div>


</div>


</section>

)

}