import React from "react";
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
        className="navigation-social"
      >
        <img
          src={element}
          alt="sosmed"
          key={`header-${index}`}
          className="navigation-image-social"
        />
      </a>
    );
  });
  return (
    <div className="header-container">
      <div className="an-container">
        <Link to="/">
          <img src={an} alt="an" className="navigation-image" />
        </Link>
      </div>

      <div className="navigation-container ">
        <NavLink to="/" exact className="navigation-button">
          <img src={home} alt="#" className="navigation-image" />
          <div className="overlay">
            <div className="text">Home</div>
          </div>
        </NavLink>

        <NavLink to="/about" exact className="navigation-button">
          <img src={about} alt="#" className="navigation-image" />
          <div className="overlay">
            <div className="text">About</div>
          </div>
        </NavLink>

        <NavLink to="/skills" exact className="navigation-button">
          <img src={skills} alt="#" className="navigation-image" />
          <div className="overlay">
            <div className="text">Skills</div>
          </div>
        </NavLink>

        <NavLink to="/contact" exact className="navigation-button">
          <img src={contact} alt="#" className="navigation-image" />
          <div className="overlay">
            <div className="text">Contact</div>
          </div>
        </NavLink>
      </div>

      <div className="sosmed-container">{renderSosmed}</div>
    </div>
  );
};

export default Header;
