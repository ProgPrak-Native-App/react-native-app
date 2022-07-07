import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from './WelcomePage';
import UserSetup from './UserSetup';

export type IntroductionProp = {
  WelcomePage: undefined;
  UserSetup: undefined;
};

const Stack = createNativeStackNavigator<IntroductionProp>();

export default function Introduction() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={WelcomePage} name="WelcomePage" />
        <Stack.Screen component={UserSetup} name="UserSetup" />
      </Stack.Navigator>
    </>
  );
}
