import React from "react";
import "../styles/works/works.css";
import beanary from "../images/works/meme.png";
import anmovies from "../images/works/anmovies.png";
const Works = () => {
  const myWorksImg = [anmovies, beanary];
  const myWorks = ["anmovies", "meme-apps"];
  const myWorksTitle = ["An Movies", "Meme Apps"];
  const myWorksDesc = ["Streaming website using TheMovieDB API", "Website to share your image"];

  return (
    <div className="works-container">
      <div className="works-wrapper">
        <div className="works-title">Works</div>
        <div className="works-card-container">
          <div className="works-card">
            <div className="works-link-wrapper">
              <div>
                <a
                  rel="noopener noreferrer"
                  href={`https://${myWorks[0]}.netlify.app/`}
                  id="works-link"
                  target="__blank"
                >
                  <img src={myWorksImg[0]} alt="beanary" />
                </a>
              </div>
            </div>
            <div className="modal-icon">
              <div className="card-title">{myWorksTitle[0]}</div>
              <div className="card-tech">
                {["Javascript", "HTML", "CSS", "SCSS", "ReactJs", "Redux"].map((tech) => (
                  <div id="tech" key={tech}>
                    {tech}
                  </div>
                ))}
              </div>
              <div className="card-desc">{myWorksDesc[0]}</div>
            </div>
          </div>

          <div className="works-card">
            <div className="works-link-wrapper">
              <div>
                <a
                  rel="noopener noreferrer"
                  href={`https://${myWorks[1]}.netlify.app/`}
                  id="works-link"
                  target="__blank"
                >
                  <img src={myWorksImg[1]} alt="beanary" />
                </a>
              </div>
            </div>
            <div className="modal-icon">
              <div className="card-title">{myWorksTitle[1]}</div>
              <div className="card-tech">
                {["Javascript", "Firebase", "Firestore", "HTML", "CSS", "SCSS", "ReactJs", "Redux"].map((tech) => (
                  <div id="tech" key={tech}>
                    {tech}
                  </div>
                ))}
              </div>
              <div className="card-desc">{myWorksDesc[1]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
