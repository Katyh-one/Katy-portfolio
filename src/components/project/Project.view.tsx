import React from 'react';
import type { UseProjectContentResult } from './hook/hook';
import styled from 'styled-components';


type ProjectViewProps = {
  data: UseProjectContentResult['data'];
};

export const Box = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  text-align: center;
  color: #7008e7;
  background-color: #e1bee7;
`;

export const ProjectView: React.FC<ProjectViewProps> = ({ data }) => (
  <Box id="contact-section">
    <h2>My Projects</h2>
    {data.map((item, index) => (
      <div key={index}>
        <h3>{item.projectTitle}</h3>
        <p>{item.projectDescription}</p>
        <p>
          <a href={item.githubLink}>GitHub Repository</a>
        </p>
      </div>
    ))}
  </Box>
);
