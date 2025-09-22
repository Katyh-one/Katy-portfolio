import React from 'react';
import styled from 'styled-components';

export type SkillsViewProps = {
  data: {
    languages: string[];
    frameworks: string[];
  };
};

const SkillsBox = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
`;

export const SkillsView: React.FC<SkillsViewProps> = ({ data }) => {
  return (
    <SkillsBox>
      <h2>Skills</h2>
      <h3>Languages</h3>
      <ul>
        {data.languages.map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <h3>Frameworks</h3>
      <ul>
        {data.frameworks.map(framework => (
          <li key={framework}>{framework}</li>
        ))}
      </ul>
    </SkillsBox>
  );
};
