import React from "react";
import {
  AiOutlineEnvironment,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Presentacion = () => {
  return (
    <section className="presentacion">
      <div className="datos" data-aos="fade-in">
        <h1>Guadalupe Piva</h1>
        <h2>Desarrolladora web</h2>
        <div className="ubi">
          <AiOutlineEnvironment />
          <h4>Montevideo, Uruguay</h4>
        </div>
      </div>
      <div className="buttons-container">
        <a
          href="../CV - Guadalupe Piva.pdf"
          download="CV - Guadalupe Piva.pdf"
          className="button-presentacion"
        >
          Descargar CV
        </a>
        <a href="" className="button-presentacion">
          <AiFillGithub />
        </a>
        <a href="" className="button-presentacion">
          <AiFillLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Presentacion;
