import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import HireMeButton from "./components/HireMeBtn";
import ResumePDF from "./components/ResumePdf";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSetActiveComponent = (name) => {
    setActiveSection(name);
  };


  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1FESKJoJUEkKpc1WgL1SoKqSh_AgQQ9Gj/view?usp=sharing")
  };

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  // const experienceRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const homeRect =
        homeRef.current && homeRef.current.getBoundingClientRect();
      const skillsRect =
        skillsRef.current && skillsRef.current.getBoundingClientRect();
      const projectsRect =
        projectsRef.current && projectsRef.current.getBoundingClientRect();
      const contactRect =
        contactRef.current && contactRef.current.getBoundingClientRect();
      // const experienceRect = experienceRef.current && experienceRef.current.getBoundingClientRect();

      if (
        skillsRect &&
        skillsRect.top >= 0 &&
        skillsRect.bottom <= window.innerHeight
      ) {
        setActiveSection("skills");
      } else if (
        homeRect &&
        homeRect.top >= 0 &&
        homeRect.bottom <= window.innerHeight
      ) {
        setActiveSection("home");
      } else if (
        projectsRect &&
        projectsRect.top >= 0 &&
        projectsRect.bottom <= window.innerHeight
      ) {
        setActiveSection("projects");
      } else if (
        contactRect&&
        projectsRect.bottom < window.innerHeight
      ) {
        console.log("handleScroll called4");
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header
        activeSection={activeSection}
        handleSetActiveComponent={handleSetActiveComponent}
        handleResumeClick={handleResumeClick}
      ></Header>
      <Home homeRef={homeRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      {/* {showResume && <ResumePDF />} */}
      {activeSection !== "contact" ? (
        <HireMeButton handleSetActiveComponent={handleSetActiveComponent} />
      ) : null}
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
