import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { ACCENT, BLACK, PRIMARY, SIZES, WHITE } from '../../styles';
import Slider from '@react-native-community/slider';

export default function A({ desc, handleInput }: { desc: string; handleInput: (v: string, val: string) => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        <Text style={styles.accent}>A</Text>
        ufgabe notieren:
      </Text>
      <Text style={styles.description}> a) Was ist meine Aufgabe?</Text>
      <TextInput
        accessibilityLabel="Trage hier eine deiner Aufgaben ein"
        multiline
        onChangeText={(v) => handleInput('desc', v)}
        placeholder="Trage hier eine deiner Aufgaben ein"
        placeholderTextColor="#4F4F4F"
        style={styles.textInput}
        value={desc}
      />
      <Text style={styles.description}>b) Wie wichtig ist die Aufgabe?</Text>
      <Slider
        maximumTrackTintColor={BLACK}
        maximumValue={5}
        minimumTrackTintColor={PRIMARY}
        minimumValue={0}
        step={1}
        style={{ width: '90%', height: 40 }}
      />
      <View style={styles.label}>
        <Text>Wenig</Text>
        <Text>Mehr</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  label: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: WHITE,
    minHeight: SIZES.target_size,
    paddingHorizontal: 10,
    width: '90%',
    fontSize: SIZES.font,
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 10,
  },
  heading: {
    alignSelf: 'flex-start',
    fontSize: SIZES.font,
    marginTop: SIZES.default_line_height,
  },
  accent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ACCENT,
  },
  description: {
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    marginVertical: SIZES.default_line_height,
    fontSize: SIZES.font,
  },
});
