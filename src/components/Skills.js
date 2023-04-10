import React,{useEffect} from "react";
import styled from "styled-components";
import Slide from 'react-reveal/Slide';
import DeveloperLottie from "./Lottie/DeveloperLottie";


const icons = [
  {
    name: "React",
    imgurl: "images/react.png",
    key: "react-icon",
  },
  {
    name: "React-Native",
    imgurl: "images/atom.png",
    key: "atom-icon",
  },
  {
    name: "JavaScript",
    imgurl: "images/js.png",
    key: "js-icon",
  },
  {
    name: "Android",
    imgurl: "images/android.png",
    key: "android-icon",
  },
  {
    name: "Tailwind",
    imgurl: "images/tailwind.png",
    key: "tailwind-icon",
  },
  // add more icons here
];

function Skills({ height}) {
  // useEffect(() => {
  //   handleSetActiveComponent('skills');
  // }, [handleSetActiveComponent]);
  return (
    <Container id="skills">
      <div
        style={{
          display: "flex",
          flexDirection:"row",
          justifyContent: "center",
          alignItems:"center",
        }}
      >
        <HeaderText>Skills</HeaderText>
        <div style={{paddingLeft:30,display:"flex",justifyContent:"center",alignItems:"center"}}>
          <DeveloperLottie animationPath={"lottie/settings-roll.json"}  height={30} width={30}/>
        </div>
        
      </div>
      <Content>
        {icons.map((icon) => (
          <IconWrapper key={icon.key}>
            <Slide left>
              <MyImg src={icon.imgurl} alt={icon.name} />
              <span >
                <Name>{icon.name}</Name>
              </span>
            </Slide>
          </IconWrapper>
        ))}
      </Content>
    </Container>
  );
}

export default Skills;

const Container = styled.div`
  height:100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding:10px;
  border-radius:10px
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  padding: 20px;
`;

const MyImg = styled.img`
  max-height:60px;
  max-width:60px;
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

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown 1s infinite;
  overflow-x: hidden;
`;
