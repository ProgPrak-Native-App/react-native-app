import React from "react";
import Title from "../../Title";
import KopfsachenButton from "../../KopfsachenButton";
import {parseMotivator } from "../MotivatorProps";
import { SafetyNetDType } from "./SecurityNet";
import { currentComponent } from "./SecurityNetComponent";
import { View, Text, StyleSheet, Image, Pressable, TextInput } from "react-native";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MotivatorRoutes } from "../Motivator";

export var completeComponent = currentComponent

function appendToList(navigation: NavigationProp<MotivatorRoutes>, newComponent: SafetyNetDType) {
  // TODO: send SafetyNetItem to DB with POST
  navigation.navigate("SecurityNet")
}

export default function SecurityNetAssistance() {

  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();

  return (
    <>
      <Title text="Mein Sicherheitsnetz"></Title>
      <View style={styles.container}>
        <Text style={styles.text}>Trage 3 Wege ein, auf denen dir diese Person oder Aktivität helfen kann.</Text>
        <TextInput style={styles.textinput} placeholder="..." onChangeText={(input) => completeComponent.strategies[0] = input}></TextInput>
        <TextInput style={styles.textinput} placeholder="..." onChangeText={(input) => completeComponent.strategies[1] = input}></TextInput>
        <TextInput style={styles.textinput} placeholder="..." onChangeText={(input) => completeComponent.strategies[2] = input}></TextInput>
      </View>
      <KopfsachenButton style={[styles.button, styles.shadow]} onPress={() => appendToList(navigation, completeComponent)}>Weiter!</KopfsachenButton>
    </>
  )
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
