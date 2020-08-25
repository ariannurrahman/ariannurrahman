import React from "react";

import "../styles/aboutStyle.css";
import "../styles/mainstyle.css";

const About = () => {
  const title = ["A", "b", "o", "u", "t", [" "], "M", "e"];
  const renderTitle = title.map((element) => {
    return <p className="title-style">{element}</p>;
  });
  return (
    <div className="main-container">
      <div className="about-wrapper left">
        <div className="title-container">{renderTitle}</div>
        <div className="about-content">
          <h3>Front end web developer</h3>
          <h5>Self-driven, love technology, well-organized</h5>
          <h5>
            Interested in entire front-end web development in fast pacing speed
            with positive environment
          </h5>
        </div>
      </div>

      <div className="about-wrapper right">
        <div className="box-container">
          <div className="about-box"></div>
          <div className="about-box"></div>
          <div className="about-box"></div>
          <div className="about-box"></div>
          <div className="about-box"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
