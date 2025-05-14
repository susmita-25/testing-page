import React from "react";
import Doctor from "../Assets/agency.png";
import project from "../Assets/project_line.png";

import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      <img src={project} alt="Doctor Group" className="about-image1" />
      </div>
    </div>
  );
}

export default About;
