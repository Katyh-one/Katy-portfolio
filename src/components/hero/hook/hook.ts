import heroImage from '../../../assets/L4352241.jpg';

export type UseHeroContentResult = {
  data: {
    heroimage: {
      src: string;
      alt: string;
    };
    heading: string;
    subheading: string;
  }[];
  loading: boolean;
  error: boolean;
};

export const useHeroContent = (): UseHeroContentResult => {
  return {
    data: [
      {
        heroimage: {
          src: heroImage,
          alt: 'Image of Katy Hatch'
        },
        heading: 'Welcome to Katy Hatch\'s Portfolio',
        subheading: 'Associate Software Engineer'
      }
    ],
    loading: false,
    error: false
  };
};
