import Title from "../Title";
import React from "react";
import { POSITIVE } from "../../styles";
import { StyleSheet, Text, View } from "react-native";
import KopfsachenButton from "../KopfsachenButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TabRoutes } from "../../App";

export default function PositiveIntro() {
  const navigation = useNavigation<NavigationProp<TabRoutes>>();

  return (
    <>
      <Title
        text="Stimmungstagebuch"
        color={POSITIVE}
        Icon={() => <FontAwesome5 name="smile-beam" size={80} />}
        back
      />
      <Text style={styles.text}>
        Wenn du dich gerade gut fühlst, ist das genau der richtige Moment, um an deinen Starkmachern
        zu arbeiten!
      </Text>
      <View style={styles.buttonList}>
        <KopfsachenButton onPress={() => navigation.navigate("Home")} style={styles.button}>
          Lieber nicht.
        </KopfsachenButton>
        <KopfsachenButton onPress={() => navigation.navigate("Motivators")} style={styles.button}>
          Let's go!
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
