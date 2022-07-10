import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LIGHT_BLUE, TERTIARY } from '../styles';
import { IntroductionProp } from './Introduction';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { testId } from '../util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: LIGHT_BLUE,
  },

  headerContainer: {
    flex: 1,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  textContainer: {
    flex: 8,
    margin: 20,
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
  },

  buttonContainer: {
    flex: 1,
  },
  button: {
    marginHorizontal: '25%',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: TERTIARY,
    justifyContent: 'center',
    height: 40,
  },
});

export default function WelcomePage() {
  const navigation = useNavigation<NavigationProp<IntroductionProp>>();
  const STATUSBAR_INSET_HEIGHT = useSafeAreaInsets().top;

  return (
    <View style={[styles.container, { paddingTop: STATUSBAR_INSET_HEIGHT }]} testID={testId('WelcomePage')}>
      <View style={styles.headerContainer}>
        <Text style={styles.header} testID={testId('title')}>
          Herzlich Willkommen!
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          In dieser App geht es darum deine mentale Gesundheitskompetenz auszubauen: Wir werden an deinen persönlichen
          Starkmachern arbeiten. Du wirst jeden Tag nach deiner Stimmung gefragt. Je nachdem, wie deine Stimmung ist,
          werden dir verschiedene Übungen vorgeschlagen. Diese Übungen werden dann zu deinem Starkmacherprofil
          hinzugefügt. Außerdem findest du im Wiki Erklärungen zu psychologischen Begriffen. Falls du externe Hilfe
          benötigst, findest du unter Notfallnummern verschiedene Beratungsstellen. Als erstes werden wir dein
          persönliches Profil anlegen.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate('UserSetup')} style={styles.button}>
          <Text style={styles.text} testID={testId('button')}>
            Los geht's
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
