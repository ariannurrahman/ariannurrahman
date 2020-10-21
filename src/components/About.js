import React, { useEffect } from "react";
import "../styles/aboutStyle.css";
import "../styles/mainstyle.css";
import arian from "../images/arian.webp";
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
      { transform: "translateX(-150%)", autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.5,
        ease: "power4.out",
        transform: "translateX(0%)",
      }
    );

    gsap.fromTo(
      ".about-contact",
      { autoAlpha: 0, scale: 0 },
      {
        delay: 1,
        duration: 0.5,
        scale: 1,
        ease: "power1.inOut",
        autoAlpha: 1,
      }
    );
  });

  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-title slide">About Me</div>
        <div className="about-bottom">
          <div className="bottom-left slide">
            <img src={arian} alt="Me on grass" id="anphoto" />
          </div>
          <div className="bottom-right">
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
      </div>
    </div>
  );
};

export default About;
