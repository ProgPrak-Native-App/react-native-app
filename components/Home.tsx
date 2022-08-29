import React from 'react';
import Title from './shared/components/Title';
import { StyleSheet, Text, View } from 'react-native';
import KopfsachenButton from './shared/components/button/KopfsachenButton';
import { BACKGROUND, PRIMARY } from './shared/styles';
import { TabRoutes } from './Routes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export default function Home({ navigation }: BottomTabScreenProps<TabRoutes, 'Home'>) {
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
        <KopfsachenButton
          onPress={() =>
            navigation.navigate('Motivators', {
              screen: 'EmoNavigation',
              params: { screen: 'NKontrolle' },
            })
          }
          style={styles.button}>
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
    backgroundColor: BACKGROUND,
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
