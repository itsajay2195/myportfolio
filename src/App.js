
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import '@fortawesome/fontawesome-free/css/all.min.css'
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  const [activeComponent, setActiveComponent] = useState("Home");
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    

    if (skillsRef.current && scrollPosition < skillsRef.current.offsetTop - 100) {
      setActiveComponent("Home");
    } else if (projectsRef.current && scrollPosition < projectsRef.current.offsetTop - 100) {
      setActiveComponent("Skills");
    } else if (contactRef.current && scrollPosition < contactRef.current.offsetTop - 100) {
      setActiveComponent("Projects");
    } else {
      setActiveComponent("Contact");
    }
  };


  useEffect(() => {
   
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="App">
      <Header activeComponent={activeComponent} handleLinkClick={handleScroll}></Header>
      <Home/>
      <Skills  />
      <Projects />
      <Contact/>
   
    </div>
  );
}

export default App;
