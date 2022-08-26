import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { getMotivatorByType, MotivatorTypes } from '../MotivatorProps';
import { MOTIVATOR, SIZES, STYLES } from '../../shared/styles';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function CarouselCardItem(props: { item: keyof MotivatorTypes }) {
  const motivator = getMotivatorByType(props.item);
  return (
    <View style={[styles.container, STYLES.shadow]}>
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
