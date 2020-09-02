import React, { useState } from "react";
import "../styles/skillStyle.css";
import "../styles/mainstyle.css";

import js from "../images/skill/js.png";
import html from "../images/skill/html.png";
import css from "../images/skill/css.png";
import reactjs from "../images/skill/reactjs.png";
import git from "../images/skill/git.png";
import sass from "../images/skill/sass.png";

const Skills = () => {
  const [play, setPlay] = useState("true");

  const skillList = ["JavaScript", "HTML", "CSS", "git", "SASS", "React"];
  const skillIcons = [js, html, css, git, sass, reactjs];
  const side = ["front", "back", "right", "left", "top", "bottom"];

  const renderSkill = skillList.map((element, index) => {
    return (
      <div className={`side ${side[index]}`} key={`${skillList}-${index} `}>
        <img src={skillIcons[index]} alt={skillList[index] + " alt"} />
      </div>
    );
  });

  return (
    <div className="skills-container">
      <div className="skill-title">
        <div>Skills and Experiences</div>
      </div>

      <div className="skill-desc">
        <p>
          I use HTML, CSS, and JavaScript to produce responsive websites and web
          apps that provide users the best and most appropriate experience
          suited to their device and browser.
        </p>

        {/* <p>Currently looking for a job as front end web developer</p> */}
        <p>
          I also have 1 year experience with Raspberry Pi, for creating
          real-time sensor. Visit my{" "}
          <a href="https://www.linkedin.com/in/arian-nurrahman/">LinkedIn </a>
          for more details.
        </p>
      </div>

      <div className="cube-wrapper">
        <div className="scene">
          <div
            // className={play === true ? "cube" : "cube paused"}
            className="cube"
            onClick={() => setPlay(!play)}
          >
            {renderSkill}
          </div>
        </div>
      </div>

      <div className="skill-design"></div>
    </div>
  );
};

export default Skills;
