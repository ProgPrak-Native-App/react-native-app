import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { personProp } from './Circle';
import { BACKGROUND, BLACK, PRIMARY, RED, SIZES, WHITE } from '../../styles';
import { AntDesign } from '@expo/vector-icons';

const UpdatePopUp = ({
  updatePerson,
  deletePerson,
  person,
  toggle,
  level,
  }: {
  updatePerson: (elem: personProp) => void;
  deletePerson: (elem: personProp) => void;
  person: personProp;
  toggle: () => void;
  level: number;
  }) => {

  const [update, setUpdate] = useState(person);
  const handleInput = (v: string, val: string) => {
    setUpdate((prevUpdate) => {
      return {
        ...prevUpdate, 
        [v]: val,
      }
    });
  };
    
  return (
    <Modal transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.popUp}>
            <View style={styles.container}>
            <Text style={styles.heading}>Änderungen ? </Text>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              accessibilityHint="Trage hier den Namen der Person ein"
              accessibilityLabel="Name"
              onChangeText={(val) => handleInput('name', val)}
              placeholder="Name"
              placeholderTextColor='#4F4F4F'
              style={styles.input}
              value={update.name} 
            /> 
            {level === 2 && (
              <>
                <Text style={styles.label}>Ressource:</Text>
                <TextInput
                  accessibilityHint="Trage hier die Ressource der Person ein"
                  accessibilityLabel="Ressource"
                  onChangeText={(val) => handleInput("resource",val)}
                  placeholder="Ressource"
                  placeholderTextColor='#4F4F4F'
                  style={styles.input}
                  value={update.resource}
                /> 
              </>
            )}
            <View style={styles.buttons}>
              <Pressable 
                  accessibilityHint="Drück hier um Person aus dem Kreis zu löschen."
                  onPress={() => deletePerson(person)}
                  style={[styles.button, { backgroundColor: RED}]}>
                    <Text style={styles.btnTxt}> Person Löschen</Text>
              </Pressable>
              <Pressable 
                  accessibilityHint="Drück hier um die Änderungen zu speichern."
                  onPress={ () => updatePerson(update)}
                  style={[styles.button, { backgroundColor: PRIMARY}]} >
                    <Text style={styles.btnTxt}>Änderungen Speichern</Text>
              </Pressable>
            </View>
            <Pressable 
              accessibilityLabel="Fenster schließen"
              onPress={toggle} 
              style={styles.close}>
              <AntDesign name="close" size={30} style={{ alignSelf: 'center' }}/>
            </Pressable>
          </View>
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
  popUp: {
    display: 'flex',
    position: 'absolute', 
    zIndex: 100, 
    alignSelf: 'center',
    top: '30%',
    width: 300, 
    minHeight: 250,
    backgroundColor: BACKGROUND,
    borderRadius: 5,
    justifyContent: 'center',
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: SIZES.font * 1.5,
    alignSelf: 'center',
  },
  label: {
    fontSize: SIZES.font,
    paddingLeft: 10,
    marginTop: 10,
  },
  btnTxt: {
    fontSize: SIZES.font,
  },
  input: {
    fontSize: SIZES.font,
    alignSelf: 'center',
    borderColor: BLACK,
    borderWidth: 1,
    backgroundColor: BACKGROUND,
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10, 
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  close: {
    position: 'absolute',   
    backgroundColor: WHITE,
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 48,
    height: 48,
    width: 48,
    justifyContent: 'center',
    top: -35, 
    right: -30,
  },
  buttons: {
    display: 'flex',
    flex: 1,
    marginTop: 10, 
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
  },
});

export default UpdatePopUp;
