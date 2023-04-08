import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { SiGithub } from "react-icons/si";

const CardProy = ({ title, description, img, deploy, source }) => {
  return (
    <li data-aos="zoom-in-up"
      style={{
        background: `url(${img}) no-repeat center`,
        backgroundSize: "cover",
      }}>
      <div className="proy-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="enlaces">
          <a href={deploy} target="_blank" className="visitar">
            Visitar
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
