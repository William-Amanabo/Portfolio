import React from "react";
import "../css/HeroScreen.css";
import content from "../content";
import ParticlesBg from "particles-bg";

export default function HeroScreen() {
  return (
    <section id="home">
      <ParticlesBg type="polygon" bg={true} />
      
      <div id="home-content-box">
        <div id="home-content-box-inner" className="text-center">
          <div id="home-heading" className="animated zoomIn">
            <h3>{content.home.name}</h3>
            <h2>{content.home.title}</h2>
          </div>
          <div>
          <div id="home-btn" className="animated zoomIn">
            <a
              className="btn btn-lg btn-general btn-white smooth-scroll"
              href={content.home.link}
              role="button"
              title="View Our Work"
            >
              {content.home.linkTitle}
            </a>
            <div id="resume-btn" className="animated zoomout wow" data-wow-delay=".5s"
                data-wow-duration="1s">
            <a
              className="btn btn-lg btn-general btn-blue"
              href={content.home.ResumeLink}
              role="button"
              title="Resume"

              type='download'
            >
              {content.home.ResumeTitle}
            </a>
          </div>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
