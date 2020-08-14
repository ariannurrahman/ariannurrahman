import React from "react";
import { Container } from "react-bootstrap";
import "../styles/skillStyle.css";
import "../styles/mainstyle.css";

const Skills = () => {
  const title = ["S", "k", "i", "l", "l", "s"];
  const renderTitle = title.map((element) => {
    return <p className="title-style">{element}</p>;
  });
  //
  const skillList = ["HTML", "CSS/SASS", "JavaScript", "React/Hooks", "Redux"];
  const skillLevel = [80, 70, 85, 75, 70];
  const renderSkillSet = skillList.map((element, index) => {
    return (
      <div className="outer-bar">
        <span className="inner-bar" style={{ width: `${skillLevel[index]}%` }}>
          <span className="progress-bar">{element}</span>
        </span>
        <span style={{ float: "right" }}>{`${skillLevel[index]}%`}</span>
      </div>
    );
  });
  return (
    <Container className="skill-container">
      <div className="title-container">{renderTitle}</div>
      <div className="skillbar-container">{renderSkillSet}</div>
    </Container>
  );
};

export default Skills;
