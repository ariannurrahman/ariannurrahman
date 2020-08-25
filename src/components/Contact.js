import React from "react";
import { Image, Form, Col, Button } from "react-bootstrap";

import "../styles/mainstyle.css";
import "../styles/contactStyle.css";

import linkedin from "../images/linkedin.svg";
import gmail from "../images/gmail.svg";
import github from "../images/github.svg";
import whatsapp from "../images/whatsapp.svg";

const Contact = () => {
  const iconList = [whatsapp, linkedin, gmail, github];
  const title = ["C", "o", "n", "t", "a", "c", "t", "M", "e"];

  const renderIcon = iconList.map((element, index) => {
    return (
      <div style={{ width: "100px", margin: "30px" }}>
        <img src={element} alt="" />
      </div>
    );
  });

  const renderTitle = title.map((element) => {
    return <p className="title-style">{element}</p>;
  });

  return (
    <div className="main-container">
      <div className="contact-vertical top">
        <div className="title-container">{renderTitle}</div>
      </div>

      <div className="contact-vertical bottom">
        <div className="contact left">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridname">
                <Form.Label>First name</Form.Label>
                <Form.Control type="email" placeholder="First Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control placeholder="Subject" />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        {/*  */}
        <div className="contact right">
          <div className="icon-container">{renderIcon}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
