import React, { useEffect } from "react";
import "../styles/card.css";
import js from "../images/skill/js.png";
import html from "../images/skill/html.png";
import css from "../images/skill/css.svg";
import reactjs from "../images/skill/reactjs.png";
import git from "../images/skill/git.png";
import sass from "../images/skill/sass.png";
import gsapIcon from "../images/skill/gsap.svg";
import gsap from "gsap";

const Card = () => {
  const skillList = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "SASS",
    "git",
    "GSAP",
  ];
  const skillIcons = [js, html, css, reactjs, sass, git, gsapIcon];

  useEffect(() => {
    gsap.fromTo(
      ".slide",
      { opacity: 0, transform: "translateX(-100%)" },
      {
        duration: 2,
        stagger: 0.75,
        ease: "expo",
        transform: "translateX(0%)",
        paused: false,
        opacity: 1,
      }
    );
  });

  useEffect(() => {
    gsap.set(".cardWrapper", {
      perspective: 800,
    });
    gsap.set(
      [
        ".card-JavaScript",
        ".card-HTML",
        ".card-CSS",
        ".card-git",
        ".card-JavaScript",
        ".card-SASS",
        ".card-React",
        ".card-GSAP",
      ],
      { transformStyle: "preserve-3d" }
    );
    gsap.set(".back", { rotationY: -180 });
    gsap.set([".back", ".front"], { backfaceVisibility: "hidden" });
  });

  const onMouseEnterHandler = (icon) => {
    gsap.to(`.card-${icon}`, {
      duration: 1,
      rotationY: 540,
      ease: "Back.easeOut",
    });
  };

  const onMouseLeaveHandler = (icon) => {
    gsap.to(`.card-${icon}`, {
      duration: 1.5,
      rotationY: 0,
      ease: "Back.easeOut",
    });
  };

  const renderSkillsSet = skillList.map((element, index) => {
    return (
      <div
        className="cardWrapper"
        onMouseEnter={() => onMouseEnterHandler(element)}
        onMouseLeave={() => onMouseLeaveHandler(element)}
        key={element}
      >
        {console.log(element)}
        <div className={`card-${element}`}>
          <div className="cardFace front">
            <img
              src={skillIcons[index]}
              alt="skills icon"
              className="skill-icons"
            />
          </div>
          <div className="cardFace back">
            <h1>{element === "React" ? "ReactJs, Redux, Hooks" : element}</h1>
          </div>
        </div>
      </div>
    );
  });
  return <div className="card-container">{renderSkillsSet}</div>;
};

export default Card;
