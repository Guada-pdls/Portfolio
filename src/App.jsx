import { useEffect } from "react"
import Navbar from "./Components/Navbar/Navbar"
import SobreMi from "./Components/Secciones/SobreMi/SobreMi"
import Proyectos from "./Components/Secciones/Proyectos/Proyectos"
import Contacto from "./Components/Secciones/Contacto"
import Footer from "./Components/Footer/Footer"
import "./styles/style.css"
import Aos from "aos";
import "aos/dist/aos.css"

function App() {

  useEffect(() => {Aos.init()}, [])

  return (
    <div className="App">
      <Navbar/>
        <main>
          <SobreMi/>
          <Proyectos/>
          <Contacto/>
        </main>
      <Footer/>
    </div>
  )
}

export default App
