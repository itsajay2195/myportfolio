// import React from "react";
// import styled from "styled-components";
// import Section from "./Sections";

// function Home({ homeRef}) {
//   return (
//     <Container id="home" ref={homeRef}>
//       <Section
//         title="I'm Ajay, working as a React Native Developer.
//         I love to work on products whose impact makes life easier"
//         backgroundImg="model-s.jpg"
//         leftBtnText="Custom order"
//         rightBtnText="Existing Inventory"
//       />
//     </Container>
//   );
// }

// export default Home;

// const Container = styled.div`
//   height: 100vh;
// `;

import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Section from "./Sections";

const heights = ["70vh"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicMasonry() {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Masonry columns={2} spacing={2}>
        {/* {heights.map((height, index) => ( */}
          <Item key={1} sx={{ height:"70vh" }}>
            <Section
              title="I'm Ajay, working as a React Native Developer. 
        I love to work on products whose impact makes life easier"
              backgroundImg="model-s.jpg"
              leftBtnText="Custom order"
              rightBtnText="Existing Inventory"
            />
          </Item>
        {/* ))} */}
      </Masonry>
    </Box>
  );
}
