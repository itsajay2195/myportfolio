import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Section from "./components/Sections";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import HireMeButton from "./components/HireMeBtn";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const heights = ["50vh", "40vh", "60vh", "50vh"];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.085),
  textAlign: "center",
  borderRadius: 10,
}));

const getCurrentTime = () => {
  const hours = new Date().getHours();
  return hours;
};

const getGreeting = (currentTime) => {
  let greeting = '';
  if (currentTime >= 5 && currentTime < 12) {
    greeting = 'Good morning';
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  return greeting;
};


export default function BasicMasonry() {
  const [dateTime, setDateTime] = React.useState("");
  const [greeting, setGreeting] = React.useState('');

  const getCurrentDateTime = (offset) => {
    const date = new Date();
    const utcTimestamp = date.getTime() + date.getTimezoneOffset() * 60000;
    const currentTimestamp = utcTimestamp + offset * 60 * 1000;

    const dateOptions = { month: "short", day: "numeric", year: "numeric" };
    const timeOptions = { hour: "numeric", minute: "numeric" };

    const formattedDate = new Date(currentTimestamp).toLocaleDateString(
      "en-US",
      dateOptions
    );
    const formattedTime = new Date(currentTimestamp).toLocaleTimeString(
      "en-US",
      timeOptions
    );

    return {
      date: formattedDate,
      time: formattedTime,
    };
  };

  React.useEffect(() => {
    const offset = new Date().getTimezoneOffset();
    const currentTime = getCurrentTime();
    setDateTime(getCurrentDateTime(offset));
    setGreeting(getGreeting(currentTime));
  }, []);

  const componentDecider = (index, height) => {
    switch (index) {
      case 0:
        return (
          <Section
            dateTime={dateTime}
            greeting={greeting}
            title="I'm Ajay, working as a React Native Developer. 
            I love to work on products whose impact makes life easier"
          />
        );
      case 1:
        return <Skills height={height} />;
      case 2:
        return <Experience height={height} />;
      case 3:
        return <Projects height={height} />;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage:
          "linear-gradient(to right, #6371c7, #5563c1, #4656bb, #3848b5, #2a3bae)",
      }}
    >
      {/* <Contact/> */}
      <HireMeButton />
      <Masonry columns={2} spacing={0.35}>
        {heights.map((height, index) => (
          <Item key={1} sx={{ height: height }}>
            {componentDecider(index, height)}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
