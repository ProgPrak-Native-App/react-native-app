import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Title from '../../shared/components/Title';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MotivatorRoutes } from '../Motivator';
import { MotivatorProps } from '../MotivatorProps';
import { MOTIVATOR, STYLES } from '../../shared/styles';

export default function OldMotivatorPractice(props: MotivatorProps) {
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();
  return (
    <>
      <Title Icon={() => props.icon} back={true} color={props.color} text={props.name} />
      <View style={styles.container}>
        {props.exercises?.map((exercise) => (
          <Pressable
            key={exercise.title}
            onPress={() => navigation.navigate(exercise.screen)}
            style={[styles.taskButton, STYLES.shadow]}>
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
    backgroundColor: MOTIVATOR.SECURITYNET,
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
});
