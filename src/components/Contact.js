import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Contact = ({contactRef}) => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  
  return (
    <Container
      id="contact"
      ref={contactRef}
    >
      <Content >
        <Left>
          <img src="images/shake.svg" alt="" />
        </Left>
        <Right>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Email:</Label>
              <Input type="text" placeholder="Enter your email" />
            </FormGroup>
            <FormGroup>
              <Label>Message:</Label>
              <Textarea placeholder="Enter your message" />
            </FormGroup>
            <Button type="submit">Send</Button>
            {message && (
              <span>Thanks for reaching out, I'll reply ASAP :)</span>
            )}
          </form>
        </Right>
      </Content>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 95vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding-top:50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: space-between;
  height: 95vh;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 80px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin: 20px;
  font-size: 18px;
  margin-bottom: 5px;
  color: #fff;
`;

const Input = styled.input`
  margin: 20px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const Textarea = styled.textarea`
  margin: 20px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  resize: none;
  height: 150px;
`;

const Button = styled.button`
  margin: 20px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;
