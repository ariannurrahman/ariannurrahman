import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/mainstyle.css";
// const Home = React.lazy(() => import("./Home"));
// const About = React.lazy(() => import("./About"));
// const Header = React.lazy(() => import("./Header"));
// const Skills = React.lazy(() => import("./Skills"));
// const Contact = React.lazy(() => import("./Contact"));
// const Works = React.lazy(() => import("./Works"));
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Skills from "./Skills";
import Contact from "./Contact";
import Works from "./Works";

const App = () => {
  return (
    <div className="ui-container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/works" exact component={Works} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
