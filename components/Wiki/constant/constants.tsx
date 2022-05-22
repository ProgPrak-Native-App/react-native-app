import { NativeStackScreenProps } from "@react-navigation/native-stack";

/* ----- const for export ---- */
export const ALPHABET = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
export const BASE_URL = "http://127.0.0.1:4010";

/* ----- types for data handeling ---- */
export type EntryProps = {
    letter: string, 
    entry: wikiEntry[]
}

export type wikiEntry = {
    "id": "string",
    "title": "string",
    "contents": [
        {
        "type": "text",
        "content": "string"
        }
    ]
}

/* ----------------- types for navigatin wiki ----------------- */
export type RootStackParamList = {
    WikiEntry: undefined;
    Wiki: undefined;
  };
  
export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;


/* ----- sytles ---- */
export const SIZES = {
    font: 18,
    default_line_height: 1.5 * 18, 
    default_pSpace: 1.5 * 1.5 * 18, 
    min_margin: 8, 
    max_margin: 32,
    target_size: 48
  }
  