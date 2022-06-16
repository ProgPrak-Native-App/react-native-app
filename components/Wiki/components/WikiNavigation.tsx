import React from 'react';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {WikiEntry} from '..';
import Wiki from './Wiki';
import {wikiEntry} from '../constant/constants';

export type WikiStackParamList = {
  WikiEntry: wikiEntry;
  WikiStart: undefined;
};

export type WikiStackScreenProps<T extends keyof WikiStackParamList> = NativeStackScreenProps<WikiStackParamList, T>;

const WikiStack = createNativeStackNavigator();

export default function WikiNavigation() {
  return (
    <WikiStack.Navigator
      initialRouteName='WikiStart'
      screenOptions={{
        headerShown: false,
      }}>
      <WikiStack.Screen component={Wiki} name='WikiStart' />
      <WikiStack.Screen component={WikiEntry} name='WikiEntry' />
    </WikiStack.Navigator>
  );
}
