import React, { useRef } from "react";
import styled from "styled-components";
import DeveloperLottie from "./Lottie/DeveloperLottie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const socialIcons = [
  { icon: faGithub, link: "https://github.com/itsajay2195" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/itsajaykumar/" },
  { icon: faInstagram, link: "https://www.instagram.com/ajaycnv/?hl=en" },
];

function Section(props) {
  const textRef = useRef();

  return (
    <Wrap className="Home">
       <div
          style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems:"center"
          }}
        >
           <MyImg src={"images/Ajay.jpeg"} alt="My Image" />
        </div>
     
     <div style={{display:"flex", alignItems:"center"}}>
     <Left>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text>Hey! I Am</Text>
          <Name>Ajaykumar Rajasekaran</Name>
          <span style={{ marginTop: 20, color: "white" }}>
            {" "}
            An India based Software developer passionate and experienced in
            developing mobile applications using{" "}
            <Name style={{ fontSize: "14px" }}> React Native</Name>.
          </span>
        </div>

    
      </Left>

      <Right>
        <DeveloperLottie animationPath={"lottie/dev.json"} />
        {/* <MyImg src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"  alt="My Image" /> */}
      </Right>
     </div>

     <div style={{ display: "flex", flexDirection: "column",alignItems:"center",margin: 40 , zIndex:40}}>
          <span style={{ fontWeight: "bold", color: "white" }}>Follow Me:</span>
          <div style={{ display: "flex", marginTop: 25 }}>
            {socialIcons.map((socialIcon) => (
              <a
                href={socialIcon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={socialIcon.icon}
                  size="2x"
                  style={{ paddingRight: 30 }}
                />
              </a>
            ))}
          </div>
        </div>
    
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  display: flex;
  background-color: black;
  flex-direction:column;
  height:100%
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
  height:150px;
  width:150px;
  border-radius:100px;

`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 250px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const Text = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const Name = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
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
