import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export default function Enquote(props: TextProps) {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      &bdquo;{props.children}&ldquo;
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontStyle: 'italic',
  },
});
