"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import AIBackground from "../ui/AIBackground";
import { FaGithub } from "react-icons/fa";



export default function Hero() {


return (

<section
className="
relative
flex
min-h-screen
items-center
overflow-hidden
bg-[#0B1120]
"
>


<AIBackground/>

<div
className="
absolute
inset-0
bg-gradient-to-br
from-blue-950
via-[#0B1120]
to-black
"
/>


{/* Floating AI particles */}

<div
className="
absolute
left-20
top-32
h-3
w-3
animate-pulse
rounded-full
bg-[#C9A227]
"
/>


<div
className="
absolute
right-32
top-48
h-2
w-2
animate-ping
rounded-full
bg-blue-400
"
/>


<div
className="
absolute
bottom-40
left-1/3
h-4
w-4
animate-pulse
rounded-full
bg-purple-400
"
/>



<div
className="
relative
z-10
mx-auto
grid
max-w-7xl
items-center
gap-12
px-6
lg:grid-cols-2
"
>


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

>


<p
className="
mb-6
text-sm
uppercase
tracking-[0.4em]
text-[#C9A227]
"
>
AI • SOFTWARE • HEALTH TECHNOLOGY
</p>



<h1
className="
max-w-4xl
text-5xl
font-bold
leading-tight
text-white
md:text-7xl
"
>

Building Intelligent Systems
<br/>

<span
className="
text-[#C9A227]
"
>
That Transform Healthcare
</span>


</h1>



<div
className="
mt-8
text-2xl
text-gray-300
"
>

I am a

<TypeAnimation

sequence={[

"Frontend Developer",
2000,

"AI Software Developer",
2000,

"Digital Health Innovator",
2000,

"Founder of Jano Health",
2000

]}

speed={50}

repeat={Infinity}

/>


</div>




<p
className="
mt-8
max-w-2xl
text-lg
leading-relaxed
text-gray-400
"
>

I combine healthcare knowledge,
artificial intelligence, and software engineering
to build technology solutions that solve real-world problems.

</p>



<div
className="
mt-10
flex
flex-wrap
gap-5
"
>


<a

href="#projects"

className="
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

Explore My Work

</a>



<a

href="/resume.pdf"

className="
flex
items-center
gap-2
rounded-full
border
border-white/20
px-8
py-4
transition
hover:bg-white/10
"

>

Download CV

</a>


</div>




<div
className="
mt-16
flex
items-center
gap-3
text-gray-400
"
>

<ArrowDown
className="
animate-bounce
"
/>

Scroll to discover


</div>



</motion.div>

<motion.div

initial={{
opacity:0,
scale:0.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

className="
relative
flex
justify-center
"

>


<div
className="
relative
h-[420px]
w-[320px]
overflow-hidden
rounded-3xl
border
border-white/20
bg-white/5
p-3
shadow-2xl
backdrop-blur-xl
"
>


<Image

src="/images/profile.png"

alt="Firaol Worku"

fill

className="
object-cover
rounded-3xl
"

/>


</div>


</motion.div>


</div>



</section>

);

}