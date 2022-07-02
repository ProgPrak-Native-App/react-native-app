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
    return [...(await this.get<WikiListResponse>('/wiki')).entries, longExampleEntry];
  }
}
