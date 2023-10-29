import React, { useContext } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { LanguageContext } from "../../../Context/LanguageContext";

const CardProy = ({ title, description, img, deploy, source }) => {
  const { texts } = useContext(LanguageContext)
  return (
    <li data-aos="zoom-in-up"
      style={{
        background: `url(${img}) no-repeat center`,
        backgroundSize: "cover",
      }}>
      <div className="proj-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="links">
          <a href={deploy} target="_blank" className="visit">
            {texts.visitProjButton}
            <div>
              <AiOutlineDoubleRight />
            </div>
          </a>
          <a href={source} target="_blank">
            <SiGithub />
          </a>
        </div>
      </div>
    </li>
  );
};

export default CardProy;
