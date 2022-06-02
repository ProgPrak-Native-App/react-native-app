import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MotivatorRoutes } from "./Motivator";
import KopfsachenButton from "../KopfsachenButton";
import Title from "../Title";
import React, { ReactElement } from "react";
import { MotivatorProps } from "./OldMotivatorPractice";

async function getMotivators(){
  let motis: MotivatorProps[] = []
  return fetch('http://localhost:4010/motivator')
    .then(response => response.json())
    .then(data => {data.forEach(function (value: any) {
      let test: MotivatorProps = {
        motivatorName: value.type,
        motivatorIcon: () => <Image source={require("../../assets/motivator.png")} />,
        motivatorColor: '',
        exercises: []
      }
      motis.push(test)
    })
    }).catch(error => console.warn(error))
}

export default function MotivatorSelection() {
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();

  const icon = <Image source={require("../../assets/motivator.png")} />;

  return (
    <>
      <Title text="Meine Starkmacher" Icon={() => icon} color={'#F2C7D0'} />
      <View style={styles.container}>
        <Text style={styles.text}>Du hast schon so viele Starkmacher erkannt.{"\n"}Wenn du an deinen bestehenden
          Starkmachern arbeiten willst, klicke einfach auf das entsprechende Symbol! Ansonsten kriegst du nach einem
          Klick auf “Neue Starkmacher entdecken” eine Auswahl von neuen Übungen.</Text>
      </View>
      <KopfsachenButton onPress={() => navigation.navigate("MotivatorCreator")} style={styles.button}>
        Neue Starkmacher entdecken!
      </KopfsachenButton>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    margin: 25,
    lineHeight: 26,
    letterSpacing: 0
  },
  button: {
    marginHorizontal: "13%",
  },
});
