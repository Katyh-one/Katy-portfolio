import React from 'react';
import type { UseContactResult } from './hook/hook';
import styled from 'styled-components';

type ContactViewProps = {
  data: UseContactResult['data'];
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
  font-family: 'Arial', sans-serif;
  background-color: #e1bee7;
`;

export const ContactView: React.FC<ContactViewProps> = ({ data }) => (
  <Box>
    <h2>Contact Me</h2>
    {data.map((item, index) => (
      <div key={index}>
        <p>{item.email}</p>
        <p>{item.phone}</p>
        <p>
          <a href={item.linkedIn}>{item.linkedIn}</a>
        </p>
        <p>
          <a href={item.github}>{item.github}</a>
        </p>
      </div>
    ))}
  </Box>
);
