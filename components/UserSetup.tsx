import React from 'react';

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TERTIARY } from '../styles';
import { useUserContext } from './UserProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#e0ffff',
  },

  headerContainer: {
    flex: 1,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  textContainer: {
    flex: 8,
    margin: 20,
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
  },

  buttonContainer: {
    flex: 1,
  },
  button: {
    marginHorizontal: '25%',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: TERTIARY,
    justifyContent: 'center',
    height: 40,
  },
});

export default function UserSetup() {
  const { addUser } = useUserContext();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Create User</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          This is a dummy page for later to see that a user is created once the button is pressed.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => addUser({ id: 'token1' })}>
          <Text style={styles.text}>Done</Text>
        </Pressable>
      </View>
    </View>
  );
}