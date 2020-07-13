import React from "react";
import content from "../content";
import '../css/Projects.css'




export default function Projects() {
  return (
    <section id="projects">
      <div className="content-container">
        <div
          className="content-title wow fadeInDown animated"
          data-wow-delay=".5s"
          data-wow-duration="1s"
        >
          <h1>Projects</h1>
          <div className="content-title-underline"></div>
        </div>
        <div className="content-item">
          <div className="work-container wow animated fadeInUp">
            <div className="row no-gutters">
              {content.projects.map((ref) => {
                return (
                  <div className="col-md-3" key={ref}>
                    <div className="img-wrapper">
                      <a href={ref} className="item-wrapper">
                        <img src={ref} alt="" className="items" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
