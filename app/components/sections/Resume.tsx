"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Download
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";



import {
fadeIn,
staggerContainer
}
from "../../animations/fade";


export default function Resume(){


return (

<section
className="
py-32
bg-black/20
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
rounded-3xl
border
border-white/10
bg-white/5
p-10
text-center
backdrop-blur-xl
md:p-16
"

>


<motion.div
variants={fadeIn}
>

<FileText

className="
mx-auto
h-14
w-14
text-[#C9A227]
"

/>


</motion.div>




<motion.h2

variants={fadeIn}

className="
mt-8
text-4xl
font-bold
text-white
md:text-5xl
"

>

Want to know more?

</motion.h2>




<motion.p

variants={fadeIn}

className="
mx-auto
mt-5
max-w-2xl
text-gray-400
"

>

Download my resume and explore my experience
in software development, artificial intelligence,
healthcare innovation, and entrepreneurship.

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

href="/documents/Firaol_Worku_CV.pdf"

download

className="
flex
items-center
gap-3
rounded-full
bg-[#C9A227]
px-8
py-4
font-semibold
text-black
transition
hover:scale-105
"

>

<Download size={20}/>

Download CV

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
px-8
py-4
text-white
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
px-8
py-4
text-white
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