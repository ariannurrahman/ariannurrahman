import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "../styles/homeStyle.css";
import "../styles/mainstyle.css";
import gsap from "gsap";
const Home = () => {
  const history = useHistory();

  useEffect(() => {
    gsap.fromTo(
      ".title-style-home",
      { opacity: 0, transform: "translateX(-100%)" },
      {
        delay: 0.3,
        duration: 1,
        stagger: 0.25,
        ease: "power2",
        transform: "translateX(0%)",
        paused: false,
        opacity: 1,
      }
    );
  });

  useEffect(() => {
    gsap.fromTo(
      ".button-contactme",
      { opacity: 0, scale: 0 },
      {
        delay: 1.25,
        duration: 0.5,
        ease: "back.inOut",
        scale: 1,
        paused: false,
        opacity: 1,
      }
    );
  });

  const renderHome = () => {
    return (
      <div className="home-container">
        <div className="home-bottom">
          <div className="home-left">
            <div className="title-style-home">Hi!</div>

            <div className="title-style-home">I'm Arian,</div>

            <div className="title-style-home">Web Developer</div>

            <button
              onClick={() => history.push("/contact")}
              className="button-contactme"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    );
  };

  return renderHome();
};

export default Home;
