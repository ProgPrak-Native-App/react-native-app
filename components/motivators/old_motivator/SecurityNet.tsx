import React from "react";
import OldMotivatorPractice from "./OldMotivatorPractice";
import {parseMotivator } from "../MotivatorProps";

export default function SecurityNet() {
  const props = parseMotivator("relaxation")
  return (
    <OldMotivatorPractice screen={"NotImplemented"} exercises={props.exercises} name={props.name} color={props.color} icon={props.icon}/>
  );
}

