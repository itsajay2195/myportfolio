import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const App = () => {
  const timelineData = [
    {
      date: "04/2009 – 11/2010",
      title:"Foodhub",
      designation:"Senior Software Engineer(React Native)",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      date: "04/2009 – 11/2010",
      designation:"SDE-2(React Native)",
      title:"Pickyourtrail",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "04/2009 – 11/2010",
      title:"Happyfox",
      designation:"React Native Engineer",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      date: "04/2009 – 11/2010",
      designation:"Software Engineer",
      title:"TPConnects",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div style={{height:"100%",overflow:'auto', backgroundColor:"black", borderRadius:10,}}>
      <Timeline lineColor={"#ddd"}>
        {
          timelineData.map((timeline,index)=>(
            <TimelineItem
            key="002"
            dateText={timeline.date}
            dateInnerStyle={{
              background: "linear-gradient(to right, #6371c7, #5563c1, #4656bb, #3848b5, #2a3bae)",
              color: "#000"
            }}
            bodyContainerStyle={{
              background: "#212121",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
            }}
            
          >
            <h3 style={{ color: "white" }}>{timeline.title}</h3>
            <h4 style={{ color: "#61b8ff" }}>{timeline.designation}</h4>
          </TimelineItem>
          ))
        }
   
      
        
      </Timeline>
    </div>
  );
};

export default App;
