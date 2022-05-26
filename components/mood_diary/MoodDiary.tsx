import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoodCalendar from "./MoodCalendar";
import Title from "../Title";
import NotImplemented from "../NotImplemented";

const Stack = createNativeStackNavigator();

export default function MoodDiary() {
  return (
    <>
      <Title text="Stimmungstagebuch" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Calendar" component={MoodCalendar} />
        <Stack.Screen name="MoodEntry" component={NotImplemented} />
      </Stack.Navigator>
    </>
  );
}
