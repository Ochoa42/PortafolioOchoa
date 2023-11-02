import { IconMenu2 } from "@tabler/icons-react"
import { useState } from "react";
import { IconX } from "@tabler/icons-react";

export const Home = () => {

    const [clickMenu, setclickMenu] = useState(false);

  const handdleClickOpen = () => {
    setclickMenu(!clickMenu);
  };

  return (

    
    <header className=" text-white min-h-screen relative">
        <div className="px-[5%] py-5">
            <nav className=" relative z-10 flex items-center justify-between ">

            <button className={`sm:hidden ${clickMenu ? 'hidden':'absolute left-3 pt-3'}`}>
            <IconMenu2 onClick={handdleClickOpen} className="text-white" size={50}/>
            </button>
            <button className={`sm:hidden ${clickMenu ? 'absolute left-3 pt-3':'hidden'}`}>
            <IconX onClick={handdleClickOpen} size={50}/>
            </button>
                
                
                <div className="sm:flex text-[1.3rem] gap-5 hidden">
                    <a href="/">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#work">Work</a>
                    <a href="#contacts">Contact</a>
                </div>
            </nav>
        </div>
        <div className="relative z-10 sm:h-full">
            <img className="h-[50%] sm:w-[40%]" src="public/Images/Rectangle37.png"/>
        </div>
        <div className="bg-slate sm:absolute right-0 top-0 sm:h-full sm:w-[70%] py-[10%] flex items-center ">
            <div className="relative z-10 w-full  px-[1rem] py-[-30%]  md:mt-[5%] ">
                <h1 className="letter_auto text-[2rem] md:text-[3rem] sm:text-[5rem] font-bold">I'm Aldo Ochoa.</h1>
                <h1 className="md:text-[3rem] font-bold text-base">A Frontend Developer</h1>
                <h1 className="md:text-[5rem] font-bold pb-[4rem] text-slate-500">based in Bolivia.</h1>
                <p className="sm:pr-[22rem]">I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
            </div>
        </div>


        
    </header>

  )
}