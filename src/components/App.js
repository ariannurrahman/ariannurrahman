import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import "../styles/mainstyle.css";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Works from "./Works";
// const Home = React.lazy(() => import("./Home"));
// const About = React.lazy(() => import("./About"));
// const Header = React.lazy(() => import("./Header"));
// const Skills = React.lazy(() => import("./Skills"));
// const Contact = React.lazy(() => import("./Contact"));
// const Works = React.lazy(() => import("./Works"));
// const Loader = React.lazy(() => import("./Loader"));

import CustomParticle from "./CustomParticle";
const App = () => {
  return (
    <div className="ui-container">
      <BrowserRouter>
        <Header />

        {/* <Suspense fallback={Loader()}> */}
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/works" exact component={Works} />
        {/* </Suspense> */}

        <CustomParticle />
      </BrowserRouter>
    </div>
  );
};

export default App;
