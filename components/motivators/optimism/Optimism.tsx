import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import OptimismHome from './OptimismHome';
import OptimismExercise from './OptimismExercise';
import { CompositeScreenProps } from '@react-navigation/native';
import { MotivatorNavigatorProps, MotivatorRoutes } from '../MotivatorNavigator';

export type OptimismRoutes = {
  OptimismHome: undefined;
  OptimismExercise: undefined;
};

const StackNavigator = createNativeStackNavigator<OptimismRoutes>();

export type OptimismProps = CompositeScreenProps<
  NativeStackScreenProps<MotivatorRoutes, 'Optimism'>,
  MotivatorNavigatorProps
>;

export type OptimismScreenProps = CompositeScreenProps<NativeStackScreenProps<OptimismRoutes>, OptimismProps>;

export default function Optimism() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen component={OptimismHome} name="OptimismHome" />
      <StackNavigator.Screen component={OptimismExercise} name="OptimismExercise" />
    </StackNavigator.Navigator>
  );
}
