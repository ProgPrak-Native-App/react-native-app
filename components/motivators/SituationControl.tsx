import React from "react";
import { View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import PracticeOldMotivator, { exercise } from "./PracticeOldMotivator";

let mockExercise1: exercise = {title: "ALPEN-Methode", screen: "Home"}
let mockExercise2: exercise = {title: "übung 2", screen: "Home"}
let mockExercise3: exercise = {title: "übung 3", screen: "Home"}

let mockExercises = [mockExercise1, mockExercise2, mockExercise3]

export default function SituationControl() {
  const icon = <FontAwesome5 name="list" size={60} color="black" />
  return (
    <>
      <View>
        <PracticeOldMotivator exercises={mockExercises} motivatorName={"Situationskontrolle"} motivatorColor={"#F2C7D0"} motivatorIcon={() => icon}/>
      </View>
    </>
  );
}

