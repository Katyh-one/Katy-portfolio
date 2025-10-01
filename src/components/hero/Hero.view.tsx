import React from 'react';
import type { UseHeroContentResult } from './hook/hook';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ImageBox = styled.div`
  display: flex;
  height: auto;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
`;

type HeroViewProps = {
  data: UseHeroContentResult['data'];
};

export const HeroView: React.FC<HeroViewProps> = ({ data }) => (
  <Row>
    {data.map((item, index) => (
      <React.Fragment key={index}>
        <ImageBox>
          <img
            src={item.heroimage.src}
            alt={item.heroimage.alt}
            style={{ width: '100%', borderRadius: '50%', maxWidth: '300px' }}
          />
        </ImageBox>
        <TextBox>
          <h1>{item.heading}</h1>
          <h3>{item.subheading}</h3>
        </TextBox>
      </React.Fragment>
    ))}
  </Row>
);
