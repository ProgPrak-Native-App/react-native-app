import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import IntroScreen from './IntroScreen';
import GroupALP, { TaskProp } from './GroupALP';
import E from './E';
import N from './N';
import NKontrolle from './NKontrolle';
import Nice from './Nice';
import InterScreen from './InterScreen';
import IntroVideoScreen from './IntroVideoScreen';
import { CompositeScreenProps } from '@react-navigation/native';
import { MotivatorRoutes } from '../motivators/MotivatorNavigator';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabRoutes } from '../MainTabBar';

export type EmoRoutes = {
  IntroVideoScreen: undefined;
  IntroScreen: undefined;
  GroupALP: undefined;
  E: { tasks: TaskProp[] };
  N: undefined;
  InterScreen: undefined;
  NKontrolle: undefined;
  Nice: undefined;
};

export type StackScreenProps<T extends keyof EmoRoutes> = NativeStackScreenProps<EmoRoutes, T>;

export type EmoNavigationProps = CompositeScreenProps<
  NativeStackScreenProps<MotivatorRoutes, 'EmoNavigation'>,
  BottomTabScreenProps<TabRoutes, 'Motivators'>
>;

const Stack = createNativeStackNavigator<EmoRoutes>();

export default function EmoNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="IntroVideoScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={IntroScreen} name="IntroScreen" />
      <Stack.Screen component={IntroVideoScreen} name="IntroVideoScreen" />
      <Stack.Screen component={GroupALP} name="GroupALP" />
      <Stack.Screen component={E} name="E" />
      <Stack.Screen component={N} name="N" />
      <Stack.Screen component={InterScreen} name="InterScreen" />
      <Stack.Screen component={NKontrolle} name="NKontrolle" />
      <Stack.Screen component={Nice} name="Nice" />
    </Stack.Navigator>
  );
}
