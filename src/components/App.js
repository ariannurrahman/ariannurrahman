import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/mainstyle.css";
import Loader from "./Loader";
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Header = React.lazy(() => import("./Header"));
const Skills = React.lazy(() => import("./Skills"));
const Contact = React.lazy(() => import("./Contact"));
const Test = React.lazy(() => import("./Test"));

const App = () => {
  return (
    <div className="ui-container">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/test" exact component={Test} />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
