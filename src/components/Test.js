import React, { useEffect, useState } from "react";
import "../styles/mainstyle.css";
import github from "../images/github.svg";
import gsap from "gsap";

const Test = () => {
  const [play, isPlay] = useState("null");

  useEffect(() => {
    gsap.to(".testis", {
      duration: 10,
      x: 150,
      rotation: 360,
      ease: "elastic",
      paused: false,
    });
  });

  const onClickHandler = () => {};

  return (
    <div onClick={onClickHandler} className="testis">
      <button value="Click Me"></button>
    </div>
  );
};

export default Test;
