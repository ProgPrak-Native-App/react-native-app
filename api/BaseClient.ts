export default class BaseClient {
  constructor(protected baseUrl: URL | string) {}

  protected async get<R>(path: string, options?: RequestInit): Promise<R> {
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

  protected async post(path: string, body: string | null, options?: RequestInit): Promise<Response> {
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

  protected async remove(path: string, options?: RequestInit): Promise<Response> {
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
