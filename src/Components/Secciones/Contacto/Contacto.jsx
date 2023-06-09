import React from "react";
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'

const Contacto = () => {

  const submitHandler = e => {
    e.preventDefault()

   const serviceID = 'service_sskpjyu';
   const templateID = 'template_6bk379u';

   emailjs.sendForm(serviceID, templateID, e.target, "CW2Xq3HKlSmTC5vJW")
    .then(() => {
      Swal.fire({
        title: 'Mensaje enviado correctamente',
        icon: 'success'
      });
    }, (err) => {
      Swal.fire({
        title: 'Error!',
        text: `Error: ${err}`,
        icon: 'error',
      });
    });
  }

  return (
    <section className="contacto" id="contacto" data-aos="zoom-in">
      <h3 className="titulo">Contacto</h3>
      <form onSubmit={e => submitHandler(e)}>
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
        <input type="submit" id="button" value="Enviar" className="button"/>
      </form>
    </section>
  );
};

export default Contacto;
