import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import DeveloperLottie from "./Lottie/DeveloperLottie";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';

function Section(props) {
  const textRef = useRef();

  return (
    <Wrap className="Home">
      <Left>
          <div
            style={{
              display:"flex",
              justifyContent:"center"
            }}
          >
            <MyImg src={"/images/Ajay.jpeg"} alt="My Image" />
          </div>
      
        <div style={{display:"flex", flexDirection:"column" , margin:40, borderWidth:"10px", borderColor:"red",height:"20vh"}}>
        <Text>Hey! I Am</Text>
        <Name>Ajaykumar Rajasekaran</Name>
        <span style={{marginTop:10,color:"white"}}> An India based Software developer passionate and experienced in developing mobile applications using <Name style={{fontSize:"14px"}}> React Native</Name>.</span>
        </div>
        
        <div style={{dispaly:"flex", flexDirection:"column",margin:40}}>
          <span style={{fontWeight:"bold",}}>Follow Me:</span>
          <div style={{dispaly:"flex", marginTop:10,justifyContent:'space-around'}}>
          <FontAwesomeIcon icon={faGithub} style={{paddingRight:20}} size="2x" />
          <FontAwesomeIcon icon={faLinkedin} style={{paddingRight:20}} size="2x" />
          <FontAwesomeIcon icon={faInstagram} style={{paddingRight:20}} size="2x" />
          </div>
        </div>
        
      </Left>

      {/* <Center>
        <MyImg src={"/images/Ajay.jpeg"} alt="My Image" />
      </Center> */}
      <Right>
        <DeveloperLottie animationPath={"/lottie/dev.json"} />
      </Right>

      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {/* <Fade bottom>
          <ButtonGroup>
            <LeftButton>{props.leftBtnText}</LeftButton>

            {props.rightBtnText && (
              <RightButton>{props.rightBtnText}</RightButton>
            )}
          </ButtonGroup>
        </Fade> */}

        <DownArrow src="images/down-arrow.svg"></DownArrow>
      </div>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  display: flex;
  background-color: black;
`;

const Left = styled.div`
  width: 100vh;
  height: 90vh;
  margin-top:140px;
  padding: 0px 40px;
  display:flex;
  flex-direction:column;
`;
const Right = styled.div`
  display: flex;
  height: 100vh;
  width: 100vh;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

const MyImg = styled.img`
  height:150px;
  width;150px;
  border-radius:100px;

`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown 1s infinite;
  overflow-x: hidden;
`;

const Text = styled.span`
font-family: "Montserrat", sans-serif;
font-size: 44px;
font-weight:bold;
color:white
`;

const Name = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 44px;
  font-weight:bold;
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
