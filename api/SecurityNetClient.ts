import { Alert } from 'react-native';
import AuthenticatedBaseClient from './AuthenticatedBaseClient';

export type SafetyNetDType = {
  id: number;
  type: string;
  name: string;
  strategies: [string, string, string];
};

export const empty: SafetyNetDType = {
  id: NaN,
  type: '',
  name: '',
  strategies: ['', '', ''],
};

export default class SecurityNetClient extends AuthenticatedBaseClient {
  public async getItems(): Promise<SafetyNetDType[]> {
    const result = await this.get<SafetyNetDType[]>('/safetyNet').catch(() => {
      Alert.alert('Keine Verbindung.', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
      return [];
    });
    return result;
  }

  public async addItem(item: SafetyNetDType): Promise<void> {
    await this.post('/safetyNet', JSON.stringify(item)).catch(() => {
      Alert.alert('Keine Verbindung', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
    });
  }

  public async deleteItem(item: SafetyNetDType): Promise<void> {
    await this.remove(`/safetyNet/${item.id}`).catch(() => {
      Alert.alert('Keine Verbindung', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
    });
  }

  public async replaceItem(item: SafetyNetDType): Promise<void> {
    await this.put(`/safetyNet/${item.id}`, JSON.stringify(item)).catch(() => {
      Alert.alert('Keine Verbindung', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
    });
  }
}
