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
              value: widthResolution >= 1023 ? 150 : 50,
            },
            size: {
              value: 0,
            },
            line_linked: {
              enable: true,
              distance: widthResolution >= 1023 ? 200 : 130,
              color: "#a9a9a9",
              opacity: 0.5,
              width: 2.3,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              out_mode: "bounce",
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
              repulse: {
                distance: 500,
                duration: 0.1,
                speed: 20,
              },
            },
          },
          retina_detect: true,
        }}
      />
      {/* <Particles
        className="particle-content"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 3000,
              },
            },
            color: {
              value: "#a4b8c4",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 5,
                color: "#a4b8c4",
              },
            },
            opacity: {
              value: 0.4,
              random: false,
              anim: {
                enable: false,
                speed: 3,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 10,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#a4b8c4",
              opacity: 0.5,
              width: 2.3,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },

              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      /> */}
    </div>
  );
};

export default CustomParticle;
