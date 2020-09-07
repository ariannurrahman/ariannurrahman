import React, { useRef, useEffect, useState } from "react";
import "../styles/mainstyle.css";
import "../styles/contactStyle.css";
import mapboxgl from "mapbox-gl";

const Footer = React.lazy(() => import("./Footer"));

const Contact = () => {
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
        zoom: 5,
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
          style={{ width: "100%", height: "150px" }}
          id="mapboxgl"
          ref={(el) => (mapContainer.current = el)}
        ></div>
      </div>
      <div className="contact-bottom">
        <div className="contact-bottom__top">
          <form id="contact" autoComplete="off">
            <div className="half-top">
              <input type="text" placeholder="Name"></input>
              <input type="email" placeholder="Email"></input>
            </div>
            <div className="half-bottom">
              <input type="text" placeholder="Subject"></input>
              <textarea
                type="text"
                placeholder="Message"
                id="contact-textarea"
              ></textarea>
              <input type="submit" placeholder="Submit"></input>
            </div>
          </form>
        </div>
        <div className="contact-bottom__bottom">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
