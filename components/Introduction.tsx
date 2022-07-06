import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from './WelcomePage';
import UserSetup from './UserSetup';

const Stack = createNativeStackNavigator();

export default function Introduction() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="UserSetup" component={UserSetup} />
      </Stack.Navigator>
    </>
  );
}
