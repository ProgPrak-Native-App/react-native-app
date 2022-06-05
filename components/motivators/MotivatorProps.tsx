import { MotivatorRoutes } from "./Motivator";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { MOTIVATOR } from "../../colors";

export type Exercise = {title: string; screen: keyof MotivatorRoutes }

export type MotivatorTypes = {
  situationControl: string;
  relaxation: string;
  noMotivator: string
};

export type MotivatorProps = {
  name: string;
  color: string;
  icon: () => JSX.Element;
  exercises: Exercise[]
  screen: keyof MotivatorRoutes
}

//mock exercise screens
const mockExercise1: Exercise = {title: "Übung 1", screen: "NotImplemented"}
const mockExercise2: Exercise = {title: "Übung 2", screen: "NotImplemented"}
const mockExercise3: Exercise = {title: "Übung 3", screen: "NotImplemented"}

const mockExercises = [mockExercise1, mockExercise2, mockExercise3]

//Situationkontrolle

const situationControl: MotivatorProps = {
  name: "Situationskontrolle",
  color: MOTIVATOR.SITUATIONCONTROLL,
  exercises: mockExercises,
  icon: () => <Image style={styles.image} source={require("../../assets/situationControlIcon.png")} />,
  screen: "SituationControl"
}

//Sicherheitsnetz
const relaxation: MotivatorProps = {
  name: "Sicherheitsnetz",
  color: MOTIVATOR.SECURITYNET,
  exercises: mockExercises,
  icon: () => <Image style={styles.image} source={require("../../assets/securitynetIcon.png")} />,
  screen: "SecurityNet"
}

//export parsing of motivator type
export function parseMotivator(name: keyof MotivatorTypes){
  switch (name) {
    case "situationControl":
      return situationControl
    case "relaxation":
      return relaxation
    case "noMotivator":
    default:
      return { name: "Not a Motivator", screen: "NotImplemented"} as MotivatorProps
  }
}

const styles = StyleSheet.create({
  image: {
    width: 54,
    height: 54
  }
});

