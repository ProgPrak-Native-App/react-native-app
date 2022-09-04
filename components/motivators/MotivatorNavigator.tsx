import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Optimism from './optimism/Optimism';
import NewMotivator from './new_motivator/NewMotivator';
import SecurityNet from './security_net/SecurityNet';
import EmoNavigation, { EmoRoutes } from '../emotionalRegulation/Navigation';
import CompassionNavigation, { CompassionRoutes } from '../compassion/CompassionNavigation';
import SocialSupportNavigation from '../social_support/SocialNavigation';
import MotivatorCompleted from '../MotivatorCompleted';
import Reframing from '../reframing/Reframing';
import NotImplemented from '../shared/components/NotImplemented';
import Feedback from '../shared/components/Feedback';
import MotivatorOverview from './new_motivator/MotivatorOverview';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { MotivatorName } from './model';
import { TabRoutes } from '../MainTabBar';

export type MotivatorOrigin = 'MoodDiary';

/**
 * Routes to implementations of specific motivators.
 */
export type MotivatorImplRoutes = {
  Optimism: undefined;
  EmoNavigation: NavigatorScreenParams<EmoRoutes> | undefined;
  SocialSupport: undefined;
  CompassionNavigation: NavigatorScreenParams<CompassionRoutes> | undefined;
  SecurityNet: undefined;
  Reframing: undefined;
  NotImplemented: undefined;
};

/**
 * Includes both {@link MotivatorImplRoutes} and supporting routes.
 */
export type MotivatorRoutes = MotivatorImplRoutes & {
  NewMotivator: undefined;
  MotivatorOverview: undefined;
  MotivatorCompleted: {
    origin?: MotivatorOrigin;
    motivator: MotivatorName;
  };
  Feedback: {
    motivator: MotivatorName;
  };
};

export type MotivatorNavigatorProps = BottomTabScreenProps<TabRoutes, 'Motivators'>;

const StackNavigator = createNativeStackNavigator<MotivatorRoutes>();

export default function MotivatorNavigator(props: MotivatorNavigatorProps) {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen component={MotivatorOverview} name="MotivatorOverview" />
      <StackNavigator.Screen component={NewMotivator} name="NewMotivator" />
      <StackNavigator.Screen component={Optimism} name="Optimism" />
      <StackNavigator.Screen component={SecurityNet} name="SecurityNet" />
      <StackNavigator.Screen component={EmoNavigation} name="EmoNavigation" />
      <StackNavigator.Screen component={CompassionNavigation} name="CompassionNavigation" />
      <StackNavigator.Screen component={SocialSupportNavigation} name="SocialSupport" />
      <StackNavigator.Screen component={Reframing} name="Reframing" />
      <StackNavigator.Screen component={NotImplemented} name="NotImplemented" />
      <StackNavigator.Screen component={Feedback} name="Feedback" />
      <StackNavigator.Screen
        component={MotivatorCompleted}
        initialParams={{ origin: props.route.params?.origin }}
        name="MotivatorCompleted"
      />
    </StackNavigator.Navigator>
  );
}
