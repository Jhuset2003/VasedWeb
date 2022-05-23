import React from "react";
import styles from "./styles/Hero.module.css";
import video from "../../assests/video.mp4";

const Hero = () => {
  return (
    <div className={styles.section_hero}>
      <div className={styles.content_hero}>
        <section className={styles.text_hero}>
          <div className={styles.welcome_video_hero}>
            <video className={styles.video_main_hero} controls>
              <source
                className={styles.video_main_hero}
                src={video}
                type="video/mp4"
              />{" "}
            </video>
          </div>
          <div className={styles.text_info_hero}>
            <h1 className={styles.text_title_hero}>
              ¡Hola <br /> Te damos la bienvenida al <br /> Aula Virtual VASED
            </h1>
            <p className={styles.text_details_hero}>
              Este es un ambiente de formación en donde encontraras diversos
              cursos que hemos creado para ti.
            </p>

            <p className={styles.text_details_hero}>
              Si es tu primera vez aquí te invitamos a que te registres para
              comenzar tus actividades en la plataforma.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Hero;
