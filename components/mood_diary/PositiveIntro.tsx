import Title from '../shared/components/Title';
import React from 'react';
import { POSITIVE } from '../shared/styles';
import { StyleSheet, Text, View } from 'react-native';
import KopfsachenButton from '../shared/components/button/KopfsachenButton';
import { FontAwesome5 } from '@expo/vector-icons';
import { MoodDiaryScreenProps } from './MoodDiary';

export default function PositiveIntro({ navigation }: MoodDiaryScreenProps) {
  return (
    <>
      <Title Icon={() => <FontAwesome5 name="smile-beam" size={80} />} back color={POSITIVE} text="Stimmungstagebuch" />
      <Text style={styles.text}>
        Wenn du dich gerade gut fühlst, ist das genau der richtige Moment, um an deinen Starkmachern zu arbeiten!
      </Text>
      <View style={styles.buttonList}>
        <KopfsachenButton onPress={() => navigation.navigate('Home')} style={styles.button}>
          Lieber nicht.
        </KopfsachenButton>
        <KopfsachenButton onPress={() => navigation.navigate('Motivators')} style={styles.button}>
          Let's go!
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
