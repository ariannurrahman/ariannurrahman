import React from "react";
import { useHistory } from "react-router-dom";
import Typist from "react-typist";

import "../styles/homeStyle.css";
import "../styles/mainstyle.css";
import backgroundImage from "../images/tree.svg";
import birdflying from "../images/gif/birdflying.gif";
import birdflying2 from "../images/gif/birdflying2.gif";
import bgsmall from "../images/background/bgsmall.svg";
import bottombg from "../images/background/bottombg.svg";
const Home = () => {
  const history = useHistory();

  return (
    <div className="home-container">
      <img src={bgsmall} className="bgsmall" alt="small branch" />

      <div className="home-top">
        <img src={birdflying} className="bird bird1" alt="firstbird" />
        <img src={birdflying2} className="bird bird2" alt="secondbird" />
      </div>
      <div className="home-bottom">
        <div className="home-left">
          <Typist avgTypingDelay={50} startDelay={100} cursor={{ show: false }}>
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
        <div className="home-right">
          <img src={backgroundImage} alt="" />
        </div>
      </div>

      <div className="bottombg-box">
        <img src={bottombg} alt="smartphone bg bottom" />
      </div>
    </div>
  );
};

export default Home;
