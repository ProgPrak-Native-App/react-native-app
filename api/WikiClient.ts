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
    const result = await this.get<WikiListResponse>('/wiki').catch(() => {
      Alert.alert('Keine Verbindung', 'Leider besteht zurzeit keine Verbindung zu unserem Server');
      return {
        entry_count: 0,
        entries: [],
      };
    });
    return [...result.entries, longExampleEntry];
  }
}
