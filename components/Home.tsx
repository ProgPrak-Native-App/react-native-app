import Title from './Title';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TERTIARY } from '../colors';

export default function Home() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Title text="Herzlich Willkommen!" />
      <Text style={styles.text}>Schön, dass du da bist.</Text>
      <Pressable onPress={() => navigation.navigate('MoodDiary')} style={styles.button}>
        <Text style={styles.buttonText}>Ab zum Stimmungstagebuch.</Text>
      </Pressable>
      <Pressable onPress={() => console.log('Not implemented')} style={styles.button}>
        <Text style={styles.buttonText}>Ich möchte an meinen offenen Aufgaben weiterarbeiten.</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxHeight: 600,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  button: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '10%',
    backgroundColor: TERTIARY,
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
  },
});
