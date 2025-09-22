import React from 'react';
import { SkillsView } from './Skills.view';
import { useSkills } from './hook/hook';

export const SkillsController: React.FC = () => {
  const { data, loading, error } = useSkills();

  if (!data || loading || error) {
    return null;
  }
  return <SkillsView data={data} />;
};
