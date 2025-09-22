export type UseContactResult = {
  data: {
    email: string;
    phone: string;
    linkedIn: string;
    github: string;
  }[];
  loading: boolean;
  error: boolean;
};

export const useContact = (): UseContactResult => {
  return {
    data: [
      {
        email: 'katyhatch@hotmail.com',
        phone: '07717827994',
        linkedIn: 'https://uk.linkedin.com/in/katy-hatch-7b756a26',
        github: 'https://github.com/Katyh-one'
      }
    ],
    loading: false,
    error: false
  };
};
