import { Box } from '@mui/material';
import Grid  from '@mui/material/Grid';
import React from 'react';

export type SkillsViewProps = {
  data: {
    languages: string[];
    frameworks: string[];
  };
};

export const SkillsView: React.FC<SkillsViewProps> = ({ data }) => {
  return (
    <Box
        id="skills-section"
        alignItems="center"
        display="inline-flex"
        flexDirection="column"
        justifyContent="center"
        padding={4}
        width="100%"
        borderRadius={4}
        textAlign="center"
        color="#7008e7"
        bgcolor="#e1bee7">
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
    </Box>
  );
};
