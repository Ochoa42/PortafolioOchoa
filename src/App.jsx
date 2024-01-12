import './App.css'
import { Home } from './assets/Components/Home'
import { Work } from './assets/Components/Work'
import { Projects } from './assets/Components/Projects'
import { Contact } from './assets/Components/Contact'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function App() {

  const [isDay, setIsDay] = useState(false);
  const [isEN,setEn] = useState(false);

  const handleModeDay = () => {
    setIsDay(!isDay);
    localStorage.setItem('mode',!isDay)
  }

  const [t,i18n] = useTranslation("global");
  
  const handleModeLanguaje = () =>{
    setEn(!isEN);
    localStorage.setItem('languaje',!isEN);
    if(!isEN){
      i18n.changeLanguage("es");
    }else{
      i18n.changeLanguage("en");
    }

  }

  useEffect(() => {
    const languaje = localStorage.getItem('languaje');
    if( languaje !== null ){
      setEn(languaje === 'true');
      if(languaje === 'true') {
        i18n.changeLanguage('es');
      }else{
        i18n.changeLanguage('en');
      }
    }
  }, [])


  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if(mode !== null) {
      setIsDay(mode === 'true');
     }
  })
  

  return (
    <>
    <main className={`${isDay ? "bg-stone-300":"bg-black"} relative w-full `}>
       <Home handleModeDay={handleModeDay} isDay={isDay} t={t} handleModeLanguaje={handleModeLanguaje} isEN={isEN}/>
       <Work handleModeDay={handleModeDay} isDay={isDay} t={t} />
       <Projects handleModeDay={handleModeDay} isDay={isDay} t={t} />
       <Contact handleModeDay={handleModeDay} isDay={isDay} t={t} />
    </main>
      
    </>
  )
}

export default App
