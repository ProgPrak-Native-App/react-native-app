import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { FeedbackNavigation } from '../Feedback';
import Home from '../Home';
import CompassionMeditation from './CompassionMeditation';
import IntroScreen from './IntroScreen';
import IntroVideoScreen from './IntroVideoScreen';

export type CompassionRoutes = {
  Home: undefined;
  IntroScreen: undefined;
  IntroVideoScreen: undefined;
  CompassionMeditation: undefined;
  FeedbackNavigation: { name: string, title: string, color: string };
};

const Stack = createNativeStackNavigator<CompassionRoutes>();

export default function CompassionNavigation() {
  return (
    <>
      <Stack.Navigator initialRouteName="IntroScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={IntroScreen} name="IntroScreen" />
        <Stack.Screen component={IntroVideoScreen} name="IntroVideoScreen" />
        <Stack.Screen component={CompassionMeditation} name="CompassionMeditation" />
        <Stack.Screen component={FeedbackNavigation} name="FeedbackNavigation" />
      </Stack.Navigator>
    </>
  );
}