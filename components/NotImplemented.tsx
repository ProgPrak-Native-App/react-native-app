import { StyleSheet, Text, View } from "react-native";

export default function NotImplemented() {
  return (
    <View style={styles.container}>
      <Text>Not Implemented</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
