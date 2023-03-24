import React from "react";
import CardProy from "./CardProy";

const Proyectos = () => {
  return (
    <section className="proyectos" id="proyectos" data-aos="zoom-in-up">
      <h3 className="titulo">Proyectos</h3>
      <ul>
        <CardProy
          title="Kingdom Institute | Landing page"
          description="Sitio web para Kingdom Institute creado con HTML, CSS y SASS,
          utilizando Bootstrap y AOS."
          img="../../images/KingdomInstitute.jpg"
          deploy="https://guada-pdls.github.io/Kingdom-Institute/"
          source="https://github.com/Guada-pdls/Kingdom-Institute"
        />
        <CardProy
          title="Fake Store | E-commerce"
          description="E-commerce realizado con la API FakeStore, utilizando HTML, CSS y JavaScript, además de librerías tales como EmailJS, SweetAlert, Swiper y Toastify. Su principal funcionalidad es el carrito y el modo oscuro."
          img="../../images/FakeStore.jpg"
          deploy="https://guada-pdls.github.io/Proyecto-JS/"
          source="https://github.com/Guada-pdls/Proyecto-JS"
        />
        <CardProy
          title="Cattitude | E-commerce"
          description="E-commerce de productos para gatitos, desarrollado con React JS y Firestore. Tambiémn utilicé dependencias como react-icons, react-router-dom, toastify-js, entre otras."
          img="../../images/Cattitude.png"
          deploy="https://cattitude.vercel.app"
          source="https://github.com/Guada-pdls/Proyecto-React"
        />
      </ul>
    </section>
  );
};

export default Proyectos;
