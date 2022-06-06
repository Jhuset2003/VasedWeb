import React from "react";
import styles from "./styles/Footer.module.css";
import logo from "../../assests/vased-logo-white.png";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <motion.footer className={styles.footer} initial={{y:100}} animate={{y:0}}>
      <div className={`${styles.containers} ${styles.c2}`}>
        <div className={styles.image}>
          <img className={styles.logo_vased} src={logo} alt="" />
        </div>
        <div className={styles.social_networks}>
          <a href="https://www.facebook.com/fundacionvasedcol/" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/Fundacion_VASED" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/fundacion_vased/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/28922719/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com/channel/UC2yR56NyqYvplv4Qfvt6LAw" target="_blank">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className={`${styles.containers} ${styles.c3}`}>
        
        <span>¿Tienes dudas o inconvenientes?</span><br />
        <p>Escribenos a <span className={styles.color_text}>contacto.fundacionvased@gmail.com</span></p>
      </div>
    </motion.footer>
  );
};

export default Footer;
