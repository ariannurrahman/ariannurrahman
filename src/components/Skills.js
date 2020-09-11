import React from "react";
import "../styles/skillStyle.css";
import "../styles/mainstyle.css";
const Card = React.lazy(() => import("./Card"));
const Footer = React.lazy(() => import("./Footer"));
const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skill-wrapper">
        <div className="skill-title">Skills and Experiences</div>

        <div className="skill-desc slide">
          I always love to produce responsive websites and web apps that provide
          users the best experience suited to their device and browser. Visit my{" "}
          <a href="https://www.linkedin.com/in/arian-nurrahman/">LinkedIn </a>
          for more details.
          {/* <p>Currently looking for a job as front end web developer</p> */}
        </div>

        <Card />
      </div>
    </div>
  );
};

export default Skills;
