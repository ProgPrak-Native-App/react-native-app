import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { PRIMARY } from "../colors";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type Props = {
  text: string;
  color?: string;
  Icon?: () => JSX.Element;
  back?: true;
  style?: StyleProp<ViewStyle>;
};

export default function Title({ text, color, Icon, back, style}: Props) {
  const navigation = useNavigation<NavigationProp<never>>();

  return (
    <View style={[styles.container, { backgroundColor: color ?? PRIMARY }, style]}>
      {back && navigation.canGoBack() && (
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign color="black" name="left" size={30} />
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
    position: 'absolute',
    top: 15,
    left: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginTop: 20,
  },
});
