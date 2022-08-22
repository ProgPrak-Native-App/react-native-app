import React from 'react';
import ProfileOption from './ProfileOption';
import { Alert, StyleSheet, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ProfileRoutes } from './Profile';
import { useUserContext } from '../UserProvider';

export default function ProfileOverview() {
  const navigation = useNavigation<NavigationProp<ProfileRoutes>>();
  const { forgetUser } = useUserContext();

  function confirmDeleteUser() {
    Alert.alert(
      'Möchtest du dein Profil wirklich unwiderruflich löschen?',
      undefined,
      // TODO: Actually delete the user account from the backend, and only then forget
      [{ text: 'Ja', onPress: () => forgetUser() }, { text: 'Nein' }],
      { cancelable: true },
    );
  }

  return (
    <View style={styles.container}>
      <ProfileOption icon='user-alt' title='Account' />
      <ProfileOption icon='chart-bar' title='Stimmungsverlauf' />
      <ProfileOption icon='bell' title='Benachrichtigungen' />
      <ProfileOption icon='shield-alt' title='Datenschutz' />
      <ProfileOption icon='sliders-h' title='Einstellungen' />
      <ProfileOption icon='qrcode' onPress={() => navigation.navigate('ProfileExport')} title='Profil übertragen' />
      <ProfileOption color='red' icon='trash-alt' onPress={confirmDeleteUser} title='Profil löschen' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
});
