import React from 'react';
import type { UseContactResult } from './hook/hook';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAttachEmail } from 'react-icons/md';
import { BsPhoneVibrate } from 'react-icons/bs';
import { Box } from '@mui/material';

type ContactViewProps = {
  data: UseContactResult['data'];
};

export const ContactView: React.FC<ContactViewProps> = ({ data }) => (
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
    <h2>Contact Me</h2>
    {data.map((item, index) => (
      <div key={index}>
        <p>
          <MdAttachEmail />
          {item.email}
        </p>
        <p>
          <BsPhoneVibrate />
          {item.phone}
        </p>
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
