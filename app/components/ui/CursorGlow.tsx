"use client";


import { useEffect, useState } from "react";


export default function CursorGlow(){


const [position,setPosition]=useState({

x:0,
y:0

});



useEffect(()=>{


const move=(e:MouseEvent)=>{

setPosition({

x:e.clientX,
y:e.clientY

});

};


window.addEventListener(
"mousemove",
move
);


return()=>{

window.removeEventListener(
"mousemove",
move
);

};


},[]);



return (

<div

className="
pointer-events-none
fixed
z-50
h-96
w-96
rounded-full
bg-[#C9A227]/10
blur-3xl
transition-transform
duration-300
"

style={{

transform:
`translate(${position.x-192}px,${position.y-192}px)`

}}

/>

)

}