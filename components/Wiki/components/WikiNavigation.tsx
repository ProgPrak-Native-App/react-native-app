import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WikiEntry } from "..";
import Wiki from "./Wiki"

const Stack = createNativeStackNavigator();

function WikiNavigation(){
    return(
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="WikiStart"
    >
      <Stack.Screen name="WikiStart" component={Wiki} />
      <Stack.Screen name="WikiEntry" component={WikiEntry} />
    </Stack.Navigator>
    )
  }

  export default WikiNavigation