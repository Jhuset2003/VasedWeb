import React from "react";
import styles from "./Footer.module.css";
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
        <a href="https://fundacionvased.org/">
          <p>Conocer más acerca de VASED</p>
        </a>
        <span>¿Tienes dudas o inconvenientes?</span><br />
        <small>
          Escribenos a contacto.fundacionvased@gmail.com
        </small>
      </div>
    </footer>
  );
};

export default Footer;
