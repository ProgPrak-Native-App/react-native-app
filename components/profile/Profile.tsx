import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileOverview from './ProfileOverview';
import ProfileExport from './ProfileExport';
import Title from '../shared/components/Title';

export type ProfileRoutes = {
  ProfileOverview: undefined;
  RegistrationScreen: undefined;
  ProfileExport: undefined;
};

const StackNavigator = createNativeStackNavigator<ProfileRoutes>();

export default function Profile() {
  return (
    <>
      <Title text="Profil" />
      <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
        <StackNavigator.Screen component={ProfileOverview} name="ProfileOverview" />
        <StackNavigator.Screen component={ProfileExport} name="ProfileExport" />
      </StackNavigator.Navigator>
    </>
  );
}
