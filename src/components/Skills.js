import React from "react";
import content from "../content";


import '../css/Skills.css';

export default function Skills() {
    var getRandomColor =()=> {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

  var skills = content.skills.map((skills) => {
    var className = "bar-expand " + skills.name.toLowerCase();
    return (
      <li
        key={skills.name}
        className="wow animated fadeInUp"
        data-wow-delay=".5s"
        data-wow-duration="1s"
      >
        <span
          style={{
            width: skills.level,
            backgroundColor: getRandomColor(),
          }}
          className={className}
        ></span>
        <em>{skills.name}</em>
      </li>
    );
  });
  return (
    <section id="skills">
      
      <div className="content-box">
        <div
          className="content-title wow animated fadeInDown"
          data-wow-duration="1s"
          data-wow-delay=".5s"
        >
          <h1> SKILLS </h1>
          <div className="content-title-underline"></div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>{/* <span>Skills</span> */}</h1>
          </div>

          <div className="nine columns main-col">
            {/* <p>{skillmessage}</p> */}

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
