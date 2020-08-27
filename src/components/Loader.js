import React from "react";
import "../styles/loaderStyle.css";
import an from "../images/an.svg";
const Loader = () => {
  return (
    <div className="loader-container">
      <img src={an} alt="an design" />
    </div>
  );
};

export default Loader;
