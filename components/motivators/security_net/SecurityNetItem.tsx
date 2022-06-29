import React from "react";
import Title from "../../Title";
import KopfsachenButton from "../../KopfsachenButton";
import { parseMotivator } from "../MotivatorProps";
import { empty, iconMap, SafetyNetDType } from "./SecurityNet";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

function setTypeAndIcon(component: SafetyNetDType, type: string) {
  component.type = type;
  component.icon = iconMap.get(type);
}

export var currentComponent = empty;

export default function SecurityNetItem({ navigation, route }: any) {
  const props = parseMotivator("relaxation")
  var iconSize = 40

  currentComponent = route.params.component

  return (
    <>
      <Title color={props.color} Icon={() => props.icon} text={props.name}/>
      <View style={styles.container}>
        <Text style={styles.text}>Das bereitet mir Freude:</Text>
        <TextInput style={styles.textinput} placeholder="..." onChangeText={(input) => currentComponent.title=input}/>
        <Text style={styles.text}>Zu welcher Kategorie gehört diese Ressource?</Text>
        <View style={styles.iconcontainer}>
          <Pressable onPress={() => setTypeAndIcon(currentComponent, "personality")}>
            <Ionicons name="person" size={iconSize} style={styles.icon}></Ionicons>
          </Pressable>
          <Pressable onPress={() => setTypeAndIcon(currentComponent, "friends")}>
            <FontAwesome5 name="user-friends" size={iconSize} style={styles.icon}></FontAwesome5>
          </Pressable>
          <Pressable onPress={() => setTypeAndIcon(currentComponent, "pet")}>
            <FontAwesome name="paw" size={iconSize} style={styles.icon}></FontAwesome>
          </Pressable>
          <Pressable onPress={() => setTypeAndIcon(currentComponent, "sport")}>
            <FontAwesome name="soccer-ball-o" size={iconSize} style={styles.icon}></FontAwesome>
          </Pressable>
          <Pressable onPress={() => setTypeAndIcon(currentComponent, "music")}>
            <FontAwesome name="music" size={iconSize} style={styles.icon}></FontAwesome>
          </Pressable>
          <Pressable onPress={() => setTypeAndIcon(currentComponent, "other")}>
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
