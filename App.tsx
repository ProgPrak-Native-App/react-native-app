import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProvider, useUserContext } from './components/UserProvider';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Image, StatusBar, StyleSheet } from 'react-native';
import MainTabBar from './components/MainTabBar';
import { PRIMARY } from './components/shared/styles';
import Introduction from './components/first_start/Introduction';

function UserSwitch() {
  const { loading, accountKey } = useUserContext();

  if (loading) {
    // show a splash screen until the account key is loaded
    return (
      <>
        <Image source={require('./assets/splash.png')} style={StyleSheet.absoluteFill} />
        <ActivityIndicator color={PRIMARY} size={100} style={styles.spinner} />
      </>
    );
  } else if (accountKey) {
    return <MainTabBar />;
  } else {
    return <Introduction />;
  }
}

export default function App() {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <NavigationContainer>
          {/* make the status bar transparent */}
          <StatusBar translucent={true} backgroundColor="#0000" />
          <UserSwitch />
        </NavigationContainer>
      </UserProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    bottom: '14%',
    left: 0,
    right: 0,
    marginHorizontal: 'auto',
  },
});
