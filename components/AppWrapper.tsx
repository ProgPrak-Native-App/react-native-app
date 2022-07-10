import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useUserContext } from './UserProvider';
import Introduction from './Introduction';
import Routes from './Routes';

export default function AppWrapper() {
  const { user } = useUserContext();

  return <NavigationContainer>{user ? <Routes /> : <Introduction />}</NavigationContainer>;
}
