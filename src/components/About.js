import React from "react";

import "../styles/aboutStyle.css";
import "../styles/mainstyle.css";
import clickaway from "../images/clickaway.svg";
import coop from "../images/coop.svg";
import learn from "../images/learn.svg";
import tea from "../images/tea.svg";
import organized from "../images/organized.svg";

const About = () => {
  const image = [clickaway, coop, learn];

  const imageDesc = [
    " I enjoy getting to know a business, its goals, and how I can best apply myself to make sure your website succeeds. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  ];

  return (
    <div className="about-container">
      <div className="about-top">
        <p>About Me</p>
      </div>
      <div className="about-bottom">
        <div className="bottom-left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1200px-Person_icon_BLACK-01.svg.png" />
        </div>
        <div className="bottom-right">
          <h2>
            <strong>Hi! I'm Arian</strong>
          </h2>
          <h4>
            I describe myself as a passionate developer who loves coding, open
            source, and the web platform
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
