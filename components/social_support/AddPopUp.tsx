import { View, Text, TextInput, StyleSheet, Pressable, Modal } from 'react-native'
import React, { useState } from 'react'
import { AntDesign} from "@expo/vector-icons";
import { PRIMARY, SIZES} from '../../styles'

export default function PopUp ( {person, addPerson, toggle, level} : {
    person: {name: string, resource:string}, 
    addPerson: (val: {name: string, resource:string}) => void, 
    toggle: () => void,
    level: number }) {
    
    const [tmp, setTmp] = useState(person)

    const handleInput = (v: string, val: string) => {
        setTmp(prevTmp => {return {
            ...prevTmp, 
            [v]: val
        }}
      )
    }
  return (
    <Modal transparent={true}>
      <View style={styles.overlay}>
      <View style={styles.popup}>
        <View style={styles.container} >
          <Text style={styles.label}>Name:</Text>
          <TextInput 
            placeholder="Person eintragen"
            accessibilityLabel="Person eintragen"
            placeholderTextColor='#4F4F4F'
            style={styles.searchInput}
            value={tmp.name}
            onChangeText={(n) => handleInput("name", n)}

            /> 
          { level === 2 && (
          <>
            <Text style={styles.label}>Ressource:</Text>
            <TextInput 
              placeholder="Ressource eintragen"
              accessibilityLabel="Ressource eintragen"
              placeholderTextColor='#4F4F4F'
              style={styles.searchInput}
              value={tmp.resource}
              onChangeText={(r) => handleInput("resource", r)}
            />
            </>)} 
          <Pressable 
            accessibilityHint="Drücke hier um die Person hinzuzufügen"
            style={styles.safe} onPress={() => {addPerson(tmp)}}>
            <Text style={styles.btnTxt}>Speichern</Text>
          </Pressable>
          </View>
        <Pressable
          accessibilityHint="Fenster schließen"
          onPress={toggle}
          style={styles.close}>
          <AntDesign name="close" size={30} style={{alignSelf: 'center'}}/>
        </Pressable>
      </View>
      </View>
    </Modal>  
      )
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0.5,0.5,0.5,0.5)',
    height: "100%",
    width: "100%",
    position: 'absolute'
},
  popup: {
    zIndex: 100, 
    alignSelf: 'center',
    top: "40%",
    width: 300, 
    minHeight: 100,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    justifyContent: 'center'
  },
  container: {
    width: "90%",
    alignSelf: "center",
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
  
    width: "100%",
    backgroundColor: PRIMARY,
  },
  label: {
    fontSize: SIZES.font,
    paddingLeft: 10,
    marginTop: 10,
  },
  btnTxt:{
    fontSize: SIZES.font,
  },
  searchInput: {
    fontSize: SIZES.font,
    alignSelf: 'center',
    backgroundColor: '#f2f2f2',
    width: "100%",
    marginVertical: 10,
    paddingVertical: 10, 
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black'
  },
  close:{
    position: 'absolute',   
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 48,
    height: 48,
    width: 48,
    justifyContent: 'center',
    top: -15, 
    right: -15,
  },
})