import Title from '../shared/components/Title';
import React from 'react';
import { NEGATIVE } from '../shared/styles';
import { StyleSheet, Text, View } from 'react-native';
import KopfsachenButton from '../shared/components/button/KopfsachenButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Bold from '../shared/Bold';
import { FontAwesome5 } from '@expo/vector-icons';
import { TabRoutes } from '../../App';

export default function NegativeIntro() {
  const navigation = useNavigation<NavigationProp<TabRoutes>>();

  return (
    <>
      <Title Icon={() => <FontAwesome5 name="frown" size={80} />} back color={NEGATIVE} text="Stimmungstagebuch" />
      <Text style={styles.text}>
        Wenn es dir schlecht geht, haben wir verschiedene Optionen für dich: entweder du schaust in deinem{' '}
        <Bold>Sicherheitsnetz</Bold>, welche Aktivitäten dir in der Vergangenheit in solchen Situationen geholfen haben,
        oder du probierst heute eine <Bold>neue Strategie</Bold> zur Emotionsregulation aus. Wenn du externe Hilfe
        benötigst, haben wir auch eine Übersicht mit <Bold>Beratungsstellen</Bold> für dich.
      </Text>
      <View style={styles.buttonList}>
        <KopfsachenButton onPress={() => console.log('EmotionRegulation not implemented')} style={styles.button}>
          Sicherheits-&#13;netz
        </KopfsachenButton>
        <KopfsachenButton onPress={() => navigation.navigate('Motivators')} style={styles.button}>
          Neue Strategie
        </KopfsachenButton>
        <KopfsachenButton onPress={() => navigation.navigate('EmergencyNumber')} style={styles.button}>
          Beratungs-&#13;stellen
        </KopfsachenButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: '10%',
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
  },
  buttonList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    flexShrink: 1,
    flexBasis: '30%',
  },
});
