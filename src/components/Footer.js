import React from "react";
import "../styles/footerStyle.css";
import gmail from "../images/gmail.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

const Footer = () => {
  const contactList = [linkedin, gmail, github];
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
