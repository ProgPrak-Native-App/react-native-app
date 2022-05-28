import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Title from "../Title";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabRoutes } from "../../App";

type motivatorProps = {
  motivatorName: string;
  motivatorColor: string;
  motivatorIcon: () => JSX.Element;
  exercises: exercise[]
}

export type exercise = {title: string; screen: keyof TabRoutes }

export default function PracticeOldMotivator(props: motivatorProps) {
  const navigation = useNavigation<NavigationProp<TabRoutes>>();
  return (
    <>
      <Title color={props.motivatorColor} Icon={props.motivatorIcon} text={props.motivatorName}/>
      <View style={styles.container}>
        {props.exercises.map(exercise =>
          <Pressable style={styles.taskButton} onPress={() => navigation.navigate(exercise.screen)}>
            <Text style={styles.taskButtonText}>{exercise.title}</Text>
          </Pressable>
        )}
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
