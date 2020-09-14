import React from "react";
import { NavLink } from "react-router-dom";
import home from "../images/home.svg";
import about from "../images/about.svg";
import skills from "../images/brain.png";
import contact from "../images/contact.svg";
import "../styles/headerStyle.css";

import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import an from "../images/an.svg";
const Header = () => {
  const sosmedStr = ["linkedin", "github"];
  const sosmedList = [linkedin, github];
  const renderSosmed = sosmedList.map((element, index) => {
    return (
      <a
        href={
          sosmedStr[index] === "linkedin"
            ? "https://www.linkedin.com/in/arian-nurrahman/"
            : "https://github.com/ariannurrahman"
        }
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
  const navText = ["home", "about", "skills", "contact"];
  const navList = [home, about, skills, contact];
  const renderNav = navList.map((element, index) => {
    return (
      <NavLink
        to={element === home ? "/" : navText[index]}
        exact
        className="navigation-button"
        key={"navIcon" + index}
        // activeStyle={{ borderBottom: "0.4px solid black" }}
        // activeClassName="active"
      >
        <img
          src={element}
          alt={element + " alter"}
          className="navigation-image"
        />
        <div className="overlay">
          <div className="text">
            {navText[index].charAt(0).toUpperCase() + navText[index].slice(1)}
          </div>
        </div>
      </NavLink>
    );
  });
  return (
    <div className="header-container">
      <div className="an-container">
        <NavLink to="/" exact>
          <img src={an} alt="an" className="navigation-image skip-link" />
        </NavLink>
      </div>

      <div className="navigation-container ">{renderNav}</div>

      <div className="sosmed-container">{renderSosmed}</div>
    </div>
  );
};

export default Header;
