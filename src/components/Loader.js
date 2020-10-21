import React from "react";
import "../styles/loaderStyle.css";
import an from "../images/an.svg";
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <img src={an} alt="an design" />
        <div id="shadow"></div>
      </div>
    </div>
  );
};

export default Loader;
