import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "../styles/homeStyle.css";
import "../styles/mainstyle.css";
import gsap from "gsap";

import sun from "../images/background/sun.svg";
import bottombg from "../images/background/bottombg.svg";

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    gsap.fromTo(
      ".scaleIn",
      { opacity: 0, scale: 0 },
      {
        stagger: 1,
        duration: 2,
        ease: "expo",
        scale: 1,
        paused: false,
        opacity: 1,
      }
    );
  });
  useEffect(() => {
    gsap.to(".sun", {
      duration: 20,
      rotation: 360,
      ease: "linear",
      repeat: -1,
    });
  });

  useEffect(() => {
    gsap.fromTo(
      ".title-style-home",
      { opacity: 0, transform: "translateX(-100%)" },
      {
        duration: 1,
        stagger: 0.5,
        ease: "power1",
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
        delay: 1.5,
        duration: 0.5,
        ease: "power1",
        scale: 1,
        paused: false,
        opacity: 1,
      }
    );
  });
  useEffect(() => {
    gsap.fromTo(
      ".bottombg-box",
      { opacity: 0, transform: "translateY(100%)" },
      {
        duration: 2,

        ease: "expo",
        transform: "translateY(0%)",
        paused: false,
        opacity: 1,
      }
    );
  });

  return (
    <div className="home-container">
      <img src={sun} className="sun scaleIn" alt="sun" />
      <div className="home-bottom">
        <div className="home-left">
          <p className="title-style-home">Hi!</p>
          <p className="title-style-home">I'm Arian,</p>
          <p className="title-style-home">Web Developer</p>
          <button
            onClick={() => history.push("/contact")}
            className="button-contactme"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* <img src={tree} className="bgsmall scaleIn" alt="tree" /> */}
      <div className="bottombg-box">
        <img src={bottombg} alt="smartphone bg bottom" />
      </div>
    </div>
  );
};

export default Home;
