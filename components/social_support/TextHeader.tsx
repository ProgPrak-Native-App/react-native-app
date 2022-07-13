import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

export type textProps = {
  id: number;
  title: string;
  subtitle: string;
  goBack: (id: number) => void;
  goAhead: (id: number) => void;
};

function TextHeader(props: textProps) {
  return (
    <View>
      <View style={styles.header}>
        <Pressable
          accessibilityLabel="Weiter"
          onPress={() => props.goBack(props.id)}
          style={[styles.button, styles.goBack]}>
          <AntDesign color="black" name="left" size={30} />
        </Pressable>
        <Text style={styles.headerTxt}>{props.title}</Text>
        <Pressable
          accessibilityLabel="Zurück"
          onPress={() => props.goAhead(props.id)}
          style={[styles.button, styles.goAhead]}>
          <AntDesign color="black" name="right" size={30} />
        </Pressable>
      </View>
      <View>
        <Text style={styles.text}>{props.subtitle}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTxt: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 10,
    lineHeight: 18 * 1.5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
    marginTop: 20,
  },
  goBack: {
    marginLeft: 55,
  },
  goAhead: {
    marginRight: 55,
  },
});

export default TextHeader;
