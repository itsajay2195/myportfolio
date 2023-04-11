import React from "react";
import styled from "styled-components";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Contact from "./Contact";


const FloatingButton = styled.button`
  background: linear-gradient(
    to right,
    #6371c7,
    #5563c1,
    #4656bb,
    #3848b5,
    #2a3bae
  );
  color: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  font-size: 1.2rem;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
`;

const FloatingButtonWrapper = styled.a`
  position: relative;
  height: 100vh;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const HireMeButton = ({handleSetActiveComponent}) => {
  const handleProjectsClick = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById("contact");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
      handleSetActiveComponent("contact");
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <FloatingButtonWrapper onClick={handleOpen}>
      <FloatingButton onClick={handleProjectsClick}>Hire Me</FloatingButton>
    </FloatingButtonWrapper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
       
      >
        <Fade in={open}>
          <div> 
            <Contact closeModal={handleClose}/>
          </div>
        
        </Fade>
      </Modal>
    </>
  );
};

export default HireMeButton;


const Container = styled.div`
  height: 95vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
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

