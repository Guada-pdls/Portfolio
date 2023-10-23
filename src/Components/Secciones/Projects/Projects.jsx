import React, { useContext } from "react";
import CardProj from "./CardProj";
import { LanguageContext } from "../../../Context/LanguageContext";
import projects from "./projects";

const Projects = () => {
  const { texts, language } = useContext(LanguageContext)

  return (
    <section className="projects" id="projects">
      <h3 className="title">{texts.projectsTitle}</h3>
      <ul>
        {projects.map(proj => <CardProj key={proj.id} title={proj.title} description={proj.description[language]} img={proj.img} deploy={proj.deploy} source={proj.source}/>
        )}
      </ul>
    </section>
  );
};

export default Projects;
