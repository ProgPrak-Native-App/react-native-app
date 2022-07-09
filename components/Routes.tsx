import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './Home';
import { PRIMARY, SHADOW } from '../styles';
import MoodDiary from './mood_diary/MoodDiary';
import Motivator from './motivators/Motivator';
import Wiki from './Wiki';
import Profile from './profile/Profile';
import EmergencyNumber from './feature/emergencyNumber/EmergencyNumber';

export type TabRoutes = {
  Home: undefined;
  MoodDiary: undefined;
  Wiki: undefined;
  Motivators: undefined;
  EmergencyNumber: undefined;
  Profil: undefined;
};

const Tab = createBottomTabNavigator<TabRoutes>();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: styles.label,
        tabBarItemStyle: styles.items,
        tabBarStyle: styles.bar,
        tabBarActiveBackgroundColor: PRIMARY,
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarIcon: () => <FontAwesome5 name="home" size={24} />,
        }}
      />
      <Tab.Screen
        component={MoodDiary}
        name="MoodDiary"
        options={{
          title: 'Kalender',
          tabBarIcon: () => <FontAwesome5 name="calendar-alt" size={24} />,
        }}
      />
      <Tab.Screen
        component={Wiki}
        name="Wiki"
        options={{
          tabBarIcon: () => <FontAwesome5 name="book" size={24} />,
        }}
      />
      <Tab.Screen
        component={Motivator}
        name="Motivators"
        options={{
          title: 'Übungen',
          tabBarIcon: () => <MaterialCommunityIcons name="arm-flex" size={24} />,
        }}
      />
      <Tab.Screen
        component={Profile}
        name="Profil"
        options={{
          tabBarIcon: () => <Ionicons name="person-circle-outline" size={24} />,
        }}
      />
      <Tab.Screen
        component={EmergencyNumber}
        name="EmergencyNumber"
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    paddingHorizontal: 4,
    paddingBottom: 5,
  },
  bar: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flex: 0.1,
    shadowColor: SHADOW,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: -34,
  },
  items: {
    borderRadius: 15,
    marginHorizontal: 4,
    marginVertical: 4,
  },
});
