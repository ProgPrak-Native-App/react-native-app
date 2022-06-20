import React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import NotImplemented from "./NotImplemented";

import Home from "./Home";
import { PRIMARY, SECONDARY } from "../styles";
import MoodDiary from "./mood_diary/MoodDiary";
import RegistrationScreen from "./profile/RegistrationScreen";
import Motivator from "./motivators/Motivator";
import { Wiki } from "./Wiki";

export type TabRoutes = {
    Home: undefined;
    MoodDiary: undefined;
    Wiki: undefined;
    Motivators: undefined;
    EmergencyNumbers: undefined;
    Profil: undefined;
  };
  
const Tab = createBottomTabNavigator<TabRoutes>();

const styles = StyleSheet.create({
  label: {
    fontSize: 11,
  },
});


export default function Routes () {
    return (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: styles.label,
            tabBarInactiveBackgroundColor: PRIMARY,
            tabBarActiveBackgroundColor: SECONDARY,
            tabBarInactiveTintColor: "black",
            tabBarActiveTintColor: "black",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: () => <FontAwesome5 name="home" size={24} />,
            }}
          />
          <Tab.Screen
            name="MoodDiary"
            component={MoodDiary}
            options={{
              title: "Stimmungs\u00adtagebuch",
              tabBarIcon: () => <FontAwesome5 name="calendar-alt" size={24} />,
            }}
          />
          <Tab.Screen
            name="Wiki"
            component={Wiki}
            options={{
              tabBarIcon: () => <FontAwesome5 name="book" size={24} />,
            }}
          />
          <Tab.Screen
            name="Motivators"
            component={Motivator}
            options={{
              title: "Starkmacher",
              tabBarIcon: () => <MaterialCommunityIcons name="arm-flex" size={24} />,
            }}
          />
          <Tab.Screen
            name="EmergencyNumbers"
            component={NotImplemented}
            options={{
              title: "Notfall\u00adnummern",
              tabBarIcon: () => <FontAwesome5 name="first-aid" size={24} />,
            }}
          />
          <Tab.Screen
            name="Profil"
            component={RegistrationScreen}
            options={{
              tabBarIcon: () => <Ionicons name="person-circle-outline" size={24} />,
            }}
          />   
        </Tab.Navigator>
    );
}