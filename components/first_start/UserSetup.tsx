import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useUserContext } from '../UserProvider';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IntroductionProp } from './Introduction';
import Title from '../shared/components/Title';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import KopfsachenButton from '../shared/components/button/KopfsachenButton';
import Bold from '../shared/Bold';
import { SIZES } from '../shared/styles';

export default function UserSetup() {
  const { register } = useUserContext();
  const navigation = useNavigation<NavigationProp<IntroductionProp>>();

  return (
    <>
      <Title emergencyButton={false} text="Herzlich Willkommen!" />
      <View style={styles.textContainer}>
        <MaterialCommunityIcons color="black" name="account-sync" size={80} />
        <Text style={styles.text}>
          Falls du die Kopfsachen-App schon auf einem anderen Gerät benutzt, kannst mit beiden Geräten am gleichen Stand
          arbeiten.
        </Text>
      </View>
      <KopfsachenButton onPress={() => navigation.navigate('QrScanner')} style={styles.button}>
        Ich benutze die Kopfsachen-App <Bold>bereits auf einem anderen Gerät</Bold> und möchte hier weiterarbeiten.
      </KopfsachenButton>

      <View style={styles.spacer} />

      <View style={styles.textContainer}>
        <MaterialCommunityIcons color="black" name="account-plus" size={80} />
        <Text style={styles.text}>
          Benutzt du die Kopfsachen-App zum ersten Mal oder möchtest neu beginnen, lege hier los.
        </Text>
      </View>
      <KopfsachenButton onPress={() => register()} style={styles.button}>
        Ich benutze die Kopfsachen-App <Bold>zum ersten Mal</Bold>.
      </KopfsachenButton>
    </>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  spacer: {
    height: '5%',
  },

  text: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: SIZES.font,
    textAlign: 'left',
    marginHorizontal: 10,
  },

  button: {
    flexGrow: 0,
    flexShrink: 1,
    marginHorizontal: '10%',
    marginBottom: 10,
  },
});
