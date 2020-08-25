import React from "react";
import { useHistory } from "react-router-dom";
import Typist from "react-typist";

import "../styles/homeStyle.css";
import "../styles/mainstyle.css";

import birdflying from "../images/gif/birdflying.gif";
import bgsmall from "../images/background/bgsmall.svg";
import bottombg from "../images/background/bottombg.svg";

const Home = () => {
  const history = useHistory();

  return (
    <div className="home-container">
      <img src={bgsmall} className="bgsmall" alt="small branch" />

      <div className="home-top">
        <img src={birdflying} className="bird" alt="firstbird" />
      </div>

      <div className="home-bottom">
        <div className="home-left">
          <Typist avgTypingDelay={30} startDelay={100} cursor={{ show: false }}>
            <p className="title-style-home">Hi!</p>
            <Typist.Delay ms={50} />
            <p className="title-style-home">
              I'm Arian,
              <Typist.Delay ms={50} />
            </p>
            <Typist.Delay ms={50} />
            <p className="title-style-home">Web Developer</p>
            <button
              onClick={() => history.push("/contact")}
              className="button-contactme"
            >
              Contact Me
            </button>
          </Typist>
        </div>
      </div>

      <div className="bottombg-box">
        <img src={bottombg} alt="smartphone bg bottom" />
      </div>
    </div>
  );
};

export default Home;
