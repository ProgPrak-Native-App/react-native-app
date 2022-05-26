import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Title from "../Title";
import { FontAwesome5 } from '@expo/vector-icons';

export default function PracticeOldMotivator() {
  return (
    <>
      <Title color={'#F2C7D0'} Icon={() => <FontAwesome5 name="list" size={60} color="black"/>} text="Situationskontrolle"/>
      <View style={styles.container}>
          <Pressable style={styles.taskButton}>
            <Text style={styles.taskButtonText}>ALPEN-Methode</Text>
          </Pressable>

          <Pressable style={styles.taskButton}>
            <Text style={styles.taskButtonText}>Übung 2</Text>
          </Pressable>

          <Pressable style={styles.taskButton}>
            <Text style={styles.taskButtonText}>Übung 3</Text>
          </Pressable>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    alignItems: 'center',
  },
  taskButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    width: '80%',
  },
  taskButtonText: {
    fontSize: 16,
    margin: 16,
    textAlign: "left",
  }
});
