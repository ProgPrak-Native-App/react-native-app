import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { BLACK, DARK_GREY, PRIMARY, RED, SIZES, TERTIARY, WHITE } from '../styles';
import Title from './Title';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MotivatorNavigatorProps, MotivatorRoutes } from '../../motivators/MotivatorNavigator';
import { CompositeScreenProps } from '@react-navigation/native';
import { motivators } from '../../motivators/model';

type Props = CompositeScreenProps<NativeStackScreenProps<MotivatorRoutes, 'Feedback'>, MotivatorNavigatorProps>;

export default function Feedback({ navigation, route }: Props) {
  const { motivator } = route.params;

  const [comment, setComment] = useState<string>();
  const [rating, setRating] = useState<'positive' | 'negative'>();
  const pressedGreenStyle = { borderColor: 'black', borderWidth: 2, backgroundColor: 'lightgreen' };
  const pressedRedStyle = { borderColor: 'black', borderWidth: 2, backgroundColor: 'red' };

  return (
    <>
      <Title
        back
        color={motivators[motivator].color}
        text={motivators[motivator].name}
        Icon={() => motivators[motivator].icon}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Wie hat Dir die Übung gefallen?</Text>
        <View style={styles.buttons}>
          <Pressable
            accessibilityHint="Drücke hier falls Dir die Uebung gefallen hat"
            onPress={() => setRating(rating === 'positive' ? undefined : 'positive')}
            style={[{ backgroundColor: PRIMARY }, styles.feedback, rating === 'positive' ? pressedGreenStyle : {}]}>
            <FontAwesome5 color="black" name="smile-beam" size={30} style={styles.icons} />
            <Text style={styles.text}>Gut</Text>
          </Pressable>
          <Pressable
            accessibilityHint="Drücke hier falls Dir die Uebung nicht gefallen hat"
            onPress={() => setRating(rating === 'negative' ? undefined : 'negative')}
            style={[{ backgroundColor: RED }, styles.feedback, rating === 'negative' ? pressedRedStyle : {}]}>
            <FontAwesome5 color="black" name="frown" size={30} style={styles.icons} />
            <Text style={styles.text}>Schlecht</Text>
          </Pressable>
        </View>
        <Text style={styles.label}>Kommentar (optional):</Text>
        <TextInput
          accessibilityHint="Optional: Hinterlasse hier dein Feedback"
          accessibilityLabel="Dein Feedback"
          onChangeText={setComment}
          placeholder="Dein Feedback..."
          placeholderTextColor="#4F4F4F"
          style={styles.input}
          value={comment}
        />
        <View style={styles.buttons}>
          <Pressable
            accessibilityHint="Zurück zum Intro Screen"
            onPress={() => navigation.navigate('NewMotivator')}
            style={({ pressed }) => [
              { backgroundColor: pressed ? PRIMARY : TERTIARY },
              styles.button,
              { marginRight: 20 },
            ]}>
            <Text style={styles.text}>Andere Strategie ausprobieren</Text>
          </Pressable>
          <Pressable
            accessibilityHint="Übung beenden"
            onPress={() => navigation.navigate('MotivatorCompleted', { motivator })}
            style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : TERTIARY }, styles.button]}>
            <Text style={styles.text}>Done</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  heading: {
    marginVertical: 5,
    fontSize: SIZES.font * 1.3,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    fontSize: SIZES.font,
    alignSelf: 'center',
    backgroundColor: WHITE,
    borderColor: BLACK,
    borderWidth: 1,
    minWidth: SIZES.target_size,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderRadius: 15,
  },
  icons: {
    alignSelf: 'center',
    marginBottom: 2,
  },
  label: {
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
    fontSize: SIZES.font,
    marginLeft: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: SIZES.font,
    lineHeight: SIZES.default_line_height,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  feedback: {
    justifyContent: 'center',
    marginTop: 20,
    width: '48%',
    borderRadius: 20,
    minHeight: 48,
    borderColor: DARK_GREY,
    borderWidth: 2,
    padding: 8,
  },
  button: {
    flexGrow: 0,
    flexShrink: 1,
    justifyContent: 'center',
    marginTop: 10,
    width: '60%',
    minHeight: SIZES.target_size,
    borderColor: BLACK,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
  },
});
