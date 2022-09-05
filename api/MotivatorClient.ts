import { Alert } from 'react-native';
import { Motivator } from '../components/motivators/model';
import AuthenticatedBaseClient from './AuthenticatedBaseClient';

export default class MotivatorClient extends AuthenticatedBaseClient {
  public async getMotivators(): Promise<Motivator[]> {
    const result = await this.get<Motivator[]>('/motivator').catch(() => {
      Alert.alert('Keine Verbindung.', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
      return [];
    });
    console.log(result);
    return result;
  }
}
