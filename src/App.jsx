import './App.css'
import { Home } from './assets/Components/Home'
import { Work } from './assets/Components/Work'
import { Projects } from './assets/Components/Projects'
import { Contact } from './assets/Components/Contact'

function App() {

  return (
    <>
    <main className='bg-black relative w-full '>
       <Home/>
       <Work/>
       <Projects/>
       <Contact/>
    </main>
      
    </>
  )
}

export default App
