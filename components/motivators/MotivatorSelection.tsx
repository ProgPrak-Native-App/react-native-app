import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MotivatorRoutes } from "./Motivator";
import KopfsachenButton from "../KopfsachenButton";
import Title from "../Title";
import React, { useEffect, useState } from "react";
import { MotivatorProps, MotivatorTypes, parseMotivator } from "./MotivatorProps";
import { MOTIVATOR } from "../../styles";

async function getMotivators(){
  //change to BASE_URL once merged -> feature/7/wiki
  return (await fetch('http://localhost:4010/motivator')
    .then(response => response.json())
    .then((data: { type: keyof MotivatorTypes }[]) => data.map(value => parseMotivator(value.type)))
    .catch(()=>[parseMotivator("noMotivator")]))
}

function oldMotivatorGridView(motivators: MotivatorProps[]) {
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();
  return <>
    {motivators.map((data, index) => (
      <Pressable onPress={() => navigation.navigate(data.screen)} style={[styles.gridItem, { backgroundColor: data.color }, styles.shadow]} key={index}>
        <Text style={styles.text}>{data.name}</Text>
        {data.icon}
      </Pressable>
    ))}
  </>;
}

export default function MotivatorSelection() {
  const initialState: MotivatorProps[] = []
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();
  const [oldMotivators, setOldMotivators] = useState(initialState)

  //update state with motivators
  useEffect(() => {
    getMotivators().then(setOldMotivators);
  }, [])

  return (
    <>
      <Title style={styles.shadow} text="Meine Starkmacher" Icon={() => <Image source={require("../../assets/motivator.png")} />} color={MOTIVATOR.DEFAULT} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Du hast schon so viele Starkmacher erkannt.{"\n"}Wenn du an deinen bestehenden
            Starkmachern arbeiten willst, klicke einfach auf das entsprechende Symbol! Ansonsten kriegst du nach einem
            Klick auf “Neue Starkmacher entdecken” eine Auswahl von neuen Übungen.
          </Text>

          <KopfsachenButton onPress={() => navigation.navigate("MotivatorCreator")} style={[styles.button, styles.shadow]}>
            Neue Starkmacher entdecken!
          </KopfsachenButton>
        </View>

        <View style={styles.gridContainer}>
          {oldMotivatorGridView(oldMotivators)}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    alignItems: "center",
    justifyContent: "space-around",
    width: '46%',
    height: 120,
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#D3D3D3"
  },
  gridContainer: {
    marginVertical: 5,
    justifyContent: "space-evenly",
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    justifyContent: "space-around",
    height: 300,
    marginHorizontal: 25,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 26,
    letterSpacing: 0
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
  }
});
