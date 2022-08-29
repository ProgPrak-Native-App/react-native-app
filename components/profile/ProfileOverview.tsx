import React from 'react';
import Title from '../shared/components/Title';
import ProfileOption from './ProfileOption';
import { StyleSheet, View } from 'react-native';

export default function ProfileOverview() {
  return (
    <>
      <Title text="Profil" />
      <View style={styles.container}>
        <ProfileOption icon="user-alt" title="Account" />
        <ProfileOption icon="chart-bar" title="Stimmungsverlauf" />
        <ProfileOption icon="bell" title="Benachrichtigungen" />
        <ProfileOption icon="shield-alt" title="Datenschutz" />
        <ProfileOption icon="sliders-h" title="Einstellungen" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
});
