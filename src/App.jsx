import { ChevronDown } from "lucide-react"
import Navbar from "./components/Navbar"
import About from "./sections/About"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"


function App() {
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
      </main>
    </div>
  )
}

export default App
