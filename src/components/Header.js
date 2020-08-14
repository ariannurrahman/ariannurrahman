import React from "react";
import { Nav, Image } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import home from "../images/home.svg";
import about from "../images/about.svg";
import skills from "../images/skills.svg";
import contact from "../images/contact.svg";
import "../styles/headerStyle.css";

import linkedin from "../images/linkedin.svg";
import gmail from "../images/gmail.svg";
import github from "../images/github.svg";
import an from "../images/an.svg";
const Header = () => {
  const sosmedList = [linkedin, gmail, github];
  const renderSosmed = sosmedList.map((element, index) => {
    const splitLink = element.split("/");
    const getLink = splitLink[3].split(".");
    return (
      <a
        href={`https://${getLink[0]}.com/ariannurrahman`}
        key={`imagelink-${index}`}
      >
        <Image src={element} alt="sosmed" key={`header-${index}`} />
      </a>
    );
  });
  return (
    <div className="header-container">
      <div className="an-container">
        <Link to="/">
          <Image src={an} alt="an" />
        </Link>
      </div>
      <Nav className="navigation-container ">
        <NavLink to="/" exact className="navigation-button">
          <img
            src={home}
            alt="#"
            style={{ width: "40px" }}
            className="navigation-image"
          />
          <div className="overlay">
            <div className="text">Home</div>
          </div>
        </NavLink>

        <NavLink to="/about" exact className="navigation-button">
          <img
            src={about}
            alt="#"
            style={{ width: "40px" }}
            className="navigation-image"
          />
          <div className="overlay">
            <div className="text">About</div>
          </div>
        </NavLink>

        <NavLink to="/skills" exact className="navigation-button">
          <img
            src={skills}
            alt="#"
            style={{ width: "40px" }}
            className="navigation-image"
          />
          <div className="overlay">
            <div className="text">Skills</div>
          </div>
        </NavLink>

        <NavLink to="/contact" exact className="navigation-button">
          <img
            src={contact}
            alt="#"
            style={{ width: "40px" }}
            className="navigation-image"
          />
          <div className="overlay">
            <div className="text">Contact</div>
          </div>
        </NavLink>
      </Nav>

      <div className="sosmed-container">{renderSosmed}</div>
    </div>
  );
};

export default Header;
