import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Contact = ({contactRef}) => {
  return (
    <div id={"contact"} style={{display:"flex", flexDirection:"column",flex:1}}>
      <Content>
        <Left> hi</Left>
        <Right> hi</Right>
      </Content>
    </div>
  );
};

export default Contact;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  flex:1
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  background-color: red;
  justify-content: space-between;
  height: 100vh;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  background-color: green;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  background-color: blue;
`;
