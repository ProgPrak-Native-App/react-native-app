import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import IntroScreen from './IntroScreen';
import SupportExercise from './SupportExercise';
import IntroVideoScreen from './IntroVideoScreen';
import IntroThirdLevel from './IntroThirdLevel';
import ThirdLevelCountDown from './ThirdLevelCountDown';

export type SocialSupportStackParamList = {
  IntroScreen: undefined;
  IntroVideoScreen: undefined;
  IntroThirdLevel: undefined;
  ThirdLevelCountDown: undefined;
  SupportExercise: { level: number };
};

export type SocialSupportStackScreenProps<T extends keyof SocialSupportStackParamList> = NativeStackScreenProps<
  SocialSupportStackParamList,
  T
>;

const SocialSupportStack = createNativeStackNavigator<SocialSupportStackParamList>();

export default function SocialSupportNavigation() {
  return (
    <SocialSupportStack.Navigator
      initialRouteName="IntroScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <SocialSupportStack.Screen component={IntroScreen} name="IntroScreen" />
      <SocialSupportStack.Screen component={IntroVideoScreen} name="IntroVideoScreen" />
      <SocialSupportStack.Screen component={IntroThirdLevel} name="IntroThirdLevel" />
      <SocialSupportStack.Screen component={ThirdLevelCountDown} name="ThirdLevelCountDown" />
      <SocialSupportStack.Screen component={SupportExercise} name="SupportExercise" />
    </SocialSupportStack.Navigator>
  );
}
