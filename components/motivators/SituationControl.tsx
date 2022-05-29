import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import OldMotivatorPractice, { Exercise } from "./OldMotivatorPractice";

const mockExercise1: Exercise = {title: "ALPEN-Methode", screen: "NotImplemented"}
const mockExercise2: Exercise = {title: "übung 2", screen: "NotImplemented"}
const mockExercise3: Exercise = {title: "übung 3", screen: "NotImplemented"}

const mockExercises = [mockExercise1, mockExercise2, mockExercise3]

export default function SituationControl() {
  const icon = <FontAwesome5 name="list" size={60} color="black" />
  return (
    <OldMotivatorPractice exercises={mockExercises} motivatorName={"Situationskontrolle"} motivatorColor={"#F2C7D0"} motivatorIcon={() => icon}/>
  );
}

