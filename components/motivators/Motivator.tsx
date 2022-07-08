import React from 'react';
import MotivatorOverview from './new_motivator/MotivatorOverview';
import NotImplemented from '../shared/components/NotImplemented';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OldMotivator from './old_motivator/OldMotivator';
import Optimism from './optimism/Optimism';
import NewMotivator from './new_motivator/NewMotivator';
import EmoNavigation from '../emotionalRegulation/Navigation';
import SecurityNet from './security_net/SecurityNet';

export type MotivatorRoutes = {
  NewMotivator: undefined;
  Optimism: undefined;
  EmoNavigation: undefined;
  OldMotivator: { props: unknown };
  SocialSupport: undefined;
  MotivatorOverview: undefined;
  SecurityNet: undefined;
  NotImplemented: undefined;
};

const StackNavigator = createNativeStackNavigator<MotivatorRoutes>();

export default function Motivator() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen component={MotivatorOverview} name="MotivatorOverview" />
      <StackNavigator.Screen component={NewMotivator} name="NewMotivator" />
      <StackNavigator.Screen component={OldMotivator} name="OldMotivator" />
      <StackNavigator.Screen component={Optimism} name="Optimism" />
      <StackNavigator.Screen component={EmoNavigation} name="EmoNavigation" />
      <StackNavigator.Screen component={SecurityNet} name="SecurityNet" />
      <StackNavigator.Screen component={NotImplemented} name="NotImplemented" />
    </StackNavigator.Navigator>
  );
}
