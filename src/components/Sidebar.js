import React, { useState } from "react";
import "../styles/mainstyle.css";
import "../styles/contact/sidebar.css";
import github from "../images/socialmedia/github.svg";
import whatsapp from "../images/socialmedia/whatsapp.png";
import linkedin from "../images/socialmedia/linkedin.png";
import gmail from "../images/socialmedia/gmail.png";
import send from "../images/socialmedia/enter.svg";
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const contactIcon = [whatsapp, gmail, linkedin, github];

  const renderContacts = contactIcon.map((contact, idx) => {
    return (
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
        <button className="icon-wrapper">
          <img src={contact} alt="whatsapp icon" />
          <p>
            {contact === whatsapp
              ? "whatsapp"
              : contact === gmail
              ? "gmail"
              : contact === linkedin
              ? "linkedin"
              : "github"}
          </p>
        </button>
      </a>
    );
  });

  const onClickExpandInfo = () => {
    setOpen(!open);
  };

  return (
    <div className="info-container">
      <div
        className={`arrow-wrapper ${open ? "active" : ""}`}
        onClick={onClickExpandInfo}
      >
        <img src={send} alt="arrow send" />
      </div>
      <div className={`info-content ${open ? "active" : ""}`}>
        <div className="content-wrapper">
          <h1>Contact Me</h1>
          {renderContacts}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
