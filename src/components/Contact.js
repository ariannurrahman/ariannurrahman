import React, { useRef, useEffect, useState } from "react";
import "../styles/mainstyle.css";
import "../styles/contactStyle.css";
import mapboxgl from "mapbox-gl";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import close from "../images/close.svg";
const Footer = React.lazy(() => import("./Footer"));

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    const templateId = "template_rng4k44";
    const userId = "user_EdYYodkIDIBxVwpu13uBQ";
    const serviceId = "arian.dev";
    emailjs.sendForm(serviceId, templateId, "#contact", userId).then(
      (response) => {
        setSuccess(!success);
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const emailResponse = () => {
    return (
      <div className="form-response">
        <div className="response-text">Message sent successfully...</div>
        {/* <div className="response-button">
          <input type="button" value="Close" />
        </div> */}
      </div>
    );
  };

  const renderResponse = () => {
    setTimeout(emailResponse, 1000);
  };

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
      <div className="contact-title">Contact Me</div>
      <div className="contact-greeting">
        If you have any question or want to talk , don't hesitate to contact me
        using the form below.
      </div>
      <div className="contact-map-form">
        <div className="contact-top">
          <div
            id="mapboxgl"
            ref={(el) => (mapContainer.current = el)}
            style={{ borderRadius: "8px" }}
          ></div>
        </div>
        <div className="contact-bottom">
          <div className="contact-bottom__top">
            <form
              id="contact"
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="half-top">
                <input
                  type="text"
                  placeholder="Name"
                  ref={register({ required: true, maxLength: 32 })}
                  name="name"
                  id="name-left"
                ></input>
                <input
                  type="email"
                  placeholder="Email"
                  ref={register({ required: true })}
                  name="email"
                  id="id-right"
                ></input>
              </div>
              <div className="half-bottom">
                <input
                  type="text"
                  placeholder="Subject"
                  ref={register({ required: true })}
                  name="subject"
                ></input>
                <textarea
                  type="text"
                  placeholder="Message"
                  id="contact-textarea"
                  ref={register({ required: true, minLength: 12 })}
                  name="message"
                ></textarea>
                <input type="submit" placeholder="Submit"></input>
              </div>
            </form>
          </div>
        </div>
        {renderResponse()}
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
