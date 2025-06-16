import React from "react";
// import Navbar from "./components/navbar/Page";
import Home from "./components/home/Page";
import Project from "./components/projects/Page";
// import Skills from "./components/skills/Page";
import Contact from "./components/contact/Page";
import Experience from "./components/experience/Page";
// import Mnavbar from "./components/navbar/Mnavbar";
import SmoothScroll from "./components/animate/smooth-scroll";

const page = () => {
  return (
    <div>
      <SmoothScroll>
        {/* <Mnavbar />
        <Navbar /> */}
        <Home />
        <Experience />
        {/* <Skills /> */}
        <Project />
        <Contact />
      </SmoothScroll>
    </div>
  );
};

export default page;
