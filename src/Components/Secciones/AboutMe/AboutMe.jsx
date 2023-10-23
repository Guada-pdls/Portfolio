import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";

const AboutMe = () => {
  const { texts } = useContext(LanguageContext)
  return (
    <>
      <section className="about-me" id="about-me">
      <h4 className="title">{texts.aboutMeTitle}</h4>
        <div className="presenta">
          <p>
            {texts.aboutMeText}
            <span>Desarrolladora</span> web Frontend en proceso de convertirme en Full Stack, con la meta de ser ingeniera en sistemas en un futuro próximo. 
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
      
    </>
  );
};

export default AboutMe;
