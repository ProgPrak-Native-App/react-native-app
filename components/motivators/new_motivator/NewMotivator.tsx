import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SIZES } from '../../../styles';
import Title from '../../Title';
import CarouselCards from './CarouselCards';
import { MotivatorTypes } from '../MotivatorProps';

const motivators: (keyof MotivatorTypes)[] = ['relaxation', 'situationControl', 'optimism', 'reframing'];

export default function NewMotivator() {
  return (
    <>
      <Title back={true} text="Neue Starkmacher" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Welche neuen Starkmacher möchtest du heute ausprobieren?</Text>
          <CarouselCards data={motivators} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    lineHeight: SIZES.default_line_height,
    paddingTop: 25,
    paddingHorizontal: 30,
    textAlign: 'center',
    fontSize: SIZES.font,
  },
});
