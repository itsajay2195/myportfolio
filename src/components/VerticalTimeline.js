import React from 'react';
import styled from 'styled-components';

const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  &:before {
    content: '';
    background-color: #ddd;
    height: 100%;
    width: 2px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

const TimelineItem = styled.li`
  margin-bottom: 50px;
  position: relative;
`;

const TimelineContent = styled.div`
  padding-left: 20px;
`;

const TimelineDate = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const VerticalTimeline = ({ data }) => {
  return (
    <Timeline>
      {data.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineContent>
            <TimelineDate>{item.date}</TimelineDate>
            <p>{item.content}</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default VerticalTimeline;
