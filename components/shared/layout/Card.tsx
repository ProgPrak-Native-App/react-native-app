import React from 'react';
import { ColorValue, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import WrapperOuter from './WrapperOuter';
import WrapperInner from './WrapperInner';
import { CARD_BACKGROUND_COLOR } from '../styles';

type CardProps = {
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[];
};

const Card = (card: CardProps) => {
  return (
    <WrapperOuter>
      <View
        style={[styles.container, card.style, { backgroundColor: card.color ? card.color : CARD_BACKGROUND_COLOR }]}>
        <WrapperInner>{card.children}</WrapperInner>
      </View>
    </WrapperOuter>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
  },
});

export default Card;
