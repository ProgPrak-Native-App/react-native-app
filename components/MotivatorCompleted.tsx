import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';
import Title from './Title';
import { PINK, SIZES } from '../styles';

export default function MotivatorCompleted() {
  return (
    <>
      <Title
        color={PINK}
        Icon={() => <Image source={require('../assets/motivator.png')} />}
        text="Meine Starkmacher"
      />
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>
      Die ... ist nun Teil deiner Starkmacher!
      </Text>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  text: {
    marginVertical: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: SIZES.font * 1.5,
    lineHeight: SIZES.default_line_height
  },
});
