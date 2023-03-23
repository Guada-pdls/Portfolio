import React from "react";
import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <section className="contacto" id="contacto" data-aos="zoom-in">
      <h3 className="titulo">Contacto</h3>
      <form action="">
        <div>
            <input type="text" placeholder="Nombre" name="name" id="nam" required />
            <input
              type="text"
              placeholder="Apellido"
              name="last"
              id="last"
              required
            />
        </div>
        <input
          type="email"
          placeholder="Correo electrónico"
          name="mail"
          id="mail"
          required
        />
        <textarea
          cols="30"
          rows="6"
          placeholder="Asunto"
          name="msg"
          id="msg"
          required
        ></textarea>
        <motion.input type="submit" id="button" value="Enviar" className="button" whileHover={{transform: "scale(1.01)"}}/>
      </form>
    </section>
  );
};

export default Contacto;
