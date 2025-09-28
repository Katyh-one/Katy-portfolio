import { Box } from '@mui/material';
import Grid  from '@mui/material/Grid';
import React from 'react';
import styled from 'styled-components';

export type SkillsViewProps = {
  data: {
    languages: string[];
    frameworks: string[];
  };
};

const SkillsBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  text-align: center;
  color: #7008e7;
  background-color: #e892be;
`;

export const SkillsView: React.FC<SkillsViewProps> = ({ data }) => {
  return (
    <SkillsBox>
      <h2>Skills</h2>
      <h3>Languages</h3>
      <Box
        component="ul"
        margin={1}
      >
        <Grid container spacing={2}>
          {data.languages.map(lang => (
            <Grid item key={lang}>
              <Box component="li" sx={{
                listStyleType: 'none',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                p: 2,
                border: '1px solid #7008e7',
                borderRadius: '4px',
                backgroundColor: '#f8bbd0'
              }}>
                {lang}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <h3>Frameworks</h3>
      <Box
        component="ul"
        sx={{
          listStyleType: 'none',
          padding: 0,
          display: 'flex',
          height: 20,
          alignItems: 'center',
          gap: 4,
          p: 2,
          border: '1px solid #7008e7',
          borderRadius: '4px',
          backgroundColor: '#f8bbd0'
        }}
      >
        {data.frameworks.map(framework => (
          <Box component="li" key={framework}>
            {framework}
          </Box>
        ))}
      </Box>
    </SkillsBox>
  );
};
