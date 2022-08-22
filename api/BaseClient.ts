export default class BaseClient {
  constructor(protected baseUrl: URL | string) {}

  protected async request(method: string, path: string, options?: RequestInit): Promise<Response> {
    const url = path.includes('://')
      ? path // absolute
      : new URL(path, this.baseUrl);

    const response = await fetch(url, {
      method,
      ...options,
    });

    if (response.ok) {
      return response;
    } else {
      throw new Error(`${response.statusText}. Error code ${response.status}.`);
    }
  }

  protected async get<R>(path: string, options?: RequestInit): Promise<R> {
    const response = await this.request('GET', path, options);
    return await response.json();
  }

  protected async post(path: string, body: string | null, options?: RequestInit): Promise<Response> {
    return await this.request('POST', path, {
      ...options,
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });
  }

  protected async remove(path: string, options?: RequestInit): Promise<Response> {
    return await this.request('DELETE', path, {
      ...options,
      headers: {
        Accept: 'application/json',
        ...options?.headers,
      },
    });
  }

  protected async put(path: string, body: string | null, options?: RequestInit): Promise<Response> {
    return await this.request('PUT', path, {
      ...options,
      body,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });
  }
}
