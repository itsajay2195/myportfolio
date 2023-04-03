import React, { useState } from "react";
import styled from "styled-components";
import { mobileProtfolio, featuredProtfolio } from "../constants/data";
import Slide from "react-reveal/Slide";

// `;

const Projects = ({projectsRef}) => {
  const [portfolioData, setPortfolioData] = useState(mobileProtfolio);

  const handleArrowClick = () => {
    if (portfolioData === mobileProtfolio) {
      setPortfolioData(featuredProtfolio);
    } else {
      setPortfolioData(mobileProtfolio);
    }
  };

  return (
    <Container id="projects" >
      <div
        style={{
          marginTop: 50,
          display: "flex",
          justifyContent: "center",
          fontSize: 28,
          fontFamily: "",
        }}
      >
        <HeaderText>Projects</HeaderText>
      </div>

      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Arrow onClick={handleArrowClick} src={"images/arrow.png"} alt={"left-arrow"}  direction="left"/>
        <Content>
          {portfolioData.map((item) => (
            <IconWrapper key={item.id}>
              <Slide left>
                <MyImg src={item.src} alt={item.title} />
                <span style={{ paddingTop: 20 }}>
                  <Name>{item.title}</Name>
                </span>
              </Slide>
              <Gif src={item.gif} alt="myGif" />
            </IconWrapper>
          ))}
        </Content>
        <Arrow  onClick={handleArrowClick} src={"images/arrow.png"} alt={"left-arrow"} />
      </div>
      <DownArrow src="images/down-arrow.svg"></DownArrow>
    </Container>
  );
};

export default Projects;

const Arrow = styled.img`
  height: 80px;
  width: 80px;
  padding:10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  transform: ${props => (props.direction === "left" ? "scaleX(-1)" : "none")};
`;

const Gif = styled.img`
  display: none;
  position: absolute;
  height: 190px;
  width: 100px;
  margin-bottom: 45px;
  border-radius: 15px;

  z-index: 1;
`;

const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 0px 120px;
  padding: 20px;
  &:hover ${Gif} {
    display: block;
  }
`;

const MyImg = styled.img`
  height: 180px;
  width: 100px;
  border-radius: 15px;
`;

const Name = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: bold;
  flex-wrap: nowrap;
  background-image: linear-gradient(
    to right,
    #6371c7,
    #5563c1,
    #4656bb,
    #3848b5,
    #2a3bae
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeaderText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 34px;
  font-weight: bold;
  flex-wrap: nowrap;
  background-image: linear-gradient(
    to right,
    #6371c7,
    #5563c1,
    #4656bb,
    #3848b5,
    #2a3bae
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown 1s infinite;
  overflow-x: hidden;
`;
