import React from "react";
import styles from "./styles/Footer.module.css";
import logo from "../../assests/vased-logo-white.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.containers} ${styles.c2}`}>
        <div className={styles.image}>
          <img className={styles.logo_vased} src={logo} alt="" />
        </div>
        <div className={styles.social_networks}>
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaLinkedinIn />
          </a>
          <a href="">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className={`${styles.containers} ${styles.c3}`}>
        
        <span>¿Tienes dudas o inconvenientes?</span><br />
        <p>Escribenos a <span className={styles.color_text}>contacto.fundacionvased@gmail.com</span></p>
      </div>
    </footer>
  );
};

export default Footer;
