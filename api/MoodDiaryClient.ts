import { LocalDateTime } from '@js-joda/core';
import { Alert } from 'react-native';
import BaseClient from './BaseClient';

export type MoodType = 'positive' | 'neutral' | 'negative';

export type Mood = {
  id: number;
  mood_type: MoodType;
  mood_descr: string;
  mood_day: string;
};

export default class MoodDiaryClient extends BaseClient {
  public async getMoods(): Promise<Mood[]> {
    const result = await this.get<Mood[]>('/diary', {
      headers: { Authorization: 'Bearer nDpIgHo2Y2atmYVZsc2Va17XBhLVvmEA' },
    }).catch(() => {
      Alert.alert('Keine Verbindung.', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
      return [];
    });
    return result;
  }

  public async getMood(id: number): Promise<Mood> {
    const result = await this.get<Mood>(`/diary/${id}`, {
      headers: { Authorization: 'Bearer react-native-app' },
    }).catch(() => {
      Alert.alert('Keine Verbindung.', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
      return {
        id: -1,
        mood_type: 'negative' as MoodType,
        mood_descr: 'This mood is a placeholder for a failed connection.',
        mood_day: LocalDateTime.now().toString(),
      };
    });
    return result;
  }

  public async addMood(mood: Mood): Promise<void> {
    await this.post('/diary', JSON.stringify(mood), {
      headers: { Authorization: 'Bearer nDpIgHo2Y2atmYVZsc2Va17XBhLVvmEA' },
    }).catch(() => {
      Alert.alert('Keine Verbindung.', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
    });
  }

  public async updateMood(mood: Mood): Promise<void> {
    await this.put(`/diary/${mood.id}`, JSON.stringify(mood), {
      headers: { Authorization: 'Bearer nDpIgHo2Y2atmYVZsc2Va17XBhLVvmEA' },
    }).catch(() => {
      Alert.alert('Keine Verbindung', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
    });
  }

  public async deleteMood(id: number): Promise<void> {
    await this.remove(`/diary/${id}`, {
      headers: { Authorization: 'Bearer react-native-app' },
    }).catch(() => {
      Alert.alert('Keine Verbindung', 'Leider besteht zurzeit keine Verbindung zu unserem Server :(');
    });
  }
}
