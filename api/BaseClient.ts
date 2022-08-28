export default class BaseClient {
  constructor(protected baseUrl: URL | string) {}

  protected async get<R>(path: string, options?: RequestInit): Promise<R> {
    const response = await fetch(new URL(path, this.baseUrl), {
      ...options,
      method: 'GET',
      headers: { Accept: 'application/json', ...options?.headers },
    });
    if (response.ok) {
      return (await response.json()) as R;
    } else {
      throw new Error(`${response.statusText}. Error code ${response.status}.`);
    }
  }

  protected async post(path: string, body: string | null, options?: RequestInit): Promise<Response> {
    return await fetch(new URL(path, this.baseUrl), {
      ...options,
      body,
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', ...options?.headers },
    });
  }

  protected async remove(path: string, options?: RequestInit): Promise<Response> {
    return await fetch(new URL(path, this.baseUrl), {
      ...options,
      method: 'DELETE',
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  protected async put(path: string, body: string | null, options?: RequestInit): Promise<Response> {
    return await fetch(new URL(path, this.baseUrl), {
      ...options,
      method: 'PUT',
      body,
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', ...options?.headers },
    });
  }
}
