"use client";


import { useEffect, useState } from "react";


interface CounterProps{

value:number;

suffix?:string;

}



export default function Counter({

value,

suffix=""

}:CounterProps){


const [count,setCount]=useState(0);



useEffect(()=>{


let start=0;


const timer=setInterval(()=>{


start+=1;


setCount(start);



if(start>=value){

clearInterval(timer);

}


},80);



return()=>clearInterval(timer);



},[value]);



return (

<span>

{count}
{suffix}

</span>

)

}