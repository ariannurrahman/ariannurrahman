import React, { useState } from "react";
import "../styles/works/works.css";
import beanary from "../images/works/beanary.png";
import anmovies from "../images/works/anmovies.png";
const Works = () => {
  const [open, setOpen] = useState(false);
  const cardModalHandler = () => {
    setOpen(!open);
  };
  const myWorksImg = [anmovies, beanary];
  const myWorks = ["anmovies", "beanary"];
  const myWorksTitle = ["An Movies", "Beanary Coffee"];
  const myWorksDesc = [
    "Streaming website using TheMovieDB API",
    "E-commerce website project selling coffee beans",
  ];
  const renderWorks = () => {
    return myWorks.map((item, index) => {
      return (
        <div className="works-card" key={index}>
          <div className="works-link-wrapper">
            <div>
              <a
                rel="noopener noreferrer"
                href={`https://${item}.netlify.app/`}
                id="works-link"
                target="__blank"
              >
                <img
                  src={myWorksImg[index]}
                  alt="beanary"
                  onClick={cardModalHandler}
                />
              </a>
            </div>
          </div>
          <div className="modal-icon">
            <div className="card-title">{myWorksTitle[index]}</div>
            <div className="card-tech">
              {["Javascript", "HTML", "CSS", "ReactJs", "Redux"].map((tech) => (
                <div id="tech" key={tech}>
                  {tech}
                </div>
              ))}
            </div>
            <div className="card-desc">{myWorksDesc[index]}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="works-container">
      <div className="works-wrapper">
        <div className="works-title">Works</div>
        <div className="works-card-container">{renderWorks()}</div>
      </div>
    </div>
  );
};

export default Works;
