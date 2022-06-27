import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import NotImplemented from './components/NotImplemented';
import React from 'react';
import Home from './components/Home';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PRIMARY, SECONDARY } from './styles';
import MoodDiary from './components/mood_diary/MoodDiary';
import RegistrationScreen from './components/profile/RegistrationScreen';
import WikiNavigation from './components/Wiki/components/WikiNavigation';

import Motivator from './components/motivators/Motivator';
import Profile from './components/profile/Profile';

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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarLabelStyle: styles.label,
              tabBarItemStyle: styles.items,
              tabBarStyle: styles.bar,
              tabBarInactiveBackgroundColor: '#fff',
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
              component={WikiNavigation}
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
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
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
    shadowColor: 'grey',
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
