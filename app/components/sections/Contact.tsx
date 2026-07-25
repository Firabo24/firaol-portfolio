"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  fadeIn,
  staggerContainer
} from "../../animations/fade";


export default function Contact(){

return (

<section
id="contact"
className="
py-32
bg-[#0B1120]
"
>


<div
className="
mx-auto
max-w-5xl
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

className="
text-center
"

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

CONTACT

</motion.p>



<motion.h2

variants={fadeIn}

className="
mt-5
text-4xl
font-bold
text-white
md:text-6xl
"

>

Let's Build Something
Impactful Together

</motion.h2>



<motion.p

variants={fadeIn}

className="
mx-auto
mt-6
max-w-2xl
text-gray-400
"

>

I am always interested in opportunities,
collaborations, and projects involving
software engineering, artificial intelligence,
and digital health innovation.

</motion.p>




<motion.div

variants={fadeIn}

className="
mt-10
flex
flex-wrap
justify-center
gap-5
"

>


<a

href="mailto:firaol@example.com"

className="
flex
items-center
gap-3
rounded-full
bg-[#C9A227]
px-7
py-4
font-semibold
text-black
transition
hover:scale-105
"

>

<Mail size={20}/>

Email Me

</a>



<a

href="#"

className="
flex
items-center
gap-3
rounded-full
border
border-white/20
px-7
py-4
text-white
transition
hover:bg-white/10
"

>

<FaGithub size={20} />

GitHub

</a>



<a

href="#"

className="
flex
items-center
gap-3
rounded-full
border
border-white/20
px-7
py-4
text-white
transition
hover:bg-white/10
"

>

<FaLinkedin size={20} />

LinkedIn

</a>


</motion.div>


</motion.div>


</div>


</section>

)

}