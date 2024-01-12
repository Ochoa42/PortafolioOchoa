import { IconMenu2, IconMoonFilled, IconSunHigh } from "@tabler/icons-react"
import { useState } from "react";
import { IconX } from "@tabler/icons-react";


export const Home = ( {handleModeDay,isDay,t,handleModeLanguaje,isEN} ) => {

    const [clickMenu, setclickMenu] = useState(false);

  const handdleClickOpen = () => {
    setclickMenu(!clickMenu);
  };


  const [borderBotton, setborderBotton] = useState(false);
  const handleClickBorderBotton = () => {
    setborderBotton(!borderBotton);
  }
  
  return (

    
    <header className=" text-white min-h-screen relative ">


        <div className=" pb-[5rem] overflow-hidden">
            <nav className={`fixed z-50 w-full text-white flex items-center justify-between py-[5%] px-[5%] pt-2 pb-2 opacity-90 ${isDay ? "bg-slate" : "bg-gray-600 "} `}>
                <div className="flex items-center gap-4">
                   <button onClick={handleModeLanguaje} className="font-bold">{
                        isEN ? "EN":"ES"
                    }</button>
                    <button onClick={handleModeDay} className="bg-gray-500 rounded-full p-1">
                         {isDay ? <IconSunHigh/>:<IconMoonFilled/>}
                    </button>  
                </div>
                <button className={`sm:hidden ${clickMenu ? 'hidden':'absolute left-3 pt-3'}`}>
                        <IconMenu2 onClick={handdleClickOpen} className="text-white" size={50}/>
                    </button>
                 <button className={`sm:hidden ${clickMenu ? 'absolute left-3 pt-3':'hidden'}`}>
                       <IconX onClick={handdleClickOpen} size={50}/>
                    </button> 
                 
                 <div className={`${isDay ? " sm:flex text-[1.3rem] gap-5 hidden" :"      text-white sm:flex text-[1.3rem] gap-5 hidden" }`}>
                         <a onClick={handleClickBorderBotton} className={`${borderBotton ? 'text-blue-400' : 'border-b-2' }`} href="/">{t("home.nav.home")}</a>
                         <a href="#projects">{t("home.nav.project")}</a>
                         <a href="#work">{t("home.nav.work")}</a>
                         <a href="#contacts">{t("home.nav.contact")}</a>
                 </div>
            </nav>
        </div>
        
        <div className="relative z-10 sm:h-full">
            <img className="h-[50%] sm:w-[40%]" src="/Images/Rectangle37.png"/>
        </div>
        <div className={`${isDay ? "bg-zinc-400" : "bg-slate" } sm:absolute right-0 top-0 sm:h-full sm:w-[70%] py-[10%] flex items-center `}>
            <div className="relative z-10 w-full  px-[1rem] py-[-30%]  md:mt-[5%] ">
                <h1 className={`${isDay ? "text-gray-700 letter_auto text-[2rem] md:text-[3rem] sm:text-[5rem] font-bold":"text-white letter_auto text-[2rem] md:text-[3rem] sm:text-[5rem] font-bold"}`}>{t("home.banner.title")}</h1>
                <h1 className={`md:text-[3rem] font-bold text-base ${isDay ? "text-gray-700" :"text-white"}`}>{t("home.banner.subtitle")}</h1>
                <h1 className="md:text-[5rem] font-bold pb-[4rem] text-slate-600">based in Bolivia.</h1>
                <p className={`sm:pr-[22rem] ${isDay ? "text-gray-100":"text-white"}`}>{t("home.banner.paragraph")}</p>
            </div>
        </div>


        
    </header>

  )
}