import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import home from "../images/home.svg";
import about from "../images/user.svg";
import skills from "../images/personal.svg";
import works from "../images/works.svg";
import contact from "../images/contact.svg";
import burgermenu from "../images/burgermenu.png";
import "../styles/headerStyle.css";

import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import an from "../images/an.svg";
const Header = () => {
  const sosmedStr = ["linkedin", "github"];
  const sosmedList = [linkedin, github];
  const [open, setOpen] = useState(false);
  const [widthResolution, setWidthResolution] = useState(0);

  useEffect(() => {
    setWidthResolution(window.screen.width);
  }, [setWidthResolution]);

  const clickBurger = () => {
    setOpen(!open);
  };
  const renderSosmed = sosmedList.map((element, index) => {
    return (
      <div className="sosmed-wrapper">
        <a
          href={
            sosmedStr[index] === "linkedin"
              ? "https://www.linkedin.com/in/arian-nurrahman/"
              : "https://github.com/ariannurrahman"
          }
          key={`imagelink-${index}`}
          className="navigation-social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={element}
            alt="sosmed"
            key={`header-${index}`}
            className="navigation-image-social"
          />
        </a>
      </div>
    );
  });
  const navText = ["home", "about", "skills", "works", "contact"];
  const navList = [home, about, skills, works, contact];
  const renderNav = navList.map((element, index) => {
    return (
      <NavLink
        to={element === home ? "/" : navText[index]}
        exact
        className="navigation-button"
        key={"navIcon" + index}
        activeStyle={{
          boxShadow: " 0px 0px 4px 0px rgba(0,0,0,0.75)",
          borderRadius: "12px",
          backgroundColor: "gainsboro",
        }}
        onClick={clickBurger}
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
      <div className="an-icon-container">
        <NavLink to="/" exact>
          <img
            src={an}
            alt="an"
            id="an-icon"
            className="navigation-image skip-link"
          />
        </NavLink>
      </div>
      <div className="navigation-container">
        {widthResolution > 1023 ? (
          renderNav
        ) : open ? (
          renderNav
        ) : (
          <div className="navigation-button">
            <img
              src={burgermenu}
              alt="burgermenu"
              className="navigation-image"
              onClick={clickBurger}
            />
          </div>
        )}
      </div>
      <div className="sosmed-container">{renderSosmed}</div>
    </div>
  );
};

export default Header;
