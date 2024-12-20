import React from "react";
import { AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/guadalupepiva/" target="_blank"><AiOutlineLinkedin/></a>
        </li>
        <li>
          <a href="mailto:gupiv.dev@gmail.com" target="_blank"><AiOutlineMail/></a>
        </li>
        <li>
          <a href="https://wa.me/+59894334562" target="_blank"><AiOutlineWhatsApp/></a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
