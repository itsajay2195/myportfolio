import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import styled from "styled-components";

const App = () => {
  const timelineData = [
    {
      date: "09/2022 – 02/2023",
      location: "Chennai, Tamil Nadu,India.",
      title: "Foodhub",
      designation: "Senior Software Engineer(React Native)",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      date: "04/2022 – 09/2022",
      designation: "SDE-2(React Native)",
      location: "Chennai, Tamil Nadu,India.",
      title: "Pickyourtrail",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "07/2019 – 03/2022",
      location: "Chennai, Tamil Nadu,India.",
      title: "Happyfox",
      designation: "React Native Engineer",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      date: "10/2017 – 15/2019",
      location: "Dubai, UAE.",
      designation: "Software Engineer",
      title: "TPConnects Technologies LLP",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div
      style={{
        height: "100%",
        overflow: "auto",
        backgroundColor: "black",
        borderRadius: 10,
      }}
    >
      <div
        style={{
          position:"absolute",
          display: "flex",
          height:"40px",
          width:"50%",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeaderText style>Experience</HeaderText>
      </div>
      <Timeline lineColor={"#ddd"}>
        {timelineData.map((timeline, index) => (
          <TimelineItem
            key="002"
            dateText={timeline.date}
            dateInnerStyle={{
              background:
                "linear-gradient(to right, #6371c7, #5563c1, #4656bb, #3848b5, #2a3bae)",
              color: "#000",
            }}
            bodyContainerStyle={{
              background: "#212121",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3 style={{ color: "white" }}>{timeline.title}</h3>
            <h3 style={{ color: "grey", fontSize: "12px" }}>
              {timeline.location}
            </h3>
            <Name>{timeline.designation}</Name>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default App;

const Name = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
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