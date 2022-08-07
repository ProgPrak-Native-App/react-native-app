import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppWrapper from './components/AppWrapper';
import { UserProvider } from './components/UserProvider';
import { BACKGROUND } from './components/shared/styles';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['right', 'left']} style={{ flex: 1, backgroundColor: BACKGROUND }}>
        <UserProvider>
          <AppWrapper />
        </UserProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
