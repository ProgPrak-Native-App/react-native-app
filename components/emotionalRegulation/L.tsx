import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { ACCENT, BLACK, SIZES, WHITE } from '../../styles';

export type props = {
  days: string;
  hours: string;
  mins: string;
};
export default function L({
  time,
  deadline,
  handleInput,
  handleTextInput,
}: {
  time: props;
  deadline: string;
  handleInput: (v: string, val: string) => void;
  handleTextInput: (v: string, val: string) => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        <Text style={styles.accent}>L</Text>
        änge schätzen:
      </Text>
      <Text style={styles.description}>a) Wie lange brauche ich?</Text>
      <View style={styles.txtContainer}>
        <View style={{ alignItems: 'center' }}>
          <TextInput
            accessibilityLabel="Trage hier geschätzen Anzahl an Tagen ein"
            onChangeText={(v) => handleInput('days', v)}
            placeholder="00"
            placeholderTextColor="#4F4F4F"
            style={styles.input}
            value={time.days}
          />
          <Text style={styles.text}>Tage</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TextInput
            accessibilityLabel="Trage hier geschätzen Anzahl an Stunden ein"
            onChangeText={(v) => handleInput('hours', v)}
            placeholder="00"
            placeholderTextColor="#4F4F4F"
            style={styles.input}
            value={time.hours}
          />
          <Text style={styles.text}>Stunden</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TextInput
            accessibilityLabel="Trage hier geschätzen Anzahl an Minuten ein"
            keyboardType="numeric"
            onChangeText={(v) => handleInput('mins', v)}
            placeholder="00"
            placeholderTextColor="#4F4F4F"
            style={styles.input}
            value={time.mins}
          />
          <Text style={styles.text}>Minuten</Text>
        </View>
      </View>
      <Text style={styles.description}> b) Wann muss ich fertig sein?</Text>
      <TextInput
        accessibilityLabel="Deadline eintragen"
        multiline
        onChangeText={(v) => handleTextInput('deadline', v)}
        placeholder=""
        placeholderTextColor="#4F4F4F"
        style={styles.textInput}
        value={deadline}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    top: 0,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: WHITE,
    height: SIZES.target_size,
    width: SIZES.target_size,
    textAlign: 'center',
    fontSize: SIZES.font,
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 10,
  },
  txtContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
  },
  text: {
    fontSize: 14,
  },
  textInput: {
    backgroundColor: WHITE,
    minHeight: SIZES.target_size,
    paddingHorizontal: 10,
    minWidth: '88%',
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
