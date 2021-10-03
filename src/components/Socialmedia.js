import React from "react";
import "../styles/mainstyle.css";
import "../styles/contact/socialmedia.css";
import github from "../images/socialmedia/github.svg";
import whatsapp from "../images/socialmedia/whatsapp.png";
import linkedin from "../images/socialmedia/linkedin.png";
import gmail from "../images/socialmedia/gmail.png";
const Socialmedia = () => {
  const contactIcon = [whatsapp, gmail, linkedin, github];

  const renderContacts = contactIcon.map((contact, idx) => {
    return (
      <div className="socialmedia-link-container" key={idx}>
        <a
          id="contact-link"
          href={
            contact === whatsapp
              ? "https://wa.me/+6287722795175"
              : contact === gmail
              ? "mailto:arian.nurrahman@gmail.com?Subject=New%20mail!"
              : contact === linkedin
              ? "https://www.linkedin.com/in/arian-nurrahman/"
              : "https://github.com/ariannurrahman"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={contact} alt="whatsapp icon" />
        </a>
      </div>
    );
  });

  return (
    <div className="socialmedia-container">
      <div className="socialmedia-wrapper">{renderContacts}</div>
    </div>
  );
};

export default Socialmedia;
