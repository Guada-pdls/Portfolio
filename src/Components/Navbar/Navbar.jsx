import React, { useContext, useState } from "react";
import ChangeLanguageWidget from "../ChangeLanguageWidget/ChangeLanguageWidget";
import { LanguageContext } from "../../Context/LanguageContext";
const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  const { texts } = useContext(LanguageContext)

  const { projectsButton, aboutMeButton, contactButton } = texts

  return (
      <header>
        <ChangeLanguageWidget/>
        <nav className={`nav ${isOpen && "open"}`}>
          <ul>
            <li>
              <a href="#projects">{projectsButton}</a>
            </li>
            <li>
              <a href="#about-me">{aboutMeButton}</a>
            </li>
            <li>
              <a href="#contact">{contactButton}</a>
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
