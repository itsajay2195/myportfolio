import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mobileProtfolio } from "../constants/data";
import Slide from "react-reveal/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Projects = ({ projectsRef }) => {
  let index = 0;
  const [portfolioData, setPortfolioData] = useState(mobileProtfolio[index]);

  const handleLeftArrowClick = () => {
    if (index === 0) {
      index = mobileProtfolio.length - 1;
    } else {
      index--;
    }
    setPortfolioData(mobileProtfolio[index]);
  };

  const handleRightArrowClick = () => {
    if (index === mobileProtfolio.length - 1) {
      index = 0;
    } else {
      index++;
    }
    setPortfolioData(mobileProtfolio[index]);
  };

  return (
    <Container ref={projectsRef} id="projects">
      <div
        style={{
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
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Arrow
          onClick={handleLeftArrowClick}
          src={"images/arrow.png"}
          alt={"left-arrow"}
          direction="left"
        />

        <Content>
          <IconWrapper key={portfolioData.id}>
            <Slide left>
              <MyImg
                src={
                  "https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80"
                }
                alt={portfolioData.title}
              />
              <span style={{ paddingTop: 0 }}>
                <Name>{portfolioData.title}</Name>
              </span>
            </Slide>
            <Hover src={portfolioData.gif} alt="myGif">
              <PlaystoreLink>
                <LinkText>
                  Link to playstore
                  <ExternalLink src={"images/arrow.png"} alt={"external"} />
                </LinkText>
              </PlaystoreLink>
              <AppstoreLink>
                <LinkText>
                  Link to Appstore{" "}
                  <ExternalLink src={"images/arrow.png"} alt={"external"} />
                </LinkText>
              </AppstoreLink>
            </Hover>
          </IconWrapper>
        </Content>
        <Arrow
          onClick={handleRightArrowClick}
          src={"images/external-link.png"}
          alt={"right-arrow"}
        />
      </div>
    </Container>
  );
};

export default Projects;

const Arrow = styled.img`
  height: 80px;
  width: 80px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  transform: ${(props) => (props.direction === "left" ? "scaleX(-1)" : "none")};
`;

const ExternalLink = styled.img`
  height: 20px;
  width: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  color:white;
`;

const PlaystoreLink = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: center;
  align-item: center;
`;

const AppstoreLink = styled.div`
  margin-top: 10px;
`;

const LinkText = styled.a`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const Container = styled.div`
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  width: 50%;
`;

const Hover = styled.div`
  display: none;
  position: absolute;
  height: 36%;
  width: 25%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  border-radius: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  &:hover ${Hover} {
    display: block;
  }
`;

const MyImg = styled.img`
  height: 95%;
  width: 100%;
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
  font-size: 24px;
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
