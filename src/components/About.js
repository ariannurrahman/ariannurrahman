import React from "react";
import "../styles/aboutStyle.css";
import "../styles/mainstyle.css";
import arian from "../images/arian.jpg";

import linkedin from "../images/linkedin.svg";
import gmail from "../images/gmail.svg";
import github from "../images/github.svg";
import contact from "../images/contact.svg";
import { useHistory } from "react-router-dom";

const About = () => {
  const contactList = [linkedin, gmail, github];

  const renderContact = contactList.map((element, index) => {
    return (
      <div className="contact-wrapper" key={element[index] + " key"}>
        <img src={element} alt={`${element[index]}-key`} />
      </div>
    );
  });

  const history = useHistory();
  const onClickHandler = (event) => {
    event.preventDefault();
    history.push("/contact");
  };

  return (
    <div className="about-container">
      <div className="about-top">About Me</div>
      <div className="bottom-left">
        <img src={arian} alt="Me on grass" />
      </div>
      <div className="top-text">Hi! I'm Arian</div>
      <div className="bottom-text">
        I describe myself as a passionate developer who loves coding, open
        source, and the web platform.
      </div>

      <div className="about-contact" onClick={onClickHandler}>
        <img src={contact} alt="contact me" />
      </div>

      <div className="bottom-quote">
        "Consistency and discipline is the key to learn"
      </div>

      <div className="footer-contact">{renderContact}</div>
    </div>
  );
};

export default About;
