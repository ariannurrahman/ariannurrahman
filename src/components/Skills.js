import React from "react";
import "../styles/skillStyle.css";
import "../styles/mainstyle.css";
import Card from "./Card";
const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skill-wrapper">
        <div className="skill-title slide">Skill & Knowledge</div>
        <div className="skill-bottom">
          <div className="skill-left">
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
            </div>
            <div className="skill-right-mobile slide">
              <a
                href="https://drive.google.com/file/d/1O0gyeFEcvp_354yp0lUPcEWUZb0iSLwG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Download My Resume</button>
              </a>
            </div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
