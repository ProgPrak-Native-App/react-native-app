import { Text, TextProps } from "react-native";
import React from "react";

export default function Bold(props: TextProps) {
  return <Text style={[props.style, { fontWeight: "bold" }]} {...props} />;
};
