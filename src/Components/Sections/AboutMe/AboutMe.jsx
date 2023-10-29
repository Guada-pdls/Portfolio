import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";

const AboutMe = () => {
  const { texts } = useContext(LanguageContext)

  const styleText = (p, i) => {
    const [firstWord, ...rest] = p.split(" ")
    return <p key={i}><span>{firstWord}</span> {rest.join(' ')}</p>
  }

  return (
    <>
      <section className="about-me" id="about-me">
        <h4 className="title">{texts.aboutMeTitle}</h4>
        <div className="presenta">
          {texts.aboutMeText.split('/n').map((p, index) => styleText(p, index))}
        </div>
      </section>

    </>
  );
};

export default AboutMe;
