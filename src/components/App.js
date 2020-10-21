import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import "../styles/mainstyle.css";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Works from "./Works";
import CustomParticle from "./CustomParticle";
import Loader from "./Loader";
const App = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    return setLoading(true);
  }, 1600);

  const renderApp = () => {
    if (!loading) {
      return <Loader />;
    } else {
      return (
        <div className="ui-container">
          <BrowserRouter>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/works" exact component={Works} />
            <CustomParticle />
          </BrowserRouter>
        </div>
      );
    }
  };

  return renderApp();
};

export default App;
