import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TERTIARY, MOTIVATOR } from "../../colors";
import Motivator from "./Motivator";
import Title from "../Title";

export default function CreateMotivator() {
    return (
      <>
        <Title text="Neue Starkmacher"/>
        <View style={motivatorStyles.container}>
          <View style={motivatorStyles.textContainer}>
            <Text style={motivatorStyles.text}>Welche neuen Starkmacher möchtest du heute ausprobieren?</Text>
          </View>
            <Motivator title="Test" description="Description"/>
        </View>
      </>
    );
}

const motivatorStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
      },
      text: {
        fontSize: 20,
        textAlign: "center",
      },
      textContainer: {
        flex: 1,
        flexGrow: 0,
        flexShrink: 1,
        justifyContent: "center",
        marginHorizontal: 20,
        marginVertical: 45,
      },
      button: {
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 80,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "10%",
        backgroundColor: TERTIARY,
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10
      },
      buttonText: {
        textAlign: "center",
      },
});