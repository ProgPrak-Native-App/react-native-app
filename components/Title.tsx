import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { PRIMARY } from "../colors";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type Props = {
  text: string;
  color?: string;
  Icon?: () => JSX.Element;
  back?: true;
};

export default function Title({ text, color, Icon, back }: Props) {
  const navigation = useNavigation<NavigationProp<never>>();

  return (
    <View style={[styles.container, { backgroundColor: color ?? PRIMARY }]}>
      {back && navigation.canGoBack() && (
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={30} color="black" />
          <Text style={{ left: -5, fontSize: 12 }}>Zurück</Text>
        </Pressable>
      )}
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
  backButton: {
    position: "absolute",
    top: 15,
    left: 15,
    flexDirection: "row",
    alignItems: "center",
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
    marginTop: 20,
  },
});
