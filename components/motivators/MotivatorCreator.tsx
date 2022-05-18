import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { TERTIARY, MOTIVATOR } from "../../colors";
import { AntDesign } from "@expo/vector-icons";
import Motivator from "./Motivator";
import Title from "../Title";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function CreateMotivator() {
    console.log("TEST");
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
            <Motivator icon={require("../../assets/reframeicon.png")} title="Reframing" description="Beim Reframing geht es darum, deine eigene Einschätzung der Situation zu überprüfen und ggf. zu einer anderen Interpretation zu kommen."/>
            <View style={styles.arrowContainer}>
              <AntDesign name="right" size={48}/>
            </View>
          </View>
        </View>
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
      flex:1,
      flexWrap: "wrap",
      fontSize: 20,
      textAlign: "center",
    },
    textContainer: {
      flex: 1,
      flexGrow: 0,
      flexShrink: 1,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 25,
      marginVertical: 50,
    },
    motivatorContainer: {
      flex: 1,
      flexShrink: 1,
      flexGrow: 0,
      marginHorizontal: 25,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      alignSelf: "center",
    },
    arrowContainer: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
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