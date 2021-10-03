import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

  useEffect(() => {
    const loading = setTimeout(() => {
      return setLoading(true);
    }, 1600);

    return () => {
      clearTimeout(loading);
    };
  }, []);

  return !loading ? (
    <Loader />
  ) : (
    <div className="ui-container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/works" exact component={Works} />
        </Switch>
        <CustomParticle />
      </BrowserRouter>
    </div>
  );
};

export default App;
