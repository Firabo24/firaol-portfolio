"use client";


import { motion } from "framer-motion";
import {
Brain,
Database,
WifiOff,
Wallet
} from "lucide-react";


import {
fadeIn,
staggerContainer
}
from "../../animations/fade";


const icons = [
WifiOff,
Brain,
Database,
Wallet
];


import { janoFeatures } from "../../data/jano";



export default function JanoHealth(){


return (

<section
className="
relative
overflow-hidden
py-32
bg-black
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
uppercase
tracking-[0.4em]
text-[#C9A227]
text-sm
"

>

FEATURED INNOVATION

</motion.p>




<motion.h2

variants={fadeIn}

className="
mt-5
text-5xl
font-bold
text-white
md:text-7xl
"

>

Jano Health

</motion.h2>



<motion.p

variants={fadeIn}

className="
mt-6
max-w-3xl
text-xl
text-gray-400
"

>

An AI-powered digital healthcare ecosystem
designed to connect patients, healthcare workers,
and intelligent systems.

</motion.p>




<div

className="
mt-16
grid
gap-12
lg:grid-cols-2
"

>


{/* Product Mockup */}


<motion.div

variants={fadeIn}

className="
relative
flex
items-center
justify-center
"

>


<div

className="
relative
h-[450px]
w-[280px]
rounded-[40px]
border
border-white/20
bg-white/5
p-4
shadow-2xl
backdrop-blur-xl
"

>


<div

className="
h-full
rounded-[30px]
bg-gradient-to-b
from-blue-950
to-black
p-6
"

>


<p
className="
text-sm
text-gray-400
"

>

Jano Health AI

</p>


<h3
className="
mt-8
text-2xl
font-bold
text-white
"

>

Patient Dashboard

</h3>


<div

className="
mt-8
space-y-4
"

>


<div className="
rounded-xl
bg-white/10
p-4
"

>

AI Assistant

</div>


<div className="
rounded-xl
bg-white/10
p-4
"

>

Medical Records

</div>


<div className="
rounded-xl
bg-white/10
p-4
"

>

Health Wallet

</div>


</div>


</div>


</div>


</motion.div>





{/* Features */}


<motion.div

variants={fadeIn}

className="
space-y-6
"

>


{

janoFeatures.map((feature,index)=>{


const Icon=icons[index];


return (

<div

key={feature.title}

className="
rounded-2xl
border
border-white/10
bg-white/5
p-6
transition
hover:border-[#C9A227]/50
"

>


<div
className="
flex
gap-5
"

>


<Icon

className="
h-8
w-8
text-[#C9A227]
"

/>


<div>

<h3
className="
text-xl
font-semibold
text-white
"

>

{feature.title}

</h3>


<p

className="
mt-2
text-gray-400
"

>

{feature.description}

</p>


</div>


</div>


</div>


)


})


}


</motion.div>


</div>


</motion.div>


</div>


</section>

)

}