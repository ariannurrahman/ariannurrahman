import React, { useEffect } from "react";
import "../styles/mainstyle.css";
import "../styles/footerStyle.css";
import gmail from "../images/gmail.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import gsap from "gsap";

const Footer = () => {
  const contactList = [linkedin, gmail, github];

  useEffect(() => {
    gsap.to(".contact-wrapper", {
      bottom: 0,
      duration: 3,
      rotation: 360,
      stagger: 0.25,
      ease: "bounce",

      paused: false,
      opacity: 1,
      scale: 1,
    });
  });

  const renderContact = contactList.map((element, index) => {
    return (
      <div className="contact-wrapper" key={element[index] + " key"}>
        <img src={element} alt={`${element[index]}-key`} />
      </div>
    );
  });

  return <div className="footer-contact">{renderContact}</div>;
};

export default Footer;
