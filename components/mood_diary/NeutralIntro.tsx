import Title from "../Title";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabRoutes } from "../../App";
import { NEUTRAL } from "../../colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import KopfsachenButton from "../KopfsachenButton";

export default function NeutralIntro() {
  const navigation = useNavigation<NavigationProp<TabRoutes>>();

  return (
    <>
      <Title
        text="Stimmungstagebuch"
        color={NEUTRAL}
        Icon={() => <FontAwesome5 name="meh" size={80} />}
      />
      <Text style={styles.text}>
        Wenn du heute eher unmotiviert oder müde bist, kannst du entweder in deinem Sicherheitsnetz
        schauen, was dir sonst eine Freude bereitet oder du probierst eine neue Starkmacher-Übung
        aus!
      </Text>
      <View style={styles.buttonList}>
        <KopfsachenButton
          onPress={() => console.log("SafetyNet not implemented")}
          style={styles.button}
        >
          Sicherheitsnetz
        </KopfsachenButton>
        <KopfsachenButton onPress={() => navigation.navigate("Motivators")} style={styles.button}>
          Neue Starkmacher üben!
        </KopfsachenButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: "10%",
    fontSize: 18,
    lineHeight: 26,
    textAlign: "center",
  },
  buttonList: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    flexShrink: 1,
    flexBasis: "45%",
  },
});
