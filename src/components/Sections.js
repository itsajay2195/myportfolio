import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>

            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>

                        {props.rightBtnText &&
                            <RightButton>
                                {props.rightBtnText}
                            </RightButton>}
                    </ButtonGroup>
                </Fade>
              

                <DownArrow src="images/down-arrow.svg"></DownArrow>
            </Buttons>

        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    height: 100vh;
    width: 100vw; 
    background-size : cover;
    background-position: center;
    background-repeat:not-repeat;
    background-image :url('/images/model-s.jpg');
    display: flex;
    flex-direction:column;
    justify-content: space-between; //vertical
    align-items: center; //horizontal
    background-image :${props => `url("/images/${props.bgImage}")`}
  
    
`

const ItemText = styled.div`
   padding:15vh;
   text-align:center; 
   z-index:-1;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom:30px;
  @media(max-width:768px){
      flex-direction:column
  }
`

const LeftButton = styled.div` 
   background-color:rgba(23,26,32,0.8);
   height: 40px;
   width: 250px;
   color:white;
   display:flex;
   justify-content:center;
   align-items:center;
   border-radius:100px;
   opacity:0.85;
   text-transform: uppercase;
   font-size:12px;
   cursor:pointer;
   margin:8px
`
const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;
`

const DownArrow = styled.img` 
   height:40px;
   animation: animateDown 1s infinite;
   overflow-x:hidden ;
   `
const Buttons = styled.div` 
    
   `
//vw full viEw width
//