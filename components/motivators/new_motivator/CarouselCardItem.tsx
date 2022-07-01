import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { MotivatorTypes, parseMotivator } from '../MotivatorProps';
import { MOTIVATOR, SHADOW, SIZES } from '../../../styles';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function CarouselCardItem(props: { item: keyof MotivatorTypes }) {
  const motivator = parseMotivator(props.item);
  return (
    <View style={styles.container}>
      {motivator.icon}
      <Text style={styles.header}>{motivator.name}</Text>
      <Text style={styles.text}>{motivator.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: MOTIVATOR.SECURITYNET,
    borderRadius: 8,
    width: ITEM_WIDTH,
    padding: 20,
    shadowColor: SHADOW,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  header: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  text: {
    lineHeight: SIZES.default_line_height,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: SIZES.font,
  },
});
