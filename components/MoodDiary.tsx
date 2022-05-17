import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Title from './Title';

const BASE_URL = 'http://192.168.82.174:4010';

type Mood = {
  type: string;
  description: string;
  timestamp: string;
};

async function getMoods(): Promise<Mood[]> {
  return (await fetch(BASE_URL + '/diary/1').then((response) => response.json())) as Mood[];
}

async function createMood(mood: Mood) {
  return await fetch(BASE_URL + '/diary/1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mood),
  });
}

export default function MoodDiary() {
  const [moods, setMoods] = useState<Mood[]>([]);
  useEffect(() => {
    if (moods.length === 0) {
      getMoods().then(setMoods);
    }
  });

  return (
    <View style={styles.container}>
      <Title text="Stimmungstagebuch" />
      {moods.map((mood) => (
        <View>
          <Text>Type: {mood.type}</Text>
          <Text>Description: {mood.description}</Text>
          <Text>Timestamp: {mood.timestamp}</Text>
        </View>
      ))}
      <View style={styles.calendar}>
        <FontAwesome5
          color="black"
          name="calendar-plus"
          onPress={() =>
            createMood({
              type: 'negative',
              description: 'stressed',
              timestamp: new Date().toISOString(),
            })
          }
          size={40}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  calendar: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
});
