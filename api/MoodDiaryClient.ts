import { Alert } from 'react-native';
import AuthenticatedBaseClient from './AuthenticatedBaseClient';

export type MoodType = 'positive' | 'neutral' | 'negative';

export type Mood = {
  id: number;
  mood_type: MoodType;
  mood_descr: string;
  mood_day: string;
};

export default class MoodDiaryClient extends AuthenticatedBaseClient {
  public async getMoods(): Promise<Mood[]> {
    return await this.get<Mood[]>('/diary').catch(() => {
      Alert.alert('Keine Verbindung.', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
      return [];
    });
  }

  public async addMood(mood: Omit<Mood, 'id'>): Promise<void> {
    await this.post('/diary', JSON.stringify(mood)).catch(() => {
      Alert.alert('Keine Verbindung.', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
    });
  }

  // FIXME: Despite being specified in the API spec, the PUT endpoint is not implemented in the backend (yet).
  //        Instead, we (ab)use the fact that multiple moods can be POSTed for each day, and use the one with the
  //        highest ID.
  public async updateMood(mood: Mood): Promise<void> {
    await this.put(`/diary/${mood.id}`, JSON.stringify(mood)).catch(() => {
      Alert.alert('Keine Verbindung', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
    });
  }

  // FIXME: Also not implemented by the backend :(
  public async deleteMood(id: number): Promise<void> {
    await this.remove(`/diary/${id}`).catch(() => {
      Alert.alert('Keine Verbindung', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
    });
  }
}
