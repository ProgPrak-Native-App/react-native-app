import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OldMotivator from './old_motivator/OldMotivator';
import Optimism from './optimism/Optimism';
import NewMotivator from './new_motivator/NewMotivator';
import SecurityNet from './security_net/SecurityNet';
import EmoNavigation from '../emotionalRegulation/Navigation';
import CompassionNavigation from '../compassion/CompassionNavigation';
import SocialSupportNavigation from '../social_support/SocialNavigation';
import MotivatorCompleted from '../MotivatorCompleted';
import Reframing from '../reframing/Reframing';
import NotImplemented from '../shared/components/NotImplemented';
import FeedbackNavigation from '../shared/components/Feedback';
import MotivatorOverview from './new_motivator/MotivatorOverview';

export type MotivatorRoutes = {
  NewMotivator: undefined;
  Optimism: undefined;
  EmoNavigation: undefined;
  OldMotivator: { props: unknown };
  SocialSupport: undefined;
  MotivatorOverview: undefined;
  CompassionNavigation: undefined;
  SecurityNet: undefined;
  Reframing: undefined;
  NotImplemented: undefined;
  MotivatorCompleted: undefined;
  FeedbackNavigation: { name: string; title: string; color: string };
};

const StackNavigator = createNativeStackNavigator<MotivatorRoutes>();

export default function Motivator() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen component={MotivatorOverview} name="MotivatorOverview" />
      <StackNavigator.Screen component={NewMotivator} name="NewMotivator" />
      <StackNavigator.Screen component={OldMotivator} name="OldMotivator" />
      <StackNavigator.Screen component={Optimism} name="Optimism" />
      <StackNavigator.Screen component={SecurityNet} name="SecurityNet" />
      <StackNavigator.Screen component={EmoNavigation} name="EmoNavigation" />
      <StackNavigator.Screen component={CompassionNavigation} name="CompassionNavigation" />
      <StackNavigator.Screen component={SocialSupportNavigation} name="SocialSupport" />
      <StackNavigator.Screen component={Reframing} name="Reframing" />
      <StackNavigator.Screen component={NotImplemented} name="NotImplemented" />
      <StackNavigator.Screen component={FeedbackNavigation} name="FeedbackNavigation" />
      <StackNavigator.Screen component={MotivatorCompleted} name="MotivatorCompleted" />
    </StackNavigator.Navigator>
  );
}
