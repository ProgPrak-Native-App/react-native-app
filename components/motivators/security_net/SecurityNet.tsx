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

export default function SecurityNet() {
  var iconSize = 40
  const props = parseMotivator("relaxation")

  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();

  // TODO: create new component that displays all the safetyNetItems of category in a grid view

  return (
    <>
      <Title color={props.color} Icon={() => props.icon} text={props.name}/>
      <View style={styles.container}>
        <Text style={styles.text}>Welche Personen oder Aktivitäten bereiten dir im Alltag Freude und geben dir Antrieb?</Text>
        <Image source={require("../../../assets/securitynetIcon.png")} style={{height: 180, width: 180}} />
        <Pressable onPress={() => navigation.navigate("SecurityNetComponent")}>
          <Image source={require("../../../assets/icon_plus.png")} style={{height: 64, width: 64}}/>
        </Pressable>
      </View>
      <View style={styles.iconcontainer}>
        <Pressable onPress={() => navigation.navigate("SecurityNetItemView")}>
          <Ionicons name="person" size={iconSize} style={styles.icon}></Ionicons>
        </Pressable>
        <Pressable>
          <FontAwesome5 name="user-friends" size={iconSize} style={styles.icon}></FontAwesome5>
        </Pressable>
        <Pressable>
          <FontAwesome name="paw" size={iconSize} style={styles.icon}></FontAwesome>
        </Pressable>
        <Pressable>
          <FontAwesome name="soccer-ball-o" size={iconSize} style={styles.icon}></FontAwesome>
        </Pressable>
        <Pressable>
          <FontAwesome name="music" size={iconSize} style={styles.icon}></FontAwesome>
        </Pressable>
        <Pressable>
          <FontAwesome5 name="tv" size={iconSize} style={styles.icon}></FontAwesome5>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: 300,
    marginHorizontal: 25,
  },
  text: {
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0
  },
  icon: {
    marginHorizontal: 8
  },
  iconcontainer: {
    flexDirection: "row",
  }
});
