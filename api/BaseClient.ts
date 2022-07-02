export default class BaseClient {
  constructor(protected baseUrl: URL | string) {}

  protected async get<R>(path: string): Promise<R> {
    const response = await fetch(new URL(path, this.baseUrl), {
      method: 'GET',
    });

    return (await response.json()) as R;
  }
}
