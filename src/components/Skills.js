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

        <div className="skill-right">
          <div className="skill-desc slide">
            I love to produce responsive websites and web apps that provide
            users the best experience. Visit my{" "}
            <a
              href="https://www.linkedin.com/in/arian-nurrahman/"
              style={{ textDecoration: "none" }}
            >
              LinkedIn{" "}
            </a>
            for more details.
            {/* <p>Currently looking for a job as front end web developer</p> */}
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Skills;
