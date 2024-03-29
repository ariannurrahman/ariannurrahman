import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import "../styles/mainstyle.css";
import "../styles/contact/contactStyle.css";
import mapboxgl from "mapbox-gl";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Sidebar from "./Sidebar";
import Socialmedia from "./Socialmedia";
const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [wait, setWait] = useState(false);
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const messageSent = "Message sent successfully... ";
  const pleaseWait = "Please wait... ";
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    setSuccess(!success);
    const templateId = "template_rng4k44";
    const userId = "user_EdYYodkIDIBxVwpu13uBQ";
    const serviceId = "arian.dev";
    success ? setWait(true) : setWait(false);
    emailjs.sendForm(serviceId, templateId, "#contact", userId).then(
      () => {
        setSuccess(success);
        event.target.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const emailResponse = () => {
    return (
      <div className="form-response">
        <div className="response-text">{wait ? pleaseWait : messageSent}</div>
      </div>
    );
  };

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXJpYW5kcm9pZCIsImEiOiJja2FiM2VhbTEwdXBoMnJqcDRndW94YmwxIn0.lOrYJvwhR54494WrMWNWUA";
    const initializeMap = async ({ setMap, mapContainer }) => {
      const map = await new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [107.64809, -6.964609],
        zoom: 5,
        anchor: "center",
      });

      new mapboxgl.Marker().setLngLat([107.64809, -6.964609]).addTo(map);

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  useEffect(() => {
    gsap.fromTo(
      ".slide",
      { autoAlpha: 0, transform: "translateX(-100%)" },
      {
        delay: 0.3,
        duration: 1,
        stagger: 0.25,
        ease: "power2",
        transform: "translateX(0%)",
        paused: false,
        autoAlpha: 1,
      }
    );
  }, []);

  return (
    <div className="contact-container">
      <div className="contact-title slide">Contact Me</div>
      <div className="contact-greeting slide">
        If you have any question or want to talk, don't hesitate to contact me using the form below.
      </div>
      <div className="contact-map-form ">
        <div className="contact-top slide">
          <div id="mapboxgl" ref={(el) => (mapContainer.current = el)} style={{ borderRadius: "8px" }}></div>
        </div>
        <div className="contact-bottom slide">
          <div className="contact-bottom__top">
            <form id="contact" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
                <input type="text" placeholder="Subject" ref={register({ required: true })} name="subject"></input>
                <textarea
                  type="text"
                  placeholder="Message"
                  id="contact-textarea"
                  ref={register({ required: true, minLength: 5 })}
                  name="message"
                ></textarea>
                <input type="submit" placeholder="Submit"></input>
              </div>
            </form>
          </div>
        </div>
        {success ? emailResponse() : null}
      </div>
      <Sidebar />
      <Socialmedia />
    </div>
  );
};

export default Contact;
