import React from 'react';
import NewMotivatorCreator from './new_motivator/NewMotivatorCreator';
import SituationControl from './old_motivator/SituationControl';
import MotivatorSelection from './MotivatorSelection';
import NotImplemented from '../NotImplemented';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecurityNet from './old_motivator/SecurityNet';

export type MotivatorRoutes = {
  MotivatorCreator: undefined;
  SituationControl: undefined;
  SecurityNet: undefined;
  MotivatorSelection: undefined;
  NotImplemented: undefined;
};

const StackNavigator = createNativeStackNavigator<MotivatorRoutes>();

export default function Motivator() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen component={MotivatorSelection} name="MotivatorSelection" />
      <StackNavigator.Screen component={NewMotivatorCreator} name="MotivatorCreator" />
      <StackNavigator.Screen component={SituationControl} name="SituationControl" />
      <StackNavigator.Screen component={SecurityNet} name="SecurityNet" />
      <StackNavigator.Screen component={NotImplemented} name="NotImplemented" />
    </StackNavigator.Navigator>
  );
}