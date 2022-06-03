import { StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MotivatorRoutes } from "./Motivator";
import KopfsachenButton from "../KopfsachenButton";
import Title from "../Title";

export default function MotivatorSelection() {
  const navigation = useNavigation<NavigationProp<MotivatorRoutes>>();

  return (
    <>
      <Title text="Starkmacher" />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Dieser Screen wird in Issue #4 implementiert.</Text>
        </View>
        <KopfsachenButton onPress={() => navigation.navigate("MotivatorCreator")} style={styles.button}>
          Neue Starkmacher entdecken!
        </KopfsachenButton>
        <KopfsachenButton onPress={() => navigation.navigate("SituationControl")} style={styles.button}>
          Alter Starkmacher (Situationskontrolle).
        </KopfsachenButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 150,
    justifyContent: "center",
  },
  button: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 80,
    marginHorizontal: "10%",
    marginBottom: 10,
  },
});
