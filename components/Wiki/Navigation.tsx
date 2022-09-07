import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import EntryList from './EntryList';
import { WikiEntry } from '../../api/WikiClient';
import EntryView from './EntryView';

export type WikiStackParamList = {
  WikiEntry: WikiEntry;
  WikiStart: undefined;
};

export type WikiStackScreenProps<T extends keyof WikiStackParamList> = NativeStackScreenProps<WikiStackParamList, T>;

const WikiStack = createNativeStackNavigator<WikiStackParamList>();

export default function Navigation() {
  return (
    <WikiStack.Navigator
      initialRouteName="WikiStart"
      screenOptions={{
        headerShown: false,
      }}>
      <WikiStack.Screen component={EntryList} name="WikiStart" />
      <WikiStack.Screen component={EntryView} name="WikiEntry" />
    </WikiStack.Navigator>
  );
}
