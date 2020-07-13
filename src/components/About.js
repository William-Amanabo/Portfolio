import React from "react";
import content from '../content'
import '../css/About.css'

export default function About() {
  return (
    <section id="about">
      <div id="about-bg-diagonal" className="bg-parallax"></div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div id="about-content-box">
              <div id="about-content-box-outer">
                <div id="about-content-box-inner">
                  <div
                    className="content-title wow animated fadeInDown"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    <h3> About Me </h3>
                    <div className="content-title-underline"></div>
                  </div>

                  <div
                    id="about-desc"
                    className="wow animated fadeInDown"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    <p>
                     {content.about.info}
                    </p>
                  </div>

                  <div
                    id="about-btn"
                    className="wow animated fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".5s"
                  >
                    <a
                      className="btn btn-lg btn-general btn-blue smooth-scroll"
                      href={content.about.link}
                      role="button"
                      title="View Work"
                    >
                      My Works
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
