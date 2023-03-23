import React, { useState, useRef } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const CardProy = ({ title, description, img, deploy, source }) => {
  let card = useRef(null);
  let [rotation, setRotation] = useState({xRotation: 0, yRotation:0})

  const setRotate = (e) => {
    const height = card.current.clientHeight;
    const width = card.current.clientWidth;
    const { layerX, layerY } = e.nativeEvent;
    
    const yRotation = ((layerX - width / 2) / width) * 20;
    const xRotation = ((layerY - height / 2) / height) * 20;
    setRotation({xRotation, yRotation})
  };

  let [hover, setHover] = useState(false);

  const variantes = {
    onVisitarHover: {
      marginLeft: ["4px", "10px", "7px", "10px", "4px"],
      marginTop: "3px",
      transition: {
        duration: 1,
      },
    },
    notVisitarHover: {
      marginTop: "3px",
      marginLeft: "3px",
    },
    onHover: {
      boxShadow: "0 0 25px rgba(0, 0, 0, 1)",
      transform: `rotateY(${rotation.yRotation}deg) rotateX(${rotation.xRotation}deg) scale(1.05)`,
      transition: {
            duration: 0.01
        }
    },
    notHover: {
        transform: `rotateY(0deg) rotateX(0deg) scale(1)`,
        transition: {
            duration: .3
        }
    }
}

  return (
    <motion.li 
      ref={card}
      animate={hover ? "onHover" : "notHover"}
      
      variants={variantes}
      style={{
        background: `url(${img}) no-repeat center`,
        backgroundSize: "cover",
      }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      onMouseMove={(e) => setRotate(e)}>
      <div className="proy-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="enlaces">
          <a href={deploy} target="_blank">
            Visitar
            <motion.div
              variants={variantes}
              animate={hover ? "onVisitarHover" : "notVisitarHover"}
            >
              <AiOutlineDoubleRight />
            </motion.div>
          </a>
          <a href={source} target="_blank">
            <SiGithub />
          </a>
        </div>
      </div>
    </motion.li>
  );
};

export default CardProy;
