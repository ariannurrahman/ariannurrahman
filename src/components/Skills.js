import React, { useEffect } from "react";
import gsap from "gsap";

import Card from "./Card";
import "../styles/skillStyle.css";
import "../styles/mainstyle.css";
const Skills = () => {
  useEffect(() => {
    gsap.fromTo(
      ".gsap-fadein",
      { autoAlpha: 0, transform: "translateX(-100%)" },
      {
        delay: 0.3,
        duration: 1,
        stagger: 0.25,
        ease: "power2",
        transform: "translateX(0%)",
        paused: false,
        autoAlpha: 1,
      }
    );
  });

  return (
    <div className="skills-container">
      <div className="skill-wrapper">
        <div className="skill-title gsap-fadein">Skill & Knowledge</div>
        <div className="skill-bottom">
          <div className="skill-left">
            <div className="skill-desc gsap-fadein">
              I love to produce responsive websites and web apps that provide users the best experience. Visit my{" "}
              <a href="https://www.linkedin.com/in/arian-nurrahman/" style={{ textDecoration: "none" }}>
                LinkedIn{" "}
              </a>
              for more details.
            </div>
            <div className="skill-right-mobile gsap-fadein">
              <a
                href="https://drive.google.com/file/d/1O0gyeFEcvp_354yp0lUPcEWUZb0iSLwG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Download My Resume</button>
              </a>
            </div>
            <div className="gsap-fadein">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
