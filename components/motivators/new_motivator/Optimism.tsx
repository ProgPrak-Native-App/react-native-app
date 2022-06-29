import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../../Title';
import { parseMotivator } from '../MotivatorProps';
import { MOTIVATOR, SHADOW, SIZES } from '../../../styles';
import { ITEM_WIDTH } from './CarouselCardItem';
import KopfsachenButton from '../../KopfsachenButton';

export default function Optimism() {
  const props = parseMotivator('optimism');
  return (
    <>
      <Title Icon={() => props.icon} color={props.color} text={props.name} />
      <View style={styles.container}>
        <Text style={styles.header}>Finde heraus,{'\n'} was dahinter steckt!</Text>
        <Image source={require('../../../assets/optimism-info-video.png')} />
      </View>

      <View style={styles.containerButtons}>
        <KopfsachenButton style={styles.button}>Andere Strategie auswählen</KopfsachenButton>
        <KopfsachenButton style={styles.button}>Das will ich üben</KopfsachenButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerButtons: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '40%',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
    textAlign: 'center',
  },
  header: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
