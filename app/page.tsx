import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Journey from "./components/sections/Journey";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import CursorGlow from "./components/ui/CursorGlow";
import LoadingScreen from "./components/ui/LoadingScreen";
import JanoHealth from "./components/sections/JanoHealth";
import Architecture from "./components/sections/Architecture";
import Resume from "./components/sections/Resume";


export default function Home(){

return (

<main
className="
min-h-screen
bg-[#0B1120]
text-white
"
>

<LoadingScreen/>

<CursorGlow/>

<Navbar/>

<Hero/>

<About/>

<Skills/>

<Projects/>

<JanoHealth/>

<Architecture/>

<Resume/>

<Journey/>

<Contact/>

<Footer/>

</main>

)

}