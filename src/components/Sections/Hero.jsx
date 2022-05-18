import React from "react";
import "./Hero.css";
import video from "../../assests/video.mp4";

const Hero = () => {
  return (
    <div className="section_hero">
      <div className="content_hero">
        <section className="text_hero">
          <div className="welcome_video_hero">
            <video className="video_main_hero" controls>
              <source
                className="video_main_hero"
                src={video}
                type="video/mp4"
              />{" "}
            </video>
          </div>
          <div className="text_info_hero">
            <h1 className="text_title_hero">
              ¡Hola <br /> Te damos la bienvenida al <br /> Aula Virtual VASED
            </h1>
            <p class="text_details_hero">
              Este es un ambiente de formación en donde encontraras diversos
              cursos que hemos creado para ti.
            </p>

            <p class="text_details_hero">
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
