import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets:["latin"],
});


const playfair = Playfair_Display({
  variable:"--font-playfair",
  subsets:["latin"],
});



export const metadata: Metadata = {

title:
"Firaol Worku | AI Software Developer & Digital Health Innovator",


description:
"Firaol Worku is an AI software developer, healthcare innovator, and founder of Jano Health building intelligent digital health solutions.",


keywords:[

"Firaol Worku",
"AI Developer",
"Frontend Developer",
"React Developer",
"Next.js Developer",
"Digital Health",
"Jano Health",
"Software Engineer"

],


authors:[
{
name:"Firaol Worku"
}
],


openGraph:{

title:
"Firaol Worku | AI Software Developer",

description:
"Building intelligent systems that transform healthcare.",


type:"website",

},


};



export default function RootLayout({

children,

}: Readonly<{

children: React.ReactNode;

}>) {


return (

<html lang="en">

<body

className={`
${inter.variable}
${playfair.variable}
antialiased
`}

>

{children}

</body>

</html>

);

}