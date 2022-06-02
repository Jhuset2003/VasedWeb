import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import styles from "./styles/Hero.module.css";
import video from "../../assests/video.mp4";
import ReactPlayer from "react-player";
import MainLayout from "../../layout/MainLayout";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  return (
    <div>
      <MainLayout>
        <div className={styles.section_hero}>
          <div className={styles.content_hero}>
            <section className={styles.text_hero}>
              <div className={styles.welcome_video_hero}>
                {isVideoPlaying === false && (
                  <div className={styles.videoicons}>
                    <FaPlay onClick={() => setIsVideoPlaying(true)} />
                  </div>
                )}
                <ReactPlayer
                  controls
                  url={video}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                />
              </div>
              <div className={styles.text_info_hero}>
                <h1 className={styles.text_title_hero}>
                  ¡Hola <br /> Te damos la bienvenida al <br /> Aula Virtual
                  VASED
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
      </MainLayout>
    </div>
  );
};
export default Hero;
