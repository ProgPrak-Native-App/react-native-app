import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppWrapper from './components/AppWrapper';
import { UserProvider } from './components/UserProvider';
import { BACKGROUND } from './styles';
import SafeAreaView from 'react-native-safe-area-view';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView forceInset={{ bottom: 'never', top: 'never' }} style={{ flex: 1, backgroundColor: BACKGROUND }}>
        <UserProvider>
          <AppWrapper />
        </UserProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
