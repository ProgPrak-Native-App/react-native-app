import React from 'react';
import Title from './Title';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import KopfsachenButton from './KopfsachenButton';
import { TabRoutes } from '../App';
import { PRIMARY } from '../styles';

export default function Home() {
  const navigation = useNavigation<NavigationProp<TabRoutes>>();

  return (
    <>
      <Title color={PRIMARY} text="Herzlich Willkommen!" />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Schön, dass du da bist.</Text>
        </View>
        <KopfsachenButton onPress={() => navigation.navigate('MoodDiary')} style={styles.button}>
          Ab zum Stimmungstagebuch.
        </KopfsachenButton>
        <KopfsachenButton onPress={() => navigation.navigate('Motivators')} style={styles.button}>
          Ich möchte an meinen offenen Aufgaben weiterarbeiten.
        </KopfsachenButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: -2,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textContainer: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 150,
    justifyContent: 'center',
  },
  button: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 80,
    marginHorizontal: '10%',
    marginBottom: 10,
  },
});
