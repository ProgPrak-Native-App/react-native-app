import { Pressable, StyleSheet, ScrollView, Text } from 'react-native';
import React from 'react';
import Title from '../Title';
import { DARK_GREY, ORANGE, SIZES, TERTIARY } from '../../styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SocialSupportStackParamList } from './SocialNavigation';

export default function IntroThirdLevel() {
  const { navigate } = useNavigation<NavigationProp<SocialSupportStackParamList>>();

  return (
    <>
      <Title back color={ORANGE} text="Soziale Unterstützung"/>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Anderen zu helfen, hilft uns nicht selten auch selbst!</Text>
        <Text style={styles.body}>
            So wie andere dich unterstützen, kannst du natürlich auch umgekehrt andere unterstützen oder tust 
            es vielleicht bereits! Immerhin und noch einmal ganz davon abgesehen, dass Unterstützung häufig auch 
            auf Gegenseitigkeit beruht – nicht selten können wir auch ein starkes Gefühl von Sinnhaftigkeit und Stolz 
            daraus ziehen, für andere da zu sein und etwas in der Welt zu bewegen! Also auf geht’s – 
            vielleicht kannst du ja auch ein Stück weit Stärke darin finden, Anderen Unterstützung zu sein, wenn sie 
            welche brauchen.
        </Text>
        <Pressable 
          onPress={()=> navigate('ThirdLevelCountDown')}
          style={styles.button}>
          <Text style={[styles.body, { fontWeight: 'bold' }]}>Weiter</Text>
        </Pressable>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '88%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  header: {
    marginVertical: 30,
    fontSize: SIZES.font * 1.4,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: SIZES.default_line_height * 1.4,
  },
  body: {
    textAlign:'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    minWidth: '60%',
    backgroundColor: TERTIARY,
    marginVertical: 30,
    borderColor: DARK_GREY,
    borderRadius: 30,
    borderWidth: 1,
  },
});
