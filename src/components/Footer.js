import React from "react";
import content from "../content";
import '../Utils/font-awesome/css/font-awesome.min.css'

import '../css/Footer.css'

export default function Footer() {
  return (
    <footer >
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {content.social.map((item) => {
              return (
                <li key={item.name}>
                  <a href={item.url}>
                    <i className={item.className}></i>
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright 2020 Portfolio Project</li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="">
                William Amanabo
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smooth-scroll" title="Back to Top" href="#home">
            <i className="fa fa-angle-up fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
