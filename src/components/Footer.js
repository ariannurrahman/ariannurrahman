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
    gsap.fromTo(
      ".contact-wrapper",
      { opacity: 0, scale: 0 },
      {
        duration: 2,
        ease: "power1",
        opacity: 1,
        scale: 1,
      }
    );
  });

  const renderContact = contactList.map((element, index) => {
    return (
      <a
        className="contact-wrapper"
        key={element}
        href={
          contactList[index].toString().split("/")[3].split(".")[0] ===
          "linkedin"
            ? "https://www.linkedin.com/in/arian-nurrahman/"
            : contactList[index].toString().split("/")[3].split(".")[0] ===
              "github"
            ? "https://github.com/ariannurrahman"
            : "https://google.com"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={element} alt={`${element[index]}-key`} />
      </a>
    );
  });

  return <div className="footer-contact">{renderContact}</div>;
};

export default Footer;
