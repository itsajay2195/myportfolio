import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
// import {selectCars} from '../features/car/carSlice'
import { useSelector } from "react-redux";

function Header() {
  const [open, setOpen] = useState(false);
  const cars = ["Home", "About", "Projects","Contact me"];

  return (
    <Container>
      <Name>
        <a href="#">Ajay.</a>
      </Name>

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <CustomMenu
          onClick={() => {
            setOpen(true);
          }}
        ></CustomMenu>
      </RightMenu>

      <BurgerNav show={open}>
        <CloseWrapper>
          <CustomClose
            onClick={() => {
              setOpen(false);
            }}
          />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  z-index: 1;
  background: black;
  
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    padding: 0 10px;
    font-size: 24px; 
    flex-wrap: nowrap;
    background-image: linear-gradient(to right, #6371c7, #5563c1, #4656bb, #3848b5, #2a3bae);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    font-size: 14px; 
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
