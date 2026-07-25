"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../animations/fade";
import Counter from "../ui/Counter";


const stats = [
  {
    number: "2026",
    title: "HSIL Hackathon",
    description: "Second Place Winner",
  },

  {
    number: "1",
    title: "AI Healthcare Platform",
    description: "Founder of Jano Health",
  },

  {
    number: "10+",
    title: "Technologies",
    description: "Full-stack & AI Development",
  },

  {
    number: "2",
    title: "Academic Fields",
    description: "Healthcare + Finance",
  },
];


export default function About(){


return (

<section
id="about"
className="
relative
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
once:true,
amount:0.2
}}

>


<motion.p

variants={fadeIn}

className="
mb-4
text-sm
tracking-[0.4em]
uppercase
text-[#C9A227]
"

>

ABOUT ME

</motion.p>



<motion.h2

variants={fadeIn}

className="
max-w-3xl
text-4xl
font-bold
leading-tight
text-white
md:text-6xl
"

>

Building Technology
Where Healthcare Meets Intelligence

</motion.h2>



<div
className="
mt-12
grid
gap-12
lg:grid-cols-2
"
>



<motion.div

variants={fadeIn}

className="
space-y-6
text-lg
leading-relaxed
text-gray-400
"

>


<p>

I am Firaol Worku, a self-taught software developer,
healthcare innovator, and entrepreneur from Ethiopia.

</p>



<p>

My journey started in healthcare, studying Nursing and
understanding real-world challenges faced by patients
and healthcare workers.

</p>



<p>

Driven by curiosity and a desire to create solutions,
I began learning programming, artificial intelligence,
and software engineering.

</p>



<p>

Today, I combine clinical knowledge and technology to
build intelligent systems that solve meaningful problems,
including <span className="text-[#C9A227]">
Jano Health
</span>,
an AI-powered digital health platform.

</p>



</motion.div>




<motion.div

variants={fadeIn}

className="
grid
grid-cols-2
gap-6
"

>


{
stats.map((item,index)=>(


<div

key={index}

className="
rounded-2xl
border
border-white/10
bg-white/5
p-6
backdrop-blur-xl
transition
hover:-translate-y-2
hover:border-[#C9A227]/50
"


>


<h3

className="
text-4xl
font-bold
text-[#C9A227]
"

>

<Counter
value={
Number(item.number.replace(/\D/g,""))
}
suffix={
item.number.includes("+")
?
"+"
:
""
}
/>

</h3>



<h4
className="
mt-3
font-semibold
text-white
"

>

{item.title}

</h4>



<p
className="
mt-2
text-sm
text-gray-400
"

>

{item.description}

</p>



</div>


))

}


</motion.div>


</div>


</motion.div>


</div>


</section>

)

}