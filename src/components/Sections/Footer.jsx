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
    <footer className={`${styles.footer} ${styles.containers}`}>
      <div className={`${styles.logo_text} ${styles.containers}`}>
        <img className={styles.logo_vased} src={logo} alt="" />
      </div>
      <div className={`${styles.footer_social_networks} ${styles.containers}`}>
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
      <div
        className={`${styles.paragraph_container} ${styles.containers} ${styles.c3}`}
      >
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
