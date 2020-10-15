import React, { useState } from "react";
import "../styles/works/works.css";
import beanary from "../images/works/beanary.png";
const Works = () => {
  const [open, setOpen] = useState(false);
  const cardModalHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="works-container">
      <div className="works-wrapper">
        <div className="works-title">Works</div>
        <div className="works-card">
          <a
            rel="noopener noreferrer"
            href="https://beanary.netlify.app/"
            id="works-link"
          >
            <img src={beanary} alt="beanary" onClick={cardModalHandler} />
          </a>

          <div className="modal-icon">
            {/* {open ? ( */}

            <div className="card-title">Beanary Coffee</div>
            <div className="card-tech">
              {["ReactJs", "Redux", "Firebase"].map((tech) => (
                <div id="tech" key={tech}>
                  {tech}
                </div>
              ))}
            </div>
            <div className="card-desc">
              E-commerce website project selling coffee beans
            </div>

            {/* ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
