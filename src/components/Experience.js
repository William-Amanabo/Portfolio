import React from "react";
import content from "../content";
import "../css/Experience.css";

export default function Experience() {
  return (
    <section id="experience" >
      <div className="experience-container full-container">
        <div className="content-container full-container-box">
          <div
            id="experience-background"
            className="full-container-box-inner parallax"
          >
            <div className="shade">
              <div
                className="content-title content-title-white wow fadeInLeft animated"
                data-wow-delay=".5s"
                data-wow-duration="1s"
              >
                <h1>Experience</h1>
                <div className="content-title-underline"></div>
              </div>

              <div className="experience-items wow fadeInRight animated">
                <div className="container">
                  <div className="page">
                    <div className="timeline">
                      {content.experience.map((item) => {
                        return (
                          <div className="timeline__group" key={item.year}>
                            <span className="timeline__year">{item.year}</span>
                            {item.content.map((content) => {
                              return (
                                <div className="timeline__box" key={content.title}>
                                  <div className="timeline__date">
                                    <span className="timeline__day">
                                      {content.date}
                                    </span>
                                    <span className="timeline__month">
                                      {content.month}
                                    </span>
                                  </div>
                                  <div className="timeline__post wow fadeInLeft animated">
                                    <div className="timeline__content">
                                      <div
                                        className="content-title  "
                                        data-wow-delay=".5s"
                                        data-wow-duration="1s"
                                      >
                                        <h3>{content.title}</h3>
                                        <div className="content-title-underline"></div>
                                      </div>
                                      <p>{content.post}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
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
