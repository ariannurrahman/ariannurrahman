import React from "react";
import "../styles/skillStyle.css";
import "../styles/mainstyle.css";
const Card = React.lazy(() => import("./Card"));
const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skill-wrapper">
        <div className="skill-title">Skills and Experiences</div>

        <div className="skill-desc slide">
          <p id="skp1">
            I use HTML, CSS, and JavaScript to produce responsive websites and
            web apps that provide users the best and most appropriate experience
            suited to their device and browser. Visit my{" "}
            <a href="https://www.linkedin.com/in/arian-nurrahman/">LinkedIn </a>
            for more details.
          </p>

          {/* <p>Currently looking for a job as front end web developer</p> */}
        </div>
        <div className="card-container">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Skills;
