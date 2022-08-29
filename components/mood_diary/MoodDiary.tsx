import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import MoodCalendar from './MoodCalendar';
import MoodEntry from './MoodEntry';
import NegativeIntro from './NegativeIntro';
import PositiveIntro from './PositiveIntro';
import NeutralIntro from './NeutralIntro';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabRoutes } from '../Routes';

export type MoodDiaryRoutes = {
  Calendar: undefined;
  MoodEntry:
    | undefined
    | {
        id?: number;
        returnFrom?: 'Motivator';
      };
  PositiveIntro: undefined;
  NeutralIntro: undefined;
  NegativeIntro: undefined;
};

export type MoodDiaryScreenProps<Screen extends keyof MoodDiaryRoutes = keyof MoodDiaryRoutes> = CompositeScreenProps<
  NativeStackScreenProps<MoodDiaryRoutes, Screen>,
  BottomTabScreenProps<TabRoutes, 'MoodDiary'>
>;

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
