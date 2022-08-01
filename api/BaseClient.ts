import Constants from 'expo-constants';
export default class BaseClient {
  // Default environment is dev if not otherwise specified for NODE_ENV on runtime
  // Available environments: [live, dev, stage]
  private baseUrl: string;

  constructor(protected serviceName: URL | string) {
    this.baseUrl = `https://${serviceName}.api.${Constants?.manifest?.extra?.environment}.mindtastic.lol`;
  }

  async get<R>(path: string): Promise<R> {
    const response = await fetch(new URL(path, this.baseUrl), {
      method: 'GET',
    });

    return (await response.json()) as R;
  }
}
