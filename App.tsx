import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import NotImplemented from "./components/NotImplemented";
import React from "react";
import Home from "./components/Home";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PRIMARY, SECONDARY } from "./colors";
import MoodDiary from "./components/mood_diary/MoodDiary";
import Motivator from "./components/motivators/Motivator";
import Profile from "./components/profile/Profile";

export type TabRoutes = {
  Home: undefined;
  MoodDiary: undefined;
  Wiki: undefined;
  Motivators: undefined;
  EmergencyNumbers: undefined;
  Profil: undefined;
};

const Tab = createBottomTabNavigator<TabRoutes>();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
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
              component={NotImplemented}
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
              component={Profile}
              options={{
                tabBarIcon: () => <Ionicons name="person-circle-outline" size={24} />,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 11,
  },
});
