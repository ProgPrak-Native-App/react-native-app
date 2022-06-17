import React from "react";
import Title from "../../Title";
import KopfsachenButton from "../../KopfsachenButton";
import { parseMotivator } from "../MotivatorProps";
import { MotivatorRoutes } from "../Motivator";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { NavigationProp } from "@react-navigation/core";
import SecurityNetAssistance from "./SecurityNetAssistance";

export type SafetyNetDType = {
  type: string,
  icon: JSX.Element,
  title: string,
  strategies: [string, string, string],
}

export default function SecurityNetComponent() {
  const props = parseMotivator("relaxation")
  var iconSize = 40

  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();

  const currentComponent: SafetyNetDType = {
    type: "NONE",
    icon: <Text/>,
    title: "",
    strategies: ["", "", ""],
  }

  return (
    <>
      <Title color={props.color} Icon={() => props.icon} text={props.name}/>
      <View style={styles.container}>
        <Text style={styles.text}>Das bereitet mir Freude:</Text>
        <TextInput style={styles.textinput} placeholder="..." onChangeText={(input) => currentComponent.title=input}/>
        <Text style={styles.text}>Zu welcher Kategorie gehört diese Ressource?</Text>
        <View style={styles.iconcontainer}>
          <Pressable onPress={() => currentComponent.type = "Persönlichkeitseigenschaft"}>
            <Ionicons name="person" size={iconSize} style={styles.icon}></Ionicons>
          </Pressable>
          <Pressable onPress={() => currentComponent.type = "Freunde"}>
            <FontAwesome5 name="user-friends" size={iconSize} style={styles.icon}></FontAwesome5>
          </Pressable>
          <Pressable onPress={() => currentComponent.type = "Tiere"}>
            <FontAwesome name="paw" size={iconSize} style={styles.icon}></FontAwesome>
          </Pressable>
          <Pressable onPress={() => currentComponent.type = "Sport"}>
            <FontAwesome name="soccer-ball-o" size={iconSize} style={styles.icon}></FontAwesome>
          </Pressable>
          <Pressable onPress={() => currentComponent.type = "Musik"}>
            <FontAwesome name="music" size={iconSize} style={styles.icon}></FontAwesome>
          </Pressable>
          <Pressable onPress={() => currentComponent.type = "Filme"}>
            <FontAwesome5 name="tv" size={iconSize} style={styles.icon}></FontAwesome5>
          </Pressable>
        </View>
        <KopfsachenButton style={[styles.button, styles.shadow]} onPress={() => navigation.navigate("SecurityNetAssistance")}>
            Ressource hinzufügen!
        </KopfsachenButton>
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
    letterSpacing: 0,
    textAlign: "center",
  },
  icon: {
    marginHorizontal: 8,
  },
  iconcontainer: {
    flexDirection: "row",
  },
  textinput: {
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 9,
    height: 50,
    width: 250,
  },
  button: {
    paddingHorizontal: 4,
    alignSelf: 'center'
  },
  shadow: {
    elevation: 4,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
