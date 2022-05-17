import React from "react";
import "./Hero.css";
import video from "../../assests/video.mp4";
import { FaHeart, FaHandPaper, FaHandsHelping } from "react-icons/fa";

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
            <h3 className="text_subtitle_hero">subtitulo</h3>
            <h1 className="text_title_hero">Titulo</h1>
            <hr className="stripe" />
            <div className="icons_main">
              <div className="icons_items bg_purple">
                <FaHeart />
              </div>
              <div className="icons_items bg_pink">
                <FaHandPaper />
              </div>
              <div className="icons_items bg_green">
                <FaHandsHelping />
              </div>
            </div>

            <p class="text_details_hero">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
              eligendi quia vel veritatis sint.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Hero;
