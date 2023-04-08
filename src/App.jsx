import { useEffect } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Presentacion from "./Components/Secciones/Presentacion/Presentacion"
import Habilidades from "./Components/Secciones/Habilidades/Habilidades"
import Proyectos from "./Components/Secciones/Proyectos/Proyectos"
import SobreMi from "./Components/Secciones/SobreMi/SobreMi"
import Contacto from "./Components/Secciones/Contacto/Contacto"
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
          <Presentacion/>
          <Habilidades/>
          <Proyectos/>
          <SobreMi/>
          <Contacto/>
        </main>
      <Footer/>
    </div>
  )
}

export default App
