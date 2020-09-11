import React, { useState, useEffect } from "react";
import "../styles/card.css";
import js from "../images/skill/js.png";
import html from "../images/skill/html.png";
import css from "../images/skill/css2.png";
import reactjs from "../images/skill/reactjs.png";
import git from "../images/skill/git.png";
import sass from "../images/skill/sass.png";
import gsap from "gsap";

const Card = () => {
  const skillList = ["JavaScript", "HTML", "CSS", "git", "SASS", "React"];
  const skillIcons = [js, html, css, git, sass, reactjs];

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
      ],
      { transformStyle: "preserve-3d" }
    );
    gsap.set(".back", { rotationY: -180 });
    gsap.set([".back", ".front"], { backfaceVisibility: "hidden" });
  });

  const onMouseEnterHandler = (icon) => {
    gsap.to(`.card-${icon}`, {
      duration: 1.2,
      rotationY: 180,
      ease: "Back.easeOut",
    });
  };

  const onMouseLeaveHandler = (icon) => {
    gsap.to(`.card-${icon}`, {
      duration: 1.2,
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
        <div className={`card-${element} cardsize`}>
          <div className="cardFace front">
            <img
              src={skillIcons[index]}
              alt="skills icon"
              className="skill-icons"
            />
          </div>
          <div className="cardFace back">
            <h1>back</h1>
          </div>
        </div>
      </div>
    );
  });
  return <div>{renderSkillsSet}</div>;
};

export default Card;
