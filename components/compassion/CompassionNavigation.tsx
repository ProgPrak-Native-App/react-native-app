import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CompassionMeditation from './CompassionMeditation';
import IntroScreen from './IntroScreen';
import IntroVideoScreen from './IntroVideoScreen';
import NewMotivator from '../motivators/new_motivator/NewMotivator';

export type CompassionRoutes = {
  IntroScreen: undefined;
  IntroVideoScreen: undefined;
  NewMotivator: undefined;
  CompassionMeditation: undefined;
};

const CompassionStack = createNativeStackNavigator<CompassionRoutes>();

export default function CompassionNavigation() {
  return (
    <>
      <CompassionStack.Navigator initialRouteName="IntroVideoScreen" screenOptions={{ headerShown: false }}>
        <CompassionStack.Screen component={IntroScreen} name="IntroScreen" />
        <CompassionStack.Screen component={IntroVideoScreen} name="IntroVideoScreen" />
        <CompassionStack.Screen component={CompassionMeditation} name="CompassionMeditation" />
        <CompassionStack.Screen component={NewMotivator} name="NewMotivator" />
      </CompassionStack.Navigator>
    </>
  );
}
