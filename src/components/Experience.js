import React from 'react';
import styled from 'styled-components';

const experienceData = [  {    company: 'Example Company 1',    position: 'Software Engineer',    duration: 'Jan 2020 - Present',    description: 'Description of the work done at Example Company 1',  },  {    company: 'Example Company 2',    position: 'Frontend Developer',    duration: 'Jul 2018 - Dec 2019',    description: 'Description of the work done at Example Company 2',  },];

const ExperienceSection = () => {
  return (
    <ExperienceWrapper>
      <ExperienceHeader>
        <ExperienceTitle>Experience</ExperienceTitle>
      </ExperienceHeader>
      <ExperienceList>
        {experienceData.map((experience, index) => (
          <ExperienceItem key={index}>
            <ExperienceItemHeader>
              <ExperienceCompany>{experience.company}</ExperienceCompany>
              <ExperienceDuration>{experience.duration}</ExperienceDuration>
            </ExperienceItemHeader>
            <ExperiencePosition>{experience.position}</ExperiencePosition>
            <ExperienceDescription>{experience.description}</ExperienceDescription>
          </ExperienceItem>
        ))}
      </ExperienceList>
    </ExperienceWrapper>
  );
};

const ExperienceWrapper = styled.div`
  padding: 40px 0;
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const ExperienceTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ExperienceItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
`;

const ExperienceItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExperienceCompany = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ExperienceDuration = styled.p`
  font-size: 1.2rem;
`;

const ExperiencePosition = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ExperienceDescription = styled.p`
  font-size: 1rem;
`;

export default ExperienceSection;
