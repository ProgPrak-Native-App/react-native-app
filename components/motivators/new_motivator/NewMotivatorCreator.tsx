import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SIZES } from '../../../styles';
import Title from '../../Title';
import CarouselCards from './CarouselCards';
import { MotivatorTypes } from '../MotivatorProps';

const motivators: (keyof MotivatorTypes)[] = ['relaxation', 'situationControl', 'optimism', 'reframing'];

export default function NewMotivatorCreator() {
  return (
    <>
      <Title text="Neue Starkmacher" />
      <View style={styles.container}>
        <Text style={styles.text}>Welche neuen Starkmacher möchtest du heute ausprobieren?</Text>
        <CarouselCards data={motivators} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
  text: {
    lineHeight: SIZES.default_line_height,
    padding: 30,
    textAlign: 'center',
    fontSize: SIZES.font,
  },
});
