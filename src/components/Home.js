import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Typist from "react-typist";

import "../styles/homeStyle.css";
import "../styles/mainstyle.css";
import backgroundImage from "../images/tree.svg";
import birdflying from "../images/gif/birdflying.gif";
import birdflying2 from "../images/gif/birdflying2.gif";
const Home = () => {
  const history = useHistory();

  return (
    <div className="home-container">
      <div className="home-left">
        <Typist avgTypingDelay={50} startDelay={750} cursor={{ show: false }}>
          <p className="title-style-home">Hi!</p>
          <Typist.Delay ms={200} />
          <p className="title-style-home">
            I'm An <Typist.Delay ms={200} />
            <Typist.Backspace count={3} delay={300} />
            Arian,
          </p>
          <Typist.Delay ms={250} />
          <p className="title-style-home">Front-end Web Developer</p>
          <Button
            size="lg"
            variant="light"
            style={{
              backgroundColor: "transparent",
              fontWeight: "600",
              width: "200px",
            }}
            onClick={() => history.push("/contact")}
            className="button-contactme"
          >
            Contact Me
          </Button>
        </Typist>
      </div>
      <div className="home-right">
        <div className="background-tree">
          <img src={backgroundImage} alt="" />
        </div>

        <img
          src={birdflying}
          style={{ width: "100px" }}
          className="bird"
          alt="firstbird"
        />
        <img
          src={birdflying2}
          style={{ width: "150px" }}
          className="bird2"
          alt="secondbird"
        />
      </div>
    </div>
  );
};

export default Home;
