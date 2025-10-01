import React from 'react';
import type { AboutResult } from './hook/hook';
import { Box, Grid } from '@mui/material';

type AboutViewProps = {
  data: AboutResult['data'];
};

export const AboutView: React.FC<AboutViewProps> = ({ data }) => (
  <Box
    id="about-section"
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
    {data.map((item, index) => (
      <div key={index}>
        <h2>{item.title}</h2>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid size={6}>
            <p>{item.content}</p>
          </Grid>
          <Grid size={6}>
            <img src={item.image} alt={item.title} width="100%" height="auto" />
          </Grid>
        </Grid>
      </div>
    ))}
  </Box>
);
