import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import IntroVideoScreen from './IntroVideoScreen';
import ReframingExercise from './ReframingExercise';
import ReframingFurtherQuestions from './ReframingFurtherQuestions';
import ReframingQuestions from './ReframingQuestions';

export type ReframingRoutes = {
  IntroVideoScreen: undefined;
  ReframingExercise: undefined;
  ReframingQuestions: undefined;
  ReframingFurtherQuestions: undefined;
};

const Stack = createNativeStackNavigator<ReframingRoutes>();

export default function Refraiming() {
  return (
    <>
      <Stack.Navigator initialRouteName="IntroVideoScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen component={IntroVideoScreen} name="IntroVideoScreen" />
        <Stack.Screen component={ReframingExercise} name="ReframingExercise" />
        <Stack.Screen component={ReframingQuestions} name="ReframingQuestions" />
        <Stack.Screen component={ReframingFurtherQuestions} name="ReframingFurtherQuestions" />
      </Stack.Navigator>
    </>
  );
}
