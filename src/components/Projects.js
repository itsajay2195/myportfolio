import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mobileProtfolio } from "../constants/data";
import Slide from "react-reveal/Slide";

const Projects = ({ projectsRef }) => {
  const [index, setIndex] = useState(0);
  const [portfolioData, setPortfolioData] = useState(mobileProtfolio[index]);
  
  const handleLeftArrowClick = () => {
    if (index === 0) {
      setIndex(mobileProtfolio.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  
  const handleRightArrowClick = () => {
    if (index === mobileProtfolio.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  
  useEffect(() => {
    setPortfolioData(mobileProtfolio[index]);
  }, [index]);
  

    const handleLinkclick = (link) => {
    window.open(link)
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
               src={portfolioData.src}
                alt={"test"}
              />
              <span style={{ paddingTop: 0 }}>
                <Name>{portfolioData.title}</Name>
              </span>
            </Slide>
            <Hover src={portfolioData.gif} alt="myGif">
            {portfolioData.pslink &&  <PlaystoreLink>
                <LinkText onClick={()=>handleLinkclick(portfolioData.pslink )}>
                  Link to playstore
                  <ExternalLink src={"images/external-link.png"} alt={"external"} />
                </LinkText>
              </PlaystoreLink>}
             {portfolioData.aslink && <AppstoreLink>
                <LinkText onClick={()=>handleLinkclick(portfolioData.aslink )}>
                  Link to Appstore{" "}
                  <ExternalLink src={"images/external-link.png"} alt={"external"} />
                </LinkText>
              </AppstoreLink>}
              {portfolioData.exlink && <AppstoreLink>
                <LinkText onClick={()=>handleLinkclick(portfolioData.exlink )}>
                  This is my side gig, so Link to Expo{" "}
                  <ExternalLink src={"images/external-link.png"} alt={"external"} />
                </LinkText>
              </AppstoreLink>}
            </Hover>
          </IconWrapper>
        </Content>
        <Arrow
          onClick={handleRightArrowClick}
          src={"images/arrow.png"}
          alt={"right-arrow"}
        />
      </div>
    </Container>
  );
};

export default Projects;

const Arrow = styled.img`
  height: 50px;
  width: 50px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
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
  height: 250px;
  width: 350px;
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
