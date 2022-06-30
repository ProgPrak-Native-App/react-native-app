import React from 'react';
import NewMotivatorCreator from './new_motivator/NewMotivatorCreator';
import MotivatorSelection from './MotivatorSelection';
import NotImplemented from '../NotImplemented';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OldMotivator from './old_motivator/OldMotivator';
import Optimism from './optimism/Optimism';

export type MotivatorRoutes = {
  NewMotivatorCreator: undefined;
  Optimism: undefined;
  OldMotivator: { props: unknown };
  MotivatorSelection: undefined;
  NotImplemented: undefined;
};

const StackNavigator = createNativeStackNavigator<MotivatorRoutes>();

export default function Motivator() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen component={MotivatorSelection} name="MotivatorSelection" />
      <StackNavigator.Screen component={NewMotivatorCreator} name="NewMotivatorCreator" />
      <StackNavigator.Screen component={OldMotivator} name="OldMotivator" />
      <StackNavigator.Screen component={Optimism} name="Optimism" />
      <StackNavigator.Screen component={NotImplemented} name="NotImplemented" />
    </StackNavigator.Navigator>
  );
}
