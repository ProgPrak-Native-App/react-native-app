/* ----- const for export ---- */
export const BASE_URL = 'http://127.0.0.1:4010';

/* ----- types for data handeling ---- */
export type EntryProps = {
  letter: string;
  entry: wikiEntry[];
};

export type wikiEntry = {
  id: string;
  title: string;
  contents: {
    type: 'text' | 'url';
    content: string;
  }[];
};

/* ----- sytles ---- */
export const SIZES = {
  font: 18,
  default_line_height: 1.5 * 18,
  default_pSpace: 1.5 * 1.5 * 18,
  min_margin: 8,
  max_margin: 32,
  target_size: 48,
};
