import React, { useContext } from 'react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiSass,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { TbSql } from "react-icons/tb"
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
              <SiNodedotjs />
              Node JS
            </li>
            <li>
              <SiReact />
              React JS
            </li>
            <li>
              <SiJavascript />
              JavaScript
            </li>
            <li>
              <SiMongodb/>
              MongoDB
            </li>
            <li>
              <SiExpress/>
              Express
            </li>
            <li>
              <SiHtml5 />
              HTML5
            </li>
            <li>
              <SiCss3 />
              CSS3
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
              <SiGit />
              Git
            </li>
            <li>
              <SiGithub />
              GitHub
            </li>
            <li>
              <SiTailwindcss />
              Tailwind CSS
            </li>
            <li>
              <MaterialIcon />
              Material UI
            </li>
            <li>
              <TbSql />
              SQL
            </li>
            <li>
              <SiNextdotjs/>
              Next JS
            </li>
            <li>
              <RiJavaLine/>
              Java
            </li>
          </ul>
        </div>
        <div className="learning" data-aos="zoom-in-left">
          <h4 className="title">{texts.learningTitle}</h4>
          <ul>
            <li>
              <SiReact />
              React Native
            </li>
            <li>
              <SiTypescript/>
              Typescript
            </li>
            <li>
              <SiPrisma/>
              Prisma
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Skills