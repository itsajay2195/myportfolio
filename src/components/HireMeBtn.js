import React from "react";
import styled from "styled-components";

const FloatingButton = styled.button`
  background: linear-gradient(
    to right,
    #6371c7,
    #5563c1,
    #4656bb,
    #3848b5,
    #2a3bae
  );
  color: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  font-size: 1.2rem;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
`;

const FloatingButtonWrapper = styled.a`
  position: relative;
  height: 100vh;
`;

const HireMeButton = ({handleSetActiveComponent}) => {
  const handleProjectsClick = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById("contact");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
      handleSetActiveComponent("contact");
    }
  };
  return (
    <FloatingButtonWrapper>
      <FloatingButton onClick={handleProjectsClick}>Hire Me</FloatingButton>
    </FloatingButtonWrapper>
  );
};

export default HireMeButton;
