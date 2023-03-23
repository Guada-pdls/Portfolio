import React from "react";
import { AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="http://www.linkedin.com/in/guadapdls"><AiOutlineLinkedin/></a>
        </li>
        <li>
          <a href=""><AiOutlineMail/></a>
        </li>
        <li>
          <a href=""><AiOutlinePhone/></a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
