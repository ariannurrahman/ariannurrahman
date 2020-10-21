import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles/mainstyle.css";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Works from "./Works";
const RouteContainer = (location) => {
  console.log(location);
  return (
    <div className="route-container">
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/skills" exact component={Skills} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/works" exact component={Works} />
    </div>
  );
};

export default withRouter(RouteContainer);
