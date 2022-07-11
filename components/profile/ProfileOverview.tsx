import React from 'react';
import Title from '../Title';
// add user-circle as title icon
import ProfileOption from './ProfileOption';
import { View, StyleSheet, NativeModules } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ProfileRoutes } from './Profile';
import { removeLocalStoreData } from '../UserProvider/store';

const killMe = () => {
  removeLocalStoreData().then(NativeModules.DevSettings.reload());
};

export default function ProfileOverview() {
  const navigation = useNavigation<NavigationProp<ProfileRoutes>>();

  return (
    <>
      <Title text="Profil" />
      <View style={styles.container}>
        <ProfileOption icon="user-alt" onPress={() => navigation.navigate('RegistrationScreen')} title="Account" />
        <ProfileOption icon="chart-bar" title="Stimmungsverlauf" />
        <ProfileOption icon="bell" title="Benachrichtigungen" />
        <ProfileOption icon="shield-alt" title="Datenschutz" />
        <ProfileOption icon="sliders-h" title="Einstellungen" />
        <ProfileOption icon="bomb" onPress={() => killMe()} title="Mr. Meeseeks!" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
});
