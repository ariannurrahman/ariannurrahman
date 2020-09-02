import React, { useRef, useEffect, useState } from "react";
import "../styles/mainstyle.css";
import "../styles/contactStyle.css";
import mapboxgl from "mapbox-gl";
import linkedin from "../images/linkedin.svg";
import gmail from "../images/gmail.svg";
import github from "../images/github.svg";
import whatsapp from "../images/whatsapp.svg";

const Contact = () => {
  const iconList = [whatsapp, linkedin, gmail, github];
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXJpYW5kcm9pZCIsImEiOiJja2FiM2VhbTEwdXBoMnJqcDRndW94YmwxIn0.lOrYJvwhR54494WrMWNWUA";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [107.64809, -6.964609],
        zoom: 2,
        anchor: "center",
      });
      let marker = new mapboxgl.Marker()
        .setLngLat([107.64809, -6.964609])
        .addTo(map);

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div className="contact-container">
      <div className="contact-top">
        <div className="contact-title">Contact Me</div>
        <div
          // className="contact-mapbox"
          style={{ width: "300px", height: "300px" }}
          id="mapboxgl"
          ref={(el) => (mapContainer.current = el)}
        ></div>
      </div>
      <div className="contact-bottom">
        <div className="contact-bottom-top"></div>
        <div className="contact-bottom-bottom"></div>
      </div>
    </div>
  );
};

export default Contact;
