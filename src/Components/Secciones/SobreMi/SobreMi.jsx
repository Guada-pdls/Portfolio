import React from "react";
import { AiOutlineEnvironment } from "react-icons/ai";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiSass,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiFigma,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";
import MaterialIcon from "./MaterialIcon";


const SobreMi = () => {
  return (
    <>
      <section className="sobre-mi" id="sobre-mi">
        <div className="datos" data-aos="fade-right">
          <h1>Guadalupe Piva</h1>
          <h2>Desarrolladora web</h2>
          <div className="ubi">
            <AiOutlineEnvironment />
            <h4>Montevideo, Uruguay</h4>
          </div>
        </div>
        <div className="presenta" data-aos="fade-left">
          <p>
            <span>¡Hola</span> a todos! Mi nombre es Guadalupe Piva, soy una desarrolladora web Frontend en constante aprendizaje. Actualmente estoy en proceso de convertirme en Full Stack, con la meta de convertirme en ingeniera en sistemas en un futuro
            próximo.
          </p>
          <p>
            <span>Disfruto</span> del trabajo en equipo, lo considero una
            oportunidad para alcanzar objetivos más grandes y mejores
            resultados. Tengo iniciativa y siempre busco la excelencia en mi
            trabajo, lo que me lleva a dedicar tiempo y esfuerzo a la revisión y
            mejora continua de los proyectos. 
          </p>
        </div>
      </section>
      <div className="button-container" data-aos="zoom-in-up">
        <a href="../CV - Guadalupe Piva.pdf" download="CV - Guadalupe Piva.pdf" className="button">
          <p>Descargar CV</p>
        </a>
      </div>
      <section className="habilidades">
        <div className="skills" data-aos="zoom-in-up">
          <h4 className="titulo">Skills</h4>
          <ul>
            <li>
              <SiHtml5 />
              HTML5
            </li>
            <li>
              <SiCss3 />
              CSS3
            </li>
            <li>
              <SiJavascript />
              JavaScript
            </li>
            <li>
              <SiReact />
              React JS
            </li>
            <li>
              <SiPython />
              Python
            </li>
            <li>
              <SiSass />
              Sass
            </li>
            <li>
              <SiBootstrap />
              Bootstrap
            </li>
            <li>
              <SiGit />
              Git
            </li>
            <li>
              <SiGithub />
              GitHub
            </li>
            <li>
              <SiFigma />
              Figma
            </li>
          </ul>
        </div>
        <div className="aprendiendo" data-aos="zoom-in-up">
          <h4 className="titulo">Capacitandome en</h4>
          <ul>
            <li>
              <SiTailwindcss />
              Tailwind CSS
            </li>
            <li>
              <MaterialIcon />
              Material UI
            </li>
            <li>
              <SiNodedotjs />
              Node JS
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SobreMi;
