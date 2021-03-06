import React from 'react';
import MotivatorSelection from './MotivatorSelection';
import NotImplemented from '../NotImplemented';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OldMotivator from './old_motivator/OldMotivator';
import Optimism from './optimism/Optimism';
import NewMotivator from './new_motivator/NewMotivator';
import SecurityNet from './security_net/SecurityNet';

export type MotivatorRoutes = {
  NewMotivator: undefined;
  Optimism: undefined;
  OldMotivator: { props: unknown };
  SocialSupport: undefined;
  MotivatorSelection: undefined;
  SecurityNet: undefined;
  NotImplemented: undefined;
};

const StackNavigator = createNativeStackNavigator<MotivatorRoutes>();

export default function Motivator() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen component={MotivatorSelection} name="MotivatorSelection" />
      <StackNavigator.Screen component={NewMotivator} name="NewMotivator" />
      <StackNavigator.Screen component={OldMotivator} name="OldMotivator" />
      <StackNavigator.Screen component={Optimism} name="Optimism" />
      <StackNavigator.Screen component={SecurityNet} name="SecurityNet" />
      <StackNavigator.Screen component={NotImplemented} name="NotImplemented" />
    </StackNavigator.Navigator>
  );
}
