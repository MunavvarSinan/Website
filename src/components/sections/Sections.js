import React, { Fragment } from "react";

import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Service/Service";
import Contact from "./Contact/Contact";
import MapMarker from "./MapMarker/MapMarker";

const sections = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Service />
      <Contact />
      <MapMarker />
    </Fragment>
  );
};

export default sections;
