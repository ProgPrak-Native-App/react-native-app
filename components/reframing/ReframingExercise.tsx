import { View, Text, ScrollView, StyleSheet, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { ReframingRoutes } from './Reframing';
import { getMotivatorByType } from '../motivators/MotivatorProps';
import { BLACK, PINK, PRIMARY, SIZES, TERTIARY, WHITE } from '../shared/styles';
import Title from '../shared/components/Title';

export type Props = {
  id: number;
  text: string;
};

function Situation({ prop, handleInput }: { prop: Props; handleInput: (id: number, value: string) => void }) {
  return (
    <>
      <Text style={styles.label}>Situation {prop.id + 1}</Text>
      <TextInput
        accessibilityLabel="Trage hier eine Situation ein, die dich belastet"
        multiline
        onChangeText={(value) => handleInput(prop.id, value)}
        placeholder="Trage hier eine Situation ein, die dich belastet"
        placeholderTextColor="#4F4F4F"
        style={styles.textInput}
        value={prop.text}
      />
    </>
  );
}
export default function ReframingExercise() {
  const [count, setCount] = useState(1);
  const [textInput, setTextInput] = useState<Props[]>([{ id: 0, text: '' }]);
  const props = getMotivatorByType('reframing');
  const { navigate } = useNavigation<NavigationProp<ReframingRoutes>>();

  const handleInput = (id: number, value: string) => {
    setTextInput((prevText) => prevText.map((elem) => (elem.id === id ? { ...elem, text: value } : elem)));
  };
  const handleAddField = () => {
    setTextInput((prev) => [
      ...prev,
      {
        id: count,
        text: '',
      },
    ]);
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <Title Icon={() => props.icon} back color={PINK} text="Reframing" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>
          Welche Situation belastet dich gerade? Vielleicht gibt es auch mehrere, dann gehen wir die folgenden Schritte
          für jede Situation einzeln durch.
        </Text>

        {textInput.map((elem, idx) => (
          <Situation handleInput={handleInput} key={idx} prop={elem} />
        ))}
        <View style={styles.btnConatiner}>
          <Pressable
            onPress={handleAddField}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.button]}>
            <Text style={styles.buttonText}>Füge eine weitere Situation hinzu</Text>
          </Pressable>
          <Pressable
            onPress={() => navigate('ReframingQuestions')}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.button]}>
            <Text style={styles.buttonText}>Das sind alle Situationen, die mich aktuell beschäftigen.</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingBottom: '15%',
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
    width: '90%',
  },
  label: {
    marginVertical: 10,
    textAlign: 'left',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
    width: '90%',
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
  btnConatiner: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: BLACK,
    width: '90%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
  },
});
