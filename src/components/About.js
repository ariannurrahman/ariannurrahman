import React from "react";
import { Container } from "react-bootstrap";
import "../styles/aboutStyle.css";
import "../styles/mainstyle.css";

const About = () => {
  const title = ["A", "b", "o", "u", "t", [" "], "M", "e"];
  const renderTitle = title.map((element) => {
    return <p className="title-style">{element}</p>;
  });
  return <Container className="about-container">{renderTitle}</Container>;
};

export default About;
