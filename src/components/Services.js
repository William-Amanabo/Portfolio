import React from "react";
import content from "../content";

import '../css/Services.css'
import "../Utils/font-awesome/css/font-awesome.min.css";


export default function services() {
  return (
    <section id="services">
      <div className="content-container">
        <div
          className="content-title wow fadeInDown animated"
          data-wow-delay=".5s"
          data-wow-duration="1s"
        >
          <h1>services</h1>
          <div className="content-title-underline"></div>
        </div>
        <div className="service-items">
          <div className="container">
            <div className="row">
              {content.services.map((item) => {
                return (
                  <div className="col-md-4 " key={item.title}>
                    <div
                      className="service-item wow animated fadeInUp"
                      data-wow-delay=".5s"
                      data-wow-duration="1s"
                    >
                      <div className="service-item-icon">
                        <i className={item.icon} aria-hidden="true"></i>
                      </div>
                      <div className="service-item-title">{item.title}</div>
                      <div className="service-item-desc">{item.content}</div>
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
