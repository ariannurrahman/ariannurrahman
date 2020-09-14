import React, { useEffect } from "react";
import "../styles/aboutStyle.css";
import "../styles/mainstyle.css";
import arian from "../images/arian.jpeg";
import contact from "../images/contact.svg";
import { useHistory } from "react-router-dom";
import gsap from "gsap";

const About = () => {
  const history = useHistory();
  const onClickHandler = (event) => {
    event.preventDefault();
    history.push("/contact");
  };

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
    gsap.fromTo(
      ".about-contact",
      { opacity: 0, scale: 0 },
      {
        delay: 1,
        duration: 1,
        scale: 1,
        ease: "back",
        paused: false,
        opacity: 1,
      }
    );
  });

  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-title">About Me</div>
        <div className="bottom-left">
          <img src={arian} alt="Me on grass" />
        </div>

        <div className="bottom-text slide">
          I describe myself as a passionate developer who loves coding, open
          source, and the web platform.
        </div>

        <div className="about-contact" onClick={onClickHandler}>
          <img src={contact} alt="contact me" />
        </div>

        <div className="bottom-quote slide">
          {/* "Consistency and discipline is the key to learn" */}
          "When you struggle with a problem, that's when you understand it"
          <u>Elon Musk</u>
        </div>
      </div>
    </div>
  );
};

export default About;
