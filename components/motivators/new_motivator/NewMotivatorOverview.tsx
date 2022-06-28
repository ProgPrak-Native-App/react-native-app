import React from 'react';
import { Image, StyleSheet, View, Text, ImageSourcePropType } from 'react-native';

type Props = {
  title: string;
  icon: ImageSourcePropType;
  description: string;
};

export default function NewMotivatorOverview({ title, description, icon }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.titletext}>{title}</Text>
      </View>
      <Image source={icon} style={styles.icon} />
      <View style={styles.textcontainer}>
        <Text style={styles.descriptiontext}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titletext: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descriptiontext: {
    fontSize: 20,
    textAlign: 'center',
  },
  textcontainer: {
    flexGrow: 0,
    flexShrink: 1,
    justifyContent: 'center',
  },
  container: {
    flexGrow: 0,
    flexShrink: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 128,
    height: 128,
  },
});
