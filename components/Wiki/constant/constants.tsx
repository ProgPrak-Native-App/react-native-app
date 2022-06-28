/* ----- const for export ---- */
export const ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
export const BASE_URL = 'http://127.0.0.1:4010';

/* ----- types for data handeling ---- */
export type EntryProps = {
  letter: string;
  entry: wikiEntry[];
};

export type wikiEntry = {
  id: string;
  title : string;
  contents : {
    type: 'text' | 'url';
    content: string;
  }[];
};
