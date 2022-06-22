import React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import IntroScreen from "./IntroScreen";
import SupportExercise from "./SupportExercise"
import Feedback from "./Feedback";
import IntroVideoScreen from "./IntroVideoScreen";
import IntroThirdLevel from "./IntroThirdLevel";
import ThirdLevelCountDown from "./ThirdLevelCountDown";

export type SocialSupportStackParamList = {
  IntroScreen:undefined, 
  IntroVideoScreen: undefined,
  IntroThirdLevel: undefined,
  ThirdLevelCountDown: undefined,
  SupportExercise: { level :number}, 
  Feedback: { level :number}
};

export type SocialSupportStackScreenProps<T extends keyof SocialSupportStackParamList> =
  NativeStackScreenProps<SocialSupportStackParamList, T>;

const SocialSupportStack = createNativeStackNavigator();

export default function SocialSupportNavigation(){
    return(
      <SocialSupportStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SocialStart"
    >
      <SocialSupportStack.Screen name="IntroScreen" component={IntroScreen} />
      <SocialSupportStack.Screen name="IntroVideoScreen" component={IntroVideoScreen} />
      <SocialSupportStack.Screen name="IntroThirdLevel" component={IntroThirdLevel} />
      <SocialSupportStack.Screen name="ThirdLevelCountDown" component={ThirdLevelCountDown} />
      <SocialSupportStack.Screen name="SupportExercise" component={SupportExercise} />
      <SocialSupportStack.Screen name="Feedback" component={Feedback} />

    </SocialSupportStack.Navigator>
    )
  }

