"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";


export default function Navbar(){

return (

<motion.nav

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

className="
fixed
top-0
z-50
w-full
border-b
border-white/10
bg-black/20
backdrop-blur-xl
"

>


<div
className="
mx-auto
flex
max-w-7xl
items-center
justify-between
px-6
py-5
"
>


<h1
className="
text-xl
font-bold
tracking-wider
text-white
"
>
FIRAOL
</h1>


<div
className="
hidden
gap-8
md:flex
"
>



<a href="#about">
About
</a>

<a href="#skills">
Skills
</a>

<a href="#projects">
Projects
</a>

<a href="#contact">
Contact
</a>

<a

href="/documents/Firaol_Worku_CV.pdf"

download

className="
rounded-full
bg-[#C9A227]
px-5
py-2
text-sm
font-semibold
text-black
"

>

CV

</a>

</div>


<button
className="
md:hidden
text-white
"
>

<Menu/>

</button>


</div>

</motion.nav>

)

}