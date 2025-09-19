import React, { useState } from "react";
// import Nav from "./components/navigation/Nav";
// import LandingPanel from "./components/LandingPanel";
// import SpringCarousel from "./components/springCarousel/SpringCarousel";
// import Projects from './components/projects/Projects.js';
import About from "./components/About.js";
// import Contact from "./components/contact/Contact";
import Skill from "./components/Skill.js";
import "./App.css";
// import Card from "./components/springCarousel/Card";
import ContactUs from "./components/contactus/ContactUs";
// import ControlledCarousel from "./components/bootstrapCarousel/ControlledCarousel";
// import VideoPopup from "./components/videoPopup/VideoPopup";
import Footer from "./components/footer/Footer.js";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="">
          <About />
          <Skill />
          <ContactUs />
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default App;



