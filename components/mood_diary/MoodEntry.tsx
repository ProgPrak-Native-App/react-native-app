import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Title from "../Title";
import { useNavigation } from "@react-navigation/native";
import { NEGATIVE, NEUTRAL, POSITIVE } from "../../colors";

function MoodButton(props: {
  color: string;
  iconName: string;
  linkTo: string;
  descriptions: string[];
}) {
  const navigation = useNavigation<any>();
  const { color, iconName, linkTo, descriptions } = props;
  return (
    <Pressable
      style={[styles.moodButton, { backgroundColor: color }]}
      onPress={() => navigation.navigate(linkTo)}
    >
      <View style={styles.moodButtonInner}>
        <FontAwesome5 name={iconName} size={80} color="black" />
        <View style={styles.moodDescriptionList}>
          {descriptions.map((description) => (
            <Text key={description} style={styles.moodDescription}>
              {description}
            </Text>
          ))}
        </View>
      </View>
    </Pressable>
  );
}

export default function MoodEntry() {
  return (
    <>
      <Title text="Stimmungstagebuch" />
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hallo,{"\n"}wie geht's dir?</Text>
        </View>
        <MoodButton
          color={NEGATIVE}
          iconName="frown"
          linkTo="NegativeIntro"
          descriptions={["wütend", "traurig", "ängstlich"]}
        />
        <MoodButton
          color={NEUTRAL}
          iconName="meh"
          linkTo="NeutralIntro"
          descriptions={["unmotiviert", "müde", "gleichgültig"]}
        />
        <MoodButton
          color={POSITIVE}
          iconName="smile-beam"
          linkTo="PositiveIntro"
          descriptions={["fröhlich", "aufgeregt", "entspannt"]}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    maxWidth: 600,
    width: "100%",
  },
  greeting: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },
  greetingContainer: {
    justifyContent: "center",
    flexGrow: 0.2,
    flexShrink: 1,
    flexBasis: 100,
  },
  moodButton: {
    flexGrow: 1,
    flexShrink: 0.5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  moodButtonInner: {
    flexDirection: "row",
  },
  moodDescriptionList: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: "5%",
    width: 100,
  },
  moodDescription: {
    fontSize: 18,
  },
});
