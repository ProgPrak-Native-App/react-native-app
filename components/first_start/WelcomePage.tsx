import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LIGHT_BLUE, SIZES } from '../shared/styles';
import { IntroductionProp } from './Introduction';
import KopfsachenButton from '../shared/components/button/KopfsachenButton';
import Title from '../shared/components/Title';

export default function WelcomePage() {
  const navigation = useNavigation<NavigationProp<IntroductionProp>>();

  return (
    <View style={styles.container}>
      <Title emergencyButton={false} text="Herzlich Willkommen!" />
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            In dieser App geht es darum, deine mentale Gesundheitskompetenz auszubauen: Wir werden an deinen
            persönlichen Starkmachern arbeiten. Du wirst jeden Tag nach deiner Stimmung gefragt. Je nachdem, wie deine
            Stimmung ist, werden dir verschiedene Übungen vorgeschlagen. Diese Übungen werden dann zu deinem
            Starkmacherprofil hinzugefügt. Außerdem findest du im Wiki Erklärungen zu psychologischen Begriffen. Falls
            du externe Hilfe benötigst, findest du unter Notfallnummern verschiedene Beratungsstellen. Als erstes werden
            wir dein persönliches Profil anlegen.
          </Text>
        </View>
      </ScrollView>
      <KopfsachenButton onPress={() => navigation.navigate('UserSetup')} style={styles.button}>
        Los geht's
      </KopfsachenButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: LIGHT_BLUE,
  },

  textContainer: {
    margin: SIZES.max_margin,
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
  },

  button: {
    flexGrow: 0,
    flexShrink: 1,
    marginHorizontal: '10%',
    marginBottom: 10,
  },
});
