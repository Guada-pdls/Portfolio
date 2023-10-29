import { useEffect } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Presentation from "./Components/Sections/Presentation/Presentation"
import Skills from "./Components/Sections/Skills/Skills"
import Projects from "./Components/Sections/Projects/Projects.jsx"
import AboutMe from "./Components/Sections/AboutMe/AboutMe"
import Contact from "./Components/Sections/Contact/Contact"
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
