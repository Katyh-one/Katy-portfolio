import React from 'react';
import type { UseProjectContentResult } from './hook/hook';
import { Box } from '@mui/material';

type ProjectViewProps = {
  data: UseProjectContentResult['data'];
};


export const ProjectView: React.FC<ProjectViewProps> = ({ data }) => (
  <Box
    id="contact-section"
    alignItems="center"
    display="inline-flex"
    flexDirection="column"
    justifyContent="center"
    padding={4}
    width="100%"
    borderRadius={4}
    textAlign="center"
    color="#7008e7"
    bgcolor="#e1bee7"
  >
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
