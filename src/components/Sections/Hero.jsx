import React from "react";
import "./Hero.css";
import video from "../../assests/video.mp4";
const Hero = () => {
  return (
    <div class="section_hero">
      <div class="content_hero">
        <section class="text_hero">
        <div class="welcome_video_hero">
            <video class="video_main_hero" controls>
              <source class="video_main_hero" src={video} type="video/mp4" />{" "}
            </video>
          </div>
          <div class="text_info_hero">
            <h1 class="text_title_hero">Titulo</h1>
            <p class="text_details_hero">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              eligendi quia vel veritatis sint atque exercitationem reiciendis
              placeat ad consequuntur nisi veniam deleniti, ipsa et tempora ab
              fugit. Nam, officia.
            </p>
            </div>
        </section>
      </div>
    </div>
  );
};
export default Hero;
