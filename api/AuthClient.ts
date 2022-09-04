import BaseClient from './BaseClient';
import md5 from 'md5';

export type Session = {
  id: string;
  active: boolean;
  expires_at: string;
  authenticated_at: string;
  identity: {
    traits: {
      accountKey: string;
    };
  };
};

export type AuthResponse = {
  session_token: string;
  session: Session;
};

export type AuthFlow = {
  id: string;
  request_url: string;
  ui: {
    action: string;
    method: string;
  };
};

export default class AuthClient extends BaseClient {
  constructor() {
    super('https://auth.api.live.mindtastic.lol/self-service');
  }

  public async startFlow(type: 'registration' | 'login'): Promise<AuthFlow> {
    return await this.get<AuthFlow>(`/${type}/api`);
  }

  private async finishFlow(flow: AuthFlow, options?: RequestInit): Promise<AuthResponse> {
    // Turn http:// into https://
    const url = flow.ui.action.replace(/^http:\/\//, 'https://');

    const response = await this.request(flow.ui.method, url, {
      ...options,
      headers: {
        Accept: 'application/json',
        ...options?.headers,
      },
    });
    return (await response.json()) as AuthResponse;
  }

  public async finishRegistrationFlow(flow: AuthFlow): Promise<AuthResponse> {
    return await this.finishFlow(flow);
  }

  public async finishLoginFlow(flow: AuthFlow, accountKey: string): Promise<AuthResponse> {
    return await this.finishFlow(flow, {
      body: JSON.stringify({
        method: 'password',
        identifier: accountKey,
        password: md5(accountKey),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
