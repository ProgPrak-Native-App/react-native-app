import React from "react";
import NewMotivatorCreator from "./new_motivator/NewMotivatorCreator";
import SituationControl from "./old_motivator/SituationControl";
import MotivatorSelection from "./MotivatorSelection";
import NotImplemented from "../NotImplemented";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecurityNet from "./old_motivator/SecurityNet";

export type MotivatorRoutes = {
  MotivatorCreator: undefined;
  SituationControl: undefined;
  SecurityNet: undefined;
  MotivatorSelection: undefined;
  NotImplemented: undefined;
};

const StackNavigator = createNativeStackNavigator<MotivatorRoutes>();

export default function Motivator() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name="MotivatorSelection" component={MotivatorSelection} />
      <StackNavigator.Screen name="MotivatorCreator" component={NewMotivatorCreator} />
      <StackNavigator.Screen name="SituationControl" component={SituationControl} />
      <StackNavigator.Screen name="SecurityNet" component={SecurityNet} />
      <StackNavigator.Screen name="NotImplemented" component={NotImplemented} />
    </StackNavigator.Navigator>
  )
}
