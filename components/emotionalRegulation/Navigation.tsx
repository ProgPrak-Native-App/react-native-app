import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import IntroScreen from './IntroScreen';
import GroupALP, { TaskProp } from './GroupALP';
import E from './E';
import N from './N';
import NKontrolle from './NKontrolle';
import Nice from './Nice';
import { FeedbackNavigation } from '../Feedback';
import InterScreen from './InterScreen';
import Home from '../Home';

export type EmoRoutes = {
  IntroScreen: undefined;
  GroupALP: undefined;
  E: { tasks: TaskProp[] };
  N: undefined;
  InterScreen: undefined;
  Home: undefined;
  NKontrolle: undefined;
  Nice: undefined;
  FeedbackNavigation: { name: string, title: string, color: string };
};

export type StackScreenProps<T extends keyof EmoRoutes> = NativeStackScreenProps<EmoRoutes, T>;

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="IntroScreen">
      <Stack.Screen component={IntroScreen} name="IntroScreen"  />
      <Stack.Screen component={GroupALP} name="GroupALP" />
      <Stack.Screen component={E} name="E" />
      <Stack.Screen component={N} name="N" />
      <Stack.Screen component={InterScreen} name="InterScreen" />
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={NKontrolle} name="NKontrolle" />
      <Stack.Screen component={Nice}  name="Nice" />
      <Stack.Screen component={FeedbackNavigation} name="FeedbackNavigation" />
    </Stack.Navigator>
  );
}