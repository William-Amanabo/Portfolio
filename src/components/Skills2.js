import React from "react";

import DeveloperSkills from './DeveloperSkills';
import DesignerSkills from './DesignerSkills';

export default function Skills() {
  return (
    <section id="section">
      <div class="content-box">
        <div
          class="content-title wow animated fadeInDown"
          data-wow-duration="1s"
          data-wow-delay=".5s"
        >
          <h3> Skills </h3>
          <div class="content-title-underline"></div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6">
                <DeveloperSkills/>
            </div>
            <div class="col-md-6 col-sm-6">
                <DesignerSkills/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
