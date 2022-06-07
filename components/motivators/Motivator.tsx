import React from "react";
import MotivatorCreator from "./MotivatorCreator";
import SituationControl from "./SituationControl";
import MotivatorSelection from "./MotivatorSelection";
import NotImplemented from "../NotImplemented";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type MotivatorRoutes = {
  MotivatorCreator: undefined;
  SituationControl: undefined;
  MotivatorSelection: undefined;
  NotImplemented: undefined;
};

const StackNavigator = createNativeStackNavigator<MotivatorRoutes>();

export default function Motivator() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name="MotivatorSelection" component={MotivatorSelection} />
      <StackNavigator.Screen name="MotivatorCreator" component={MotivatorCreator} />
      <StackNavigator.Screen name="SituationControl" component={SituationControl} />
      <StackNavigator.Screen name="NotImplemented" component={NotImplemented} />
    </StackNavigator.Navigator>
  )
}
