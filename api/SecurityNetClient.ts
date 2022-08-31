import { Alert } from 'react-native';
import BaseClient from './BaseClient';

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

export default class SecurityNetClient extends BaseClient {
  public async getItems(): Promise<SafetyNetDType[]> {
    const result = await this.get<SafetyNetDType[]>('/safetyNet', {
      headers: { Authorization: 'Bearer react-native-app' },
    }).catch(() => {
      Alert.alert('Keine Verbindung.', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
      return [];
    });
    return result;
  }

  public async addItem(item: SafetyNetDType): Promise<void> {
    await this.post('/safetyNet', JSON.stringify(item), {
      headers: { Authorization: 'Bearer react-native-app' },
    }).catch(() => {
      Alert.alert('Keine Verbindung', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
    });
  }

  public async deleteItem(item: SafetyNetDType): Promise<void> {
    await this.remove(`/safetyNet/${item.id}`, { headers: { Authorization: 'Bearer react-native-app' } }).catch(() => {
      Alert.alert('Keine Verbindung', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
    });
  }

  public async replaceItem(item: SafetyNetDType): Promise<void> {
    await this.put(`/safetyNet/${item.id}`, JSON.stringify(item), {
      headers: { Authorization: 'Bearer react-native-app' },
    }).catch(() => {
      Alert.alert('Keine Verbindung', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
    });
  }
}
