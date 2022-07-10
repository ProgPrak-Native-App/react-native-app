import { View, Text, Pressable, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { BLACK, DARK_GREY, PRIMARY, RED, SIZES, TERTIARY, WHITE } from '../styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Title from './Title';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import MoodDiary from './mood_diary/MoodDiary';
import CompassionNavigation from './compassion/CompassionNavigation';
import MotivatorCompleted from './MotivatorCompleted';
import { MotivatorRoutes } from './motivators/Motivator';
import NewMotivator from './motivators/new_motivator/NewMotivator';

export type Props = {
  name: keyof FeedbackRoutes;
  title: string;
  color: string;
};

export type FeedbackRoutes = {
  Feedback: { name: string; title: string; color: string };
  NewMotivator: { screen: string };
  MoodDiary: { screen: string };
  CompassionNavigation: { screen: string };
  MotivatorCompleted: undefined;
};

export type FeedbackScreenProps<T extends keyof FeedbackRoutes> = NativeStackScreenProps<FeedbackRoutes, T>;

const Stack = createNativeStackNavigator<FeedbackRoutes>();

export function FeedbackNavigation({ route }: FeedbackScreenProps<'Feedback'>) {
  return (
    <>
      <Stack.Navigator initialRouteName="Feedback" screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen component={Feedback} initialParams={route.params} name="Feedback" />
        <Stack.Screen component={MoodDiary} name="MoodDiary" />
        <Stack.Screen component={CompassionNavigation} name="CompassionNavigation" />
        <Stack.Screen component={MotivatorCompleted} name="MotivatorCompleted" />
        <Stack.Screen component={NewMotivator} name="NewMotivator" />
      </Stack.Navigator>
    </>
  );
}

export default function Feedback({ route }: FeedbackScreenProps<'Feedback'>) {
  const navigation = useNavigation<NavigationProp<FeedbackRoutes>>();
  const { navigate } = useNavigation<NavigationProp<MotivatorRoutes>>();

  const { name, title, color } = route.params;

  const [comment, setComment] = useState('');
  const [greenBtn, setGreenBtn] = useState(false);
  const [redBtn, setRedBtn] = useState(false);
  const pressedGreenStyle = { borderColor: 'black', borderWidth: 2, backgroundColor: 'lightgreen' };
  const pressedRedStyle = { borderColor: 'black', borderWidth: 2, backgroundColor: 'red' };

  const handleNavigation = () => {
    if (name.toString() === 'MoodEntry') {
      navigation.navigate('MoodDiary', { screen: 'MoodEntry' });
    } else if (name.toString() === 'IntroScreen') {
      navigation.navigate('CompassionNavigation', { screen: 'IntroScreen' });
    } else if (name.toString() === 'MotivatorCompleted') {
      // const navigation = useNavigation<NavigationProp<FeedbackRoutes>>();
      // navigation.navigate('MotivatorCompleted');
    }
  };

  return (
    <>
      <Title back color={color} text={title} />
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Wie hat Dir die Übung gefallen?</Text>
        <View style={styles.buttons}>
          <Pressable
            accessibilityHint="Drücke hier falls Dir die Uebung gefallen hat"
            onPress={() => setGreenBtn((prev) => !prev)}
            style={[{ backgroundColor: PRIMARY }, styles.feedback, greenBtn ? pressedGreenStyle : {}]}>
            <FontAwesome5 color="black" name="smile-beam" size={30} style={styles.icons} />
            <Text style={styles.text}>Gut</Text>
          </Pressable>
          <Pressable
            accessibilityHint="Drücke hier falls Dir die Uebung nicht gefallen hat"
            onPress={() => setRedBtn((prev) => !prev)}
            style={[{ backgroundColor: RED }, styles.feedback, redBtn ? pressedRedStyle : {}]}>
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
            onPress={() => navigate('NewMotivator')}
            style={({ pressed }) => [
              { backgroundColor: pressed ? PRIMARY : TERTIARY },
              styles.button,
              { marginRight: 20 },
            ]}>
            <Text style={styles.text}>Andere Strategie ausprobieren</Text>
          </Pressable>
          <Pressable
            accessibilityHint="Übung beenden"
            onPress={handleNavigation}
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
