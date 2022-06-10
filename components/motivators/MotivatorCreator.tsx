import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { TERTIARY } from "../../styles";
import { AntDesign } from "@expo/vector-icons";
import MotivatorOverview from "./MotivatorOverview";
import Title from "../Title";

export default function MotivatorCreator() {
    return (
      <>
        <Title text="Neue Starkmacher"/>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Welche neuen Starkmacher möchtest du heute ausprobieren?</Text>
          </View>
          <View style={styles.motivatorContainer}>
            <View style={styles.arrowContainer}>
              <AntDesign name="left" size={48} />
            </View>
            <MotivatorOverview icon={require("../../assets/reframeicon.png")} title="Reframing" description="Beim Reframing geht es darum, deine eigene Einschätzung der Situation zu überprüfen und ggf. zu einer anderen Interpretation zu kommen."/>
            <Pressable>
              <View style={styles.arrowContainer}>
                <AntDesign name="right" size={48}/>
              </View>
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Let's go!
          </Text>
        </Pressable>
      </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    text: {
      fontSize: 20,
      textAlign: "center",
    },
    textContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 25,
    },
    motivatorContainer: {
      flexShrink: 1,
      flexGrow: 0,
      flexDirection: "row",
      alignItems: "center",
    },
    arrowContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      flexGrow: 1/16,
      flexShrink: 1,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: "10%",
      backgroundColor: TERTIARY,
      borderWidth: 1,
      borderRadius: 20,
      marginBottom: 10,
      marginTop: 5,
    },
    buttonText: {
      textAlign: "center",
    },
});