import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { BACKGROUND, BLACK, PRIMARY, SIZES, WHITE } from '../../styles';

export default function PopUp({
  person,
  addPerson,
  toggle,
  level,
}: {
  person: { name: string; resource: string };
  addPerson: (val: { name: string; resource: string }) => void;
  toggle: () => void;
  level: number;
}) {
  const [tmp, setTmp] = useState(person);
  const handleInput = (v: string, val: string) => {
    setTmp((prevTmp) => {
      return {
        ...prevTmp,
        [v]: val,
      };
    });
  };
  return (
    <Modal transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              accessibilityLabel="Person eintragen"
              onChangeText={(n) => handleInput('name', n)}
              placeholder="Person eintragen"
              placeholderTextColor="#4F4F4F"
              style={styles.searchInput}
              value={tmp.name}
            />
            {level === 2 && (
              <>
                <Text style={styles.label}>Ressource:</Text>
                <TextInput
                  accessibilityLabel="Ressource eintragen"
                  onChangeText={(r) => handleInput('resource', r)}
                  placeholder="Ressource eintragen"
                  placeholderTextColor="#4F4F4F"
                  style={styles.searchInput}
                  value={tmp.resource}
                />
              </>
            )}
            <Pressable
              accessibilityHint="Drücke hier um die Person hinzuzufügen"
              onPress={() => addPerson(tmp)}
              style={styles.safe}>
              <Text style={styles.btnTxt}>Speichern</Text>
            </Pressable>
          </View>
          <Pressable accessibilityHint="Fenster schließen" onPress={toggle} style={styles.close} >
            <AntDesign name="close" size={30} style={{ alignSelf: 'center' }} />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0.5,0.5,0.5,0.5)',
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  popup: {
    zIndex: 100,
    alignSelf: 'center',
    top: '40%',
    width: 300,
    minHeight: 100,
    backgroundColor: BACKGROUND,
    borderRadius: 20,
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  safe: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: PRIMARY,
  },
  label: {
    fontSize: SIZES.font,
    paddingLeft: 10,
    marginTop: 10,
  },
  btnTxt: {
    fontSize: SIZES.font,
  },
  searchInput: {
    fontSize: SIZES.font,
    alignSelf: 'center',
    backgroundColor: BACKGROUND,
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: BLACK,
  },
  close: {
    position: 'absolute',
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: BLACK,
    borderRadius: 48,
    height: 48,
    width: 48,
    justifyContent: 'center',
    top: -15,
    right: -15,
  },
});
