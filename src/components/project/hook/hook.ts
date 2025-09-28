export type UseProjectContentResult = {
  data: {
    projectTitle: string;
    projectDescription: string;
    githubLink: string;
  }[];
  loading: boolean;
  error: boolean;
};

export const useProjectContent = (): UseProjectContentResult => {
  return {
    data: [
      {
        projectTitle: 'Get into tech website',
        projectDescription:
          'A website built with Python, SQL and Flask to help people find recipes based on their dietary preferences.',
        githubLink: 'https://github.com/TanyaWaqanika/CookingMamas'
      },
      {
        projectTitle: 'Portfolio Website',
        projectDescription:
          'A personal portfolio website built with React and TypeScript to showcase my skills and projects.',
        githubLink: 'https://github.com/Katyh-one/Katy-portfolio'
      }
    ],
    loading: false,
    error: false
  };
};
