import { BackHandler, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY } from '../colors';

type Props = {
  text: string;
};

export default function Title({ text }: Props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="help-circle-outline"
        onPress={() => console.log('Help!')}
        size={40}
        style={styles.helpButton}
      />
      <MaterialCommunityIcons
        name="exit-to-app"
        onPress={() => BackHandler.exitApp()}
        size={40}
        style={styles.exitButton}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  helpButton: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  exitButton: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  container: {
    backgroundColor: PRIMARY,
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
