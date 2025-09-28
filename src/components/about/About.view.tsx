import React from 'react';
import type { AboutResult } from './hook/hook';
import styled from 'styled-components';

type AboutViewProps = {
  data: AboutResult['data'];
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

export const AboutView: React.FC<AboutViewProps> = ({ data }) => (
  <Box id="about-section">
    {data.map((item, index) => (
      <div key={index}>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
      </div>
    ))}
  </Box>
);
