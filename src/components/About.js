import React from "react";

import "../styles/aboutStyle.css";
import "../styles/mainstyle.css";
import clickaway from "../images/clickaway.svg";
import coop from "../images/coop.svg";
import learn from "../images/learn.svg";
import tea from "../images/tea.svg";
import organized from "../images/organized.svg";

const About = () => {
  const title = ["A", "b", "o", "u", "t ", "M", "e"];
  const renderTitle = title.map((element, index) => {
    return <p className="title-style">{element}</p>;
  });

  const image = [clickaway, coop, learn, tea, organized];
  // const imageDesc = [
  //   "We are one click away from better tomorrow",
  //   "Team",
  //   "Consistency and discipline is the key",
  //   "Don't forget to chill",
  //   "NEAT!",
  // ];

  const imageDesc = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  ];
  const renderImage = image.map((element, index) => {
    return (
      <div className="box-wrapper">
        <div className="box-icon-wrapper">
          <img src={element} className="box-icon" alt={`about-${index}`} />
        </div>
        <p className="box-desc">{imageDesc[index]}</p>
      </div>
    );
  });
  return (
    <div className="about-container">
      <div className="about-top">{renderTitle}</div>

      <div className="about-bottom">
        <div className="about-wrapper-left">
          <div className="about-content">
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sit amet augue quam. Sed erat enim, feugiat id risus at, auctor
              facilisis ipsum.
            </h5>
            <h5>
              Nullam vel pellentesque nunc, ac egestas orci. In vel massa ac
              lacus pharetra finibus. Maecenas vitae ante turpis. Vestibulum vel
              est ex. Integer viverra lacus at risus pharetra, eu hendrerit
              tellus varius.
            </h5>
          </div>
        </div>

        <div className="about-wrapper-right">
          <div className="box-container">{renderImage}</div>
        </div>

        {/* <div class="popover__wrapper">
          <a href="#">
            <h2 class="popover__title">Hover:me</h2>
          </a>
          <div class="popover__content">
            <p class="popover__message">Joseph Francis "Joey" Tribbiani, Jr.</p>
            <img
              alt="Joseph Francis Joey Tribbiani, Jr."
              src="https://media.giphy.com/media/11SIBu3s72Co8w/giphy.gif"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
