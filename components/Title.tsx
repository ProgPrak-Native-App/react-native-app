import { BackHandler, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PRIMARY } from "../colors";

type Props = {
  text: string;
  color?: string;
  Icon?: () => JSX.Element;
};

export default function Title({ text, color, Icon }: Props) {
  return (
    <View style={[styles.container, { backgroundColor: color ?? PRIMARY }]}>
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
      {Icon && (
        <View style={styles.icon}>
          <Icon />
        </View>
      )}
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
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    marginTop: 20
  },
});
