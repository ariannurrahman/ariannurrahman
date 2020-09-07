import React, { useEffect, useState } from "react";
import "../styles/mainstyle.css";
import "../styles/footerStyle.css";
import gmail from "../images/gmail.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import gsap from "gsap";

const Footer = () => {
  const contactList = [linkedin, gmail, github];
  const [play, isPlay] = useState("null");

  useEffect(() => {
    gsap.to(".contact-wrapper", {
      bottom: 0,
      duration: 5,
      rotation: 360,
      stagger: 0.4,
      ease: "elastic",
      rotate: true,
      paused: false,
      opacity: 1,
    });
  });
  console.log(gsap);
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
