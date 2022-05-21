import Title from "./Title";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import KopfsachenButton from "./KopfsachenButton";

export default function Home() {
  const navigation = useNavigation<any>();

  return (
    <>
      <Title text="Herzlich Willkommen!" />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Schön, dass du da bist.</Text>
        </View>
        <KopfsachenButton onPress={() => navigation.navigate("MoodDiary")} style={styles.button}>
          Ab zum Stimmungstagebuch.
        </KopfsachenButton>
        <KopfsachenButton onPress={() => console.log("Not implemented")} style={styles.button}>
          Ich möchte an meinen offenen Aufgaben weiterarbeiten.
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
    fontSize: 30,
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
    marginBottom: 10
  },
});
