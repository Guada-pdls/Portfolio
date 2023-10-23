import { useEffect } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Presentation from "./Components/Secciones/Presentation/Presentation"
import Skills from "./Components/Secciones/Skills/Skills"
import Projects from "./Components/Secciones/Projects/Projects.jsx"
import AboutMe from "./Components/Secciones/AboutMe/AboutMe"
import Contact from "./Components/Secciones/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import "./styles/style.css"
import Aos from "aos";
import "aos/dist/aos.css"
import { LanguageProvider } from "./Context/LanguageContext"

function App() {

  useEffect(() => {Aos.init()}, [])

  return (
    <div className="App">
      <LanguageProvider>
        <Navbar/>
          <main>
            <Presentation/>
            <Skills/>
            <Projects/>
            <AboutMe/>
            <Contact/>
          </main>
      </LanguageProvider>
      <Footer/>
    </div>
  )
}

export default App
