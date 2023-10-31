import React, { useContext } from "react";
import {
  AiOutlineEnvironment,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { LanguageContext } from "../../../Context/LanguageContext";

const Presentation = () => {
  const { texts, language } = useContext(LanguageContext)
  return (
    <section id="presentation" className="presentation">
      <div className="data" data-aos="fade-in">
        <h1>Guadalupe Piva</h1>
        <h2>{texts.webDevText}</h2>
        <div className="ubi">
          <AiOutlineEnvironment />
          <h4>Montevideo, Uruguay</h4>
        </div>
      </div>
      <div className="buttons-container">
        <a
          href={language === "en" ? "../EN CV.pdf" : "../ES CV.pdf"}
          download="CV - Guadalupe Piva.pdf"
          className="button-presentation"
        >
          {texts.downloadCvButton}
        </a>
        <a href="" className="button-presentation">
          <AiFillGithub />
        </a>
        <a href="" className="button-presentation">
          <AiFillLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Presentation;
