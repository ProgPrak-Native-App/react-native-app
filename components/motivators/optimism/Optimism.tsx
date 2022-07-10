import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OptimismHome from './OptimismHome';
import OptimismExercise from './OptimismExercise';

export type OptimsimRoutes = {
  OptimismHome: undefined;
  OptimismExercise: undefined;
};

const StackNavigator = createNativeStackNavigator<OptimsimRoutes>();

export default function Optimism() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen component={OptimismHome} name="OptimismHome" />
      <StackNavigator.Screen component={OptimismExercise} name="OptimismExercise" />
    </StackNavigator.Navigator>
  );
}
