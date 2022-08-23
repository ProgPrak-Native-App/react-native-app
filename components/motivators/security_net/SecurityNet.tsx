import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecurityNetHome from './SecurityNetHome';
import { SafetyNetDType } from '../../../api/SecurityNetClient';
import SecurityNetItem from './SecurityNetItem';
import SecurityNetItemView from './SecurityNetItemView';
import SecurityNetAssistance from './SecurityNetAssistance';
import NotImplemented from '../../NotImplemented';

export type SecurityNetRoutes = {
  SecurityNetHome: undefined;
  SecurityNetItem: { component: SafetyNetDType; modifying: boolean };
  SecurityNetAssistance: { component: SafetyNetDType; modified: boolean; modifying: boolean };
  SecurityNetItemView: { type: string };
  NotImplemented: undefined;
};

const StackNavigator = createNativeStackNavigator<SecurityNetRoutes>();

export default function SecurityNet() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen component={SecurityNetHome} name="SecurityNetHome" />
      <StackNavigator.Screen component={SecurityNetItem} name="SecurityNetItem" />
      <StackNavigator.Screen component={SecurityNetAssistance} name="SecurityNetAssistance" />
      <StackNavigator.Screen component={SecurityNetItemView} name="SecurityNetItemView" />
      <StackNavigator.Screen component={NotImplemented} name="NotImplemented" />
    </StackNavigator.Navigator>
  );
}
