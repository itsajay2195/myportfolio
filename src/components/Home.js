import React from "react";
import styled from "styled-components";
import Section from "./Sections";

function Home() {
  return (
    <Container>
      <Section
        title="I'm Ajay, working as a React Native Developer. 
        I love to work on products whose impact makes life easier"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
