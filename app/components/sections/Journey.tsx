"use client";


import { motion } from "framer-motion";
import { journey } from "../../data/journey";

import {
fadeIn,
staggerContainer
}
from "../../animations/fade";



export default function Journey(){


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

>


<motion.p

variants={fadeIn}

className="
text-sm
tracking-[0.4em]
uppercase
text-[#C9A227]
"

>

JOURNEY

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

My Story

</motion.h2>




<div

className="
relative
mt-16
border-l
border-white/20
"

>


{

journey.map((item,index)=>(


<motion.div

variants={fadeIn}

key={index}

className="
relative
mb-12
pl-10
"

>


{/* timeline dot */}

<div

className={`
absolute
-left-[9px]
top-2
h-5
w-5
rounded-full
${item.highlight 
?
"bg-[#C9A227]"
:
"bg-white"}
`}

/>



<div

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-xl
transition
hover:-translate-y-2
hover:border-[#C9A227]/40
"

>


<div

className="
flex
flex-wrap
items-center
justify-between
gap-4
"

>


<h3

className="
text-2xl
font-bold
text-white
"

>

{item.title}

</h3>



<span

className="
text-[#C9A227]
"

>

{item.year}

</span>


</div>



<p

className="
mt-2
text-sm
uppercase
tracking-wider
text-gray-500
"

>

{item.type}

</p>



<p

className="
mt-5
leading-relaxed
text-gray-400
"

>

{item.description}

</p>



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