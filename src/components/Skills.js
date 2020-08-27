import React from "react";
import "../styles/skillStyle.css";
import "../styles/mainstyle.css";

import js from "../images/skill/js.png";
import html from "../images/skill/html.png";
import css from "../images/skill/css.png";
import reactjs from "../images/skill/reactjs.png";
import git from "../images/skill/git.png";
import sass from "../images/skill/sass.png";

const Skills = () => {
  const skillList = [
    "JavaScript",
    "HTML",
    "CSS/SASS",
    "git",
    "SASS",
    "React/Hooks",
  ];
  const skillIcons = [js, html, css, git, sass, reactjs];
  const side = ["front", "back", "right", "left", "top", "bottom"];

  const renderSkill = skillList.map((element, index) => {
    return (
      <div className={`side ${side[index]}`} key={`${skillList}-${index} `}>
        <img src={skillIcons[index]} alt={skillList + " alt"} />
        <p>{skillList[index]}</p>
      </div>
    );
  });

  return (
    <div className="skills-container">
      <div className="skill-title">
        <div>Skills and Experience</div>
      </div>

      <div className="skill-desc">
        <p>
          Junior of web development with main interest in front end web
          development
        </p>

        {/* <p>Currently looking for a job as front end web developer</p> */}
        <p>Asdasdasd sdasasas sasa a asa as sasas sasd sdas asdasdasdas</p>
      </div>

      <div className="cube-wrapper">
        <div className="scene">
          <div className="cube">{renderSkill}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
