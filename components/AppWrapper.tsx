import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useUserContext } from './UserProvider';
import Introduction from './Introduction';
import Routes from './Routes';

export default function AppWrapper() {
  const { accountKey } = useUserContext();

  return <NavigationContainer>{accountKey ? <Routes /> : <Introduction />}</NavigationContainer>;
}
