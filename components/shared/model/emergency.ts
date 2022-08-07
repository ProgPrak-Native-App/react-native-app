import { KsButtonProp } from '../components/button/KsButton';

export type Emergency = {
  id?: string;
  title: string;
  logo: string;
  website: {
    link: string;
    title: string;
  };
  buttons: KsButtonProp[];
};
