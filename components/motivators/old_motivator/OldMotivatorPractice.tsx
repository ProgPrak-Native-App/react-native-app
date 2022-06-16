import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Title from '../../Title';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MotivatorRoutes} from '../Motivator';
import {MotivatorProps} from '../MotivatorProps';

export default function OldMotivatorPractice(props: MotivatorProps) {
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();
  return (
    <>
      <Title Icon={() => props.icon} color={props.color} text={props.name} />
      <View style={styles.container}>
        {props.exercises?.map(exercise => (
          <Pressable
            key={exercise.title}
            onPress={() => navigation.navigate(exercise.screen)}
            style={[styles.taskButton, styles.shadow]}>
            <Text style={styles.taskButtonText}>{exercise.title}</Text>
          </Pressable>
        ))}
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
    backgroundColor: '#EAFAFE',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    width: '80%',
  },
  taskButtonText: {
    fontSize: 16,
    margin: 16,
    textAlign: 'left',
  },
  shadow: {
    elevation: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
