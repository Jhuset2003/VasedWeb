import React from "react";
import "./Footer.css";
import { FaHandPaper } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer container">
      <div className="logo_text">
        <p class="footer__p">VASED</p>
        <div className="icons_objects ">
          <FaHandPaper />
        </div>
      </div>
      <div class="footer_social_networks">
        <i class="bi bi-facebook social"></i>
        <i class="bi bi-twitter social"></i>
        <i class="bi bi-instagram social"></i>
      </div>
      <div class="paragraph_container">
        <p class="text_footer">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nulla
          illo numquam? Est modi harum ullam odit rem maiores perferendis quidem
      
        </p>
      </div>
    </footer>
  );
};

export default Footer;
