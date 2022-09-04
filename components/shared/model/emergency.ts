import { KsButtonProp } from '../components/button/LinkButton';

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
