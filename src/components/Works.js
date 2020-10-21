import React, { useState, useEffect } from "react";
import "../styles/works/works.css";
import beanary from "../images/works/beanary.png";
import gsap from "gsap";
const Works = () => {
  const [open, setOpen] = useState(false);
  const cardModalHandler = () => {
    setOpen(!open);
  };

  useEffect(() => {
    gsap.fromTo(
      ".slide",
      { transform: "translateX(-150%)", autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.5,
        ease: "power4.out",
        transform: "translateX(0%)",
      }
    );
  });

  return (
    <div className="works-container">
      <div className="works-wrapper">
        <div className="works-title slide">Works</div>
        <div className="works-card slide">
          <a
            rel="noopener noreferrer"
            href="https://beanary.netlify.app/"
            id="works-link"
            // target="__blank"
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
