import { environment } from '../../../environments/environment';

// TODO: Create search call with query object, size -> Communication with backend Team needed
// TODO: Add error handling -> connection retries & open default error dialog,
export async function get<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(environment.API_URL + path);

  return (await response.json()) as T;
}

export async function post(path: string, body: string | null, options?: RequestInit): Promise<Response> {
  if (options) {
    Object.assign(options, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return await fetch(environment.API_URL + path, { ...options, body: JSON.stringify(body) });
}

export async function remove(path: string, options?: RequestInit): Promise<Response> {
  if (options) {
    Object.assign(options, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return await fetch(environment.API_URL + path, options);
}
