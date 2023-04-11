import React, { useRef } from "react";
import styled from "styled-components";
import DeveloperLottie from "./Lottie/DeveloperLottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const socialIcons = [
  { icon: faGithub, link: "https://github.com/itsajay2195" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/itsajaykumar/" },
  { icon: faInstagram, link: "https://www.instagram.com/ajaycnv/?hl=en" },
];

function Section(props) {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1FESKJoJUEkKpc1WgL1SoKqSh_AgQQ9Gj/view?usp=sharing")
  };

  return (
    <Wrap className="Home">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MyImg src={"images/Ajay.jpeg"} alt="My Image" />
      </div>

      <div style={{ display: "flex", height: "50%", alignItems: "center" }}>
        <Left>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text>
              Hey! I Am <Name>Ajaykumar Rajasekaran</Name>
            </Text>

            <span style={{ color: "white" }}>
              Impacing human lives through 
              developing the mobile applications using{" "}
              <Name style={{ fontSize: "14px" }}> React Native.</Name>
            </span>
          </div>
        </Left>

        <Right>
          <DeveloperLottie
            animationPath={"lottie/dev.json"}
            height={150}
            width={150}
          />
          {/* <MyImg src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"  alt="My Image" /> */}
        </Right>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 40,
        }}
      >
        <span style={{ fontWeight: "bold", color: "white" }}>Follow Me:</span>
        <div style={{ display: "flex", marginTop: 15 }}>
          {socialIcons.map((socialIcon) => (
            <a href={socialIcon.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={socialIcon.icon}
                size="2x"
                style={{ paddingRight: 30 }}
              />
            </a>
          ))}
        </div>

        <Resume onClick={handleResumeClick}>
          <FontAwesomeIcon
            icon={faDownload}
            size="2x"
            style={{ paddingRight: 0 }}
          />
          <ResumeHover>View and download my resume</ResumeHover>
        </Resume>
      </div>
    </Wrap>
  );
}

export default Section;

const ResumeHover = styled.div`
  display: none;
  position: absolute;
  padding:10px;
  background-color: #212121;
  color: white;
  bottom:100px;
  border-radius:10px;
`;

const Resume = styled.div`
  display: flex;
  position: absolute;
  height: 100px;
  width: 100px;
  background-color: transparent;
  right: 49%;
  top: 45%;
  justify-content: center;
  alignt-items: center;
  &:hover ${ResumeHover} {
    display: block;
  }
`;

const Wrap = styled.div`
  display: flex;
  background-color: black;
  flex-direction: column;
  height: 100%;
  border-radius: 10px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

const MyImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

const Text = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const Name = styled.span`
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

const Buttons = styled.div``;
//vw full viEw width
//
