import React from "react";
import "../styles/aboutStyle.css";
import "../styles/mainstyle.css";
import arian from "../images/arian.jpeg";
import contact from "../images/contact.svg";
import { useHistory } from "react-router-dom";
const Footer = React.lazy(() => import("./Footer"));

const About = () => {
  const history = useHistory();
  const onClickHandler = (event) => {
    event.preventDefault();
    history.push("/contact");
  };

  return (
    <div className="about-container">
      <div className="about-title">About Me</div>
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
    </div>
  );
};

export default About;
