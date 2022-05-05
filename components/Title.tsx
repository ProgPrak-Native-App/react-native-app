import { BackHandler, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PRIMARY } from "../colors";
import { useNavigation } from "@react-navigation/native";

type Props = {
  text: string;
};

export default function Title({ text }: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="help-circle-outline"
        size={40}
        style={styles.helpButton}
        onPress={() => console.log("Help!")}
      />
      <MaterialCommunityIcons
        name="exit-to-app"
        size={40}
        style={styles.exitButton}
        onPress={() => BackHandler.exitApp()}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  helpButton: {
    position: "absolute",
    top: 5,
    left: 5,
  },
  exitButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  container: {
    backgroundColor: PRIMARY,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
