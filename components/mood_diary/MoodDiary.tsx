import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoodCalendar from './MoodCalendar';
import MoodEntry from './MoodEntry';
import NegativeIntro from './NegativeIntro';
import PositiveIntro from './PositiveIntro';
import NeutralIntro from './NeutralIntro';

export type MoodDiaryRoutes = {
  Calendar: undefined;
  MoodEntry: { id: number };
  PositiveIntro: undefined;
  NeutralIntro: undefined;
  NegativeIntro: undefined;
};

const Stack = createNativeStackNavigator<MoodDiaryRoutes>();

export default function MoodDiary() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen component={MoodCalendar} name="Calendar" />
        <Stack.Screen component={MoodEntry} name="MoodEntry" />
        <Stack.Screen component={PositiveIntro} name="PositiveIntro" />
        <Stack.Screen component={NeutralIntro} name="NeutralIntro" />
        <Stack.Screen component={NegativeIntro} name="NegativeIntro" />
      </Stack.Navigator>
    </>
  );
}
