import React from 'react';
import type { UseContactResult } from './hook/hook';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAttachEmail } from 'react-icons/md';
import { BsPhoneVibrate } from 'react-icons/bs';

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
  background-color: #e1bee7;
`;

export const ContactView: React.FC<ContactViewProps> = ({ data }) => (
  <Box id="contact-section">
    <h2>Contact Me</h2>
    {data.map((item, index) => (
      <div key={index}>
       
        <p>
          <MdAttachEmail />
          {item.email}</p>
        <p>
          <BsPhoneVibrate />
          {item.phone}</p>
        <p>
          <FaLinkedin />
          <a href={item.linkedIn}>LinkedIn</a>
        </p>
        <p>
           <FaGithub />
          <a href={item.github}>Github</a>
        </p>
      </div>
    ))}
  </Box>
);
