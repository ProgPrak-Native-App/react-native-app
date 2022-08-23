import { Alert } from 'react-native';
import BaseClient from './BaseClient';
import longExampleEntry from './wiki-long-example.json';

export type WikiEntry = {
  id: string;
  title: string;
  content: string;
};

export type WikiListResponse = {
  entry_count: number;
  entries: WikiEntry[];
};

export default class WikiClient extends BaseClient {
  public async getEntries(): Promise<WikiEntry[]> {
    let result: WikiListResponse = {
      entry_count: 0,
      entries: [],
    };
    await this.get<WikiListResponse>('/wiki')
      .then((response) => {
        result = response;
      })
      .catch(() => {
        Alert.alert('Keine Verbindung', 'Leider besteht zurzeit keine Verbindung zu unserem Server');
      });
    return [...result.entries, longExampleEntry];
  }
}
