import React, { useState } from "react";
import ChangeLanguageWidget from "../ChangeLanguageWidget/ChangeLanguageWidget";
const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
      <header>
        <ChangeLanguageWidget/>
        <nav className={`nav ${isOpen && "open"}`}>
          <ul>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#sobre-mi">Sobre mí</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className={`hamburger ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    
  );
};

export default Navbar;
