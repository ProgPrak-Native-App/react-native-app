import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileOverview from './ProfileOverview';

export type ProfileRoutes = {
  ProfileOverview: undefined;
};

const StackNavigator = createNativeStackNavigator<ProfileRoutes>();

export default function Profile() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen component={ProfileOverview} name="ProfileOverview" />
    </StackNavigator.Navigator>
  );
}
