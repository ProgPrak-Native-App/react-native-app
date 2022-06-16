import {LocalDate} from '@js-joda/core';

export type MoodType = 'positive' | 'neutral' | 'negative';

export type Mood = {
  type: MoodType;
  description: string;
  timestamp: string;
};

export async function getMoods(): Promise<Mood[]> {
  return [
    {
      type: 'negative',
      description: 'ängstlich',
      timestamp: LocalDate.now().minusDays(3).atStartOfDay().toString(),
    },
    {
      type: 'neutral',
      description: '',
      timestamp: LocalDate.now().minusDays(2).atStartOfDay().toString(),
    },
    {
      type: 'positive',
      description: 'dankbar',
      timestamp: LocalDate.now().minusDays(1).atStartOfDay().toString(),
    },
  ];
}
