import React, { useEffect, useState } from "react";
import Particles from "react-particles-js";
import "../styles/custom/customparticle.css";
const CustomParticle = () => {
  const [widthResolution, setWidthResolution] = useState(0);

  useEffect(() => {
    setWidthResolution(window.screen.width);
  }, [setWidthResolution]);
  // 40 2800
  return (
    <div className="particle-container">
      <Particles
        className="particle-content"
        params={{
          particles: {
            number: {
              value: widthResolution >= 1023 ? 70 : 50,
              density: {
                enable: true,
                value_area: 3000,
              },
            },
            size: {
              value: 2,
            },
            line_linked: {
              enable: true,
              distance: widthResolution >= 1023 ? 250 : 125,
              color: "#ffffff",
              opacity: 1,
              width: 2.3,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "top-right",
              random: true,
              out_mode: "out",
              bounce: true,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bounce: {
                distance: 100,
                duration: 0.1,
                speed: 6,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default CustomParticle;
