import React, { useContext } from 'react'
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
import { LanguageContext } from '../../../Context/LanguageContext';

const Skills = () => {
  const { texts } = useContext(LanguageContext)
  return (
    <section className="skills">
        <div className="learned" data-aos="zoom-in-right">
          <h4 className="title">{texts.skillsTitle}</h4>
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
        <div className="learning" data-aos="zoom-in-left">
          <h4 className="title">{texts.learningTitle}</h4>
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
  )
}

export default Skills