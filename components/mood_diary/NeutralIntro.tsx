import Title from '../shared/components/Title';
import React from 'react';
import { MoodDiaryScreenProps } from './MoodDiary';
import { NEUTRAL } from '../shared/styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import KopfsachenButton from '../shared/components/button/KopfsachenButton';

export default function NeutralIntro({ navigation }: MoodDiaryScreenProps) {
  return (
    <>
      <Title Icon={() => <FontAwesome5 name="meh" size={80} />} back color={NEUTRAL} text="Stimmungstagebuch" />
      <Text style={styles.text}>
        Wenn du heute eher unmotiviert oder müde bist, kannst du entweder in deinem Sicherheitsnetz schauen, was dir
        sonst eine Freude bereitet oder du probierst eine neue Starkmacher-Übung aus!
      </Text>
      <View style={styles.buttonList}>
        <KopfsachenButton
          onPress={() => navigation.navigate('Motivators', { screen: 'SecurityNet', origin: 'MoodDiary' })}
          style={styles.button}>
          Sicherheitsnetz
        </KopfsachenButton>
        <KopfsachenButton
          onPress={() => navigation.navigate('Motivators', { origin: 'MoodDiary' })}
          style={styles.button}>
          Neue Starkmacher üben!
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
    flexBasis: '45%',
  },
});
