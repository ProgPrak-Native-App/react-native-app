import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from './WelcomePage';
import UserSetup from './UserSetup';
import AccountQrScanner from './AccountQrScanner';

export type IntroductionProp = {
  WelcomePage: undefined;
  UserSetup: undefined;
  QrScanner: undefined;
};

const Stack = createNativeStackNavigator<IntroductionProp>();

export default function Introduction() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={WelcomePage} name="WelcomePage" />
      <Stack.Screen component={UserSetup} name="UserSetup" />
      <Stack.Screen component={AccountQrScanner} name="QrScanner" />
    </Stack.Navigator>
  );
}
