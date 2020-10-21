import React, { useEffect } from "react";
import "../styles/mainstyle.css";
import "../styles/contact/informations.css";
import gmail from "../images/gmail.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import gsap from "gsap";

const Informations = () => {
  const contactList = [linkedin, gmail, github];
  // const [loading, setLoading] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      ".contact-wrapper",
      { opacity: 0, scale: 0 },
      {
        duration: 2,
        ease: "power1",
        opacity: 1,
        scale: 1,
      }
    );
  });

  const renderContact = contactList.map((element, index) => {
    return (
      <a
        className="contact-wrapper"
        key={element}
        href={
          contactList[index].toString().split("/")[3].split(".")[0] ===
          "linkedin"
            ? "https://www.linkedin.com/in/arian-nurrahman/"
            : contactList[index].toString().split("/")[3].split(".")[0] ===
              "github"
            ? "https://github.com/ariannurrahman"
            : "https://google.com"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={element} alt={`${element[index]}-key`} />
      </a>
    );
  });

  return (
    <div className="info-contact">
      <div className="info-wrapper">
        <div className="info-top">
          <div className="info-title">Contact Information</div>
          <input type="button" value="V" />
        </div>
        <div className="info-bottom"></div>
      </div>
    </div>
  );
};

export default Informations;
