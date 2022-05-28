import React from "react";
import MoodCalendar from "./MoodCalendar";
import MoodEntry from "./MoodEntry";
import NegativeIntro from "./NegativeIntro";
import PositiveIntro from "./PositiveIntro";
import NeutralIntro from "./NeutralIntro";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type MoodDiaryRoutes = {
  Calendar: undefined;
  MoodEntry: undefined;
  PositiveIntro: undefined;
  NeutralIntro: undefined;
  NegativeIntro: undefined;
};

const Stack = createNativeStackNavigator<MoodDiaryRoutes>();

export default function MoodDiary() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name="Calendar" component={MoodCalendar} />
        <Stack.Screen name="MoodEntry" component={MoodEntry} />
        <Stack.Screen name="PositiveIntro" component={PositiveIntro} />
        <Stack.Screen name="NeutralIntro" component={NeutralIntro} />
        <Stack.Screen name="NegativeIntro" component={NegativeIntro} />
      </Stack.Navigator>
    </>
  );
}
