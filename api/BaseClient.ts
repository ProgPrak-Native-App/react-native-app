import Constants from 'expo-constants';
export default class BaseClient {
  // Default environment is dev if not otherwise specified for NODE_ENV on runtime
  // Available environments: [live, dev, stage]
  private baseUrl: string;

  constructor(protected serviceName: URL | string) {
    this.baseUrl = `https://${serviceName}.api.${Constants?.manifest?.extra?.environment}.mindtastic.lol`;
  }

  async get<R>(path: string, options?: RequestInit): Promise<R> {
    if (options) {
      Object.assign(options, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
    }

    const response = await fetch(new URL(path, this.baseUrl), options);

    return (await response.json()) as R;
  }

  async post(path: string, body: string | null, options?: RequestInit): Promise<Response> {
    if (options) {
      Object.assign(options, {
        body: JSON.stringify(body),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return await fetch(new URL(path, this.baseUrl), { ...options });
  }

  async remove(path: string, options?: RequestInit): Promise<Response> {
    if (options) {
      Object.assign(options, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      });
    }

    return await fetch(new URL(path, this.baseUrl), options);
  }
}
