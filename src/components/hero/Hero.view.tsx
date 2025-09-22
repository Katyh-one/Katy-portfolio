import React from 'react';
import type { UseHeroContentResult } from './hook/hook';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const ImageBox = styled.div`
  display: flex;
  flex-shrink: 0;
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
            style={{ width: '300px', borderRadius: '50%' }}
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
