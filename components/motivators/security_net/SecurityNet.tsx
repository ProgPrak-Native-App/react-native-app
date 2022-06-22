import React from "react";
import OldMotivatorPractice from "../old_motivator/OldMotivatorPractice";
import {parseMotivator } from "../MotivatorProps";
import { MotivatorRoutes } from "../Motivator";
import Title from "../../Title";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons";

export type SafetyNetDType = {
  type: string,
  icon: JSX.Element | undefined,
  title: string,
  strategies: [string, string, string],
}

export let iconMap = new Map<String, JSX.Element>([
  ["personality", <Ionicons name="person"></Ionicons>],
  ["friends", <FontAwesome5 name="user-friends"></FontAwesome5>],
  ["sport", <FontAwesome name="soccer-ball-o"></FontAwesome>],
  ["music", <FontAwesome name="music"></FontAwesome>],
  ["other", <FontAwesome5 name="tv"></FontAwesome5>],
  ["pet", <FontAwesome name="paw"></FontAwesome>],
]);

export var safetyList : SafetyNetDType[] = []

async function getSecurityNet() {
  return (await fetch('http://localhost:4010/safetyNet/285')
    .then(response => response.json()))
}

export default function SecurityNet() {
  console.log(safetyList)
  const props = parseMotivator("relaxation")

  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();

  console.log(getSecurityNet());

  return (
    <>
      <Title color={props.color} Icon={() => props.icon} text={props.name}/>
      <View style={styles.container}>
        <Text style={styles.text}>Welche Personen oder Aktivitäten bereiten dir im Alltag Freude und geben dir Antrieb?</Text>
        <Image source={require("../../../assets/securitynetIcon.png")} style={styles.icon} />
        <Pressable onPress={() => navigation.navigate("SecurityNetComponent")}>
          <Image source={require("../../../assets/icon_plus.png")} style={{height: 64, width: 64}}/>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: 450,
    marginHorizontal: 25,
  },
  text: {
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0
  },
  icon: {
    height: 256,
    width: 256,
  }
});
