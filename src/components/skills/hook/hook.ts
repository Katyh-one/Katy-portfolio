export type SkillsData = {
  languages: string[];
  frameworks: string[];
};

export type UseSkillsResult = {
  data: SkillsData;
  loading: boolean;
  error: boolean;
};

export const useSkills = () => {
  return {
    data: {
      languages: [
        'JavaScript',
        'TypeScript',
        'Python',
        'SQL'
      ],
      frameworks: [
        'React'
      ]
    },
    loading: false,
    error: false
  };
};