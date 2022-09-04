import BaseClient from './BaseClient';

export default class AuthenticatedBaseClient extends BaseClient {
  constructor(protected readonly sessionToken?: string) {
    super('https://diary.api.live.mindtastic.lol');
  }

  protected async request(method: string, path: string, options?: RequestInit): Promise<Response> {
    if (this.sessionToken) {
      options = {
        ...options,
        headers: {
          Authorization: `Bearer ${this.sessionToken}`,
          ...options?.headers,
        },
      };
    }

    return super.request(method, path, options);
  }
}
