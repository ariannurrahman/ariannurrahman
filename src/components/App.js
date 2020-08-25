import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
// import Skills from "./Skills";
// import Contact from "./Contact";

import Header from "./Header";
import "../styles/mainstyle.css";
const App = () => {
  return (
    <div className="ui-container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          {/* <Route path="/skills" exact component={Skills} />
          <Route path="/contact" exact component={Contact} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
