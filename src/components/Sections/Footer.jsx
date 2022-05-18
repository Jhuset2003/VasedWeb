import React from "react";
import "./Footer.css";
import logo from "../../assests/vased-logo-white.png";
const Footer = () => {
  return (
    <footer class="footer container">
      <div className="logo_text containers">
        <img className="logo_vased"src={logo} alt="" />
      </div>
      <div class="footer_social_networks containers">
        <a href="">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div class="paragraph_container containers c3">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elitadipisicing
          elit.
        </p>
        <small>Lorem ipsum dolor sit amet .</small>
      </div>
    </footer>
  );
};

export default Footer;
