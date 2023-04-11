// import React, { useState, useEffect, useRef } from "react";
// import Header from "./components/Header";
// import "./App.css";
// import Home from "./components/Home";
// import Projects from "./components/Projects";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";
// import HireMeButton from "./components/HireMeBtn";
// import ResumePDF from "./components/ResumePdf";

// function App() {
//   const [activeSection, setActiveSection] = useState("home");

//   const handleSetActiveComponent = (name) => {
//     setActiveSection(name);
//   };



//   const homeRef = useRef(null);
//   const skillsRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);
//   // const experienceRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const homeRect =
//         homeRef.current && homeRef.current.getBoundingClientRect();
//       const skillsRect =
//         skillsRef.current && skillsRef.current.getBoundingClientRect();
//       const projectsRect =
//         projectsRef.current && projectsRef.current.getBoundingClientRect();
//       const contactRect =
//         contactRef.current && contactRef.current.getBoundingClientRect();
//       // const experienceRect = experienceRef.current && experienceRef.current.getBoundingClientRect();

//       if (
//         skillsRect &&
//         skillsRect.top >= 0 &&
//         skillsRect.bottom <= window.innerHeight
//       ) {
//         setActiveSection("skills");
//       } else if (
//         homeRect &&
//         homeRect.top >= 0 &&
//         homeRect.bottom <= window.innerHeight
//       ) {
//         setActiveSection("home");
//       } else if (
//         projectsRect &&
//         projectsRect.top >= 0 &&
//         projectsRect.bottom <= window.innerHeight
//       ) {
//         setActiveSection("projects");
//       } else if (
//         contactRect&&
//         projectsRect.bottom < window.innerHeight
//       ) {
//         console.log("handleScroll called4");
//         setActiveSection("contact");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="App">
//       {/* <Header
//         activeSection={activeSection}
//         handleSetActiveComponent={handleSetActiveComponent}
//         handleResumeClick={handleResumeClick}
//       ></Header> */}
//       <Home homeRef={homeRef} />
//       {/* <Skills skillsRef={skillsRef} />
//       <Projects projectsRef={projectsRef} /> */}
//       {/* {showResume && <ResumePDF />} */}
//       {/* {activeSection !== "contact" ? (
//         <HireMeButton handleSetActiveComponent={handleSetActiveComponent} />
//       ) : null} */}
//       {/* <Contact contactRef={contactRef} /> */}
//     </div>
//   );
// }

// export default App;

import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Section from "./components/Sections";
import Skills from "./components/Skills";
import Experience from "./components/Experience"
import HireMeButton from "./components/HireMeBtn";
import Projects from "./components/Projects"
import Contact from "./components/Contact";

const heights = ["50vh", "40vh","60vh","50vh"];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.085),
  textAlign: "center",
  borderRadius: 10,
}));

export default function BasicMasonry() {
  const componentDecider = (index, height) => {
    switch (index) {
      case 0:
        return (
          <Section
            title="I'm Ajay, working as a React Native Developer. 
            I love to work on products whose impact makes life easier"
          />
        );
      case 1:
        return <Skills height={height} />;
      case 2:
        return <Experience height={height} />;
      case 3:
        return <Projects height={height}/>;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage:
          "linear-gradient(to right, #6371c7, #5563c1, #4656bb, #3848b5, #2a3bae)",
      }}
    >
      {/* <Contact/> */}
      <HireMeButton />
      <Masonry columns={2} spacing={0.35}>
        {heights.map((height, index) => (
          <Item key={1} sx={{ height: height }}>
            {componentDecider(index, height)}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
