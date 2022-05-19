import React from "react";
import Title from "./Title";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TERTIARY } from "../colors";

export default function Home() {
  const navigation = useNavigation<any>();

  return (
    <>
      <Title text="Herzlich Willkommen!" />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Schön, dass du da bist.</Text>
        </View>
        <Pressable onPress={() => navigation.navigate("MoodDiary")} style={styles.button}>
          <Text style={styles.buttonText}>Ab zum Stimmungstagebuch.</Text>
        </Pressable>
        <Pressable onPress={() => console.log("Not implemented")} style={styles.button}>
          <Text style={styles.buttonText}>
            Ich möchte an meinen offenen Aufgaben weiterarbeiten.
          </Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  textContainer: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 150,
    justifyContent: "center"
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
