import React, { useRef } from "react";
import styled from "styled-components";
import DeveloperLottie from "./Lottie/DeveloperLottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socialIcons = [  { icon: faGithub, link: "https://github.com/itsajay2195" },  { icon: faLinkedin, link: "https://www.linkedin.com/in/itsajaykumar/" },  { icon: faInstagram, link: "https://www.instagram.com/ajaycnv/?hl=en" },];

function Section(props) {
  const textRef = useRef();

  return (
    <Wrap className="Home">
      <Left>
        <MyImg src={"images/Ajay.jpeg"} alt="My Image" />

        <div style={{ margin: "40px 0", textAlign: "center" }}>
          <Text>Hey! I Am</Text>
          <Name>Ajaykumar Rajasekaran</Name>
          <span style={{ marginTop: 10, color: "white" }}>
            An India based Software developer passionate and experienced in
            developing mobile applications using{" "}
            <Name style={{ fontSize: "14px" }}> React Native</Name>.
          </span>
        </div>

        <div style={{ margin: "40px 0", textAlign: "center" }}>
          <span style={{ fontWeight: "bold", color: "white" }}>Follow Me:</span>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 25 }}>
            {socialIcons.map((socialIcon) => (
              <a
                href={socialIcon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={socialIcon.icon}
                  size="2x"
                  style={{ margin: "0 10px" }}
                />
              </a>
            ))}
          </div>
        </div>
      </Left>

      <Right>
        <DeveloperLottie animationPath={"lottie/dev.json"} />
      </Right>

      <DownArrow src="images/down-arrow.svg"></DownArrow>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
`;

const Left = styled.div`
  width: 100%;
  padding: 0 20px;
  text-align: center;
  margin-top: 80px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
`;

const MyImg = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 100px;
  margin-bottom: 20px;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown 1s infinite;
  margin-top: 20px;
  overflow-x: hidden;
`;

const Text = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: white;
`;

const Name = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 36px;
  font-weight: bold;
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
