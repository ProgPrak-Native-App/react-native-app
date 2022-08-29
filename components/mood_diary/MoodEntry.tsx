import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Title from '../shared/components/Title';
import { MoodDiaryRoutes, MoodDiaryScreenProps } from './MoodDiary';
import { NEGATIVE, NEUTRAL, POSITIVE, SIZES } from '../shared/styles';
import MoodDiaryClient, { MoodType } from '../../api/MoodDiaryClient';
import { LocalDateTime } from '@js-joda/core';

const client = new MoodDiaryClient('https://diary.api.live.mindtastic.lol');

function sendMood(moodType: MoodType, id?: number) {
  if (id === undefined || id === null) {
    client.addMood({
      id: -1,
      mood_day: LocalDateTime.now().toString(),
      mood_descr: 'test',
      mood_type: moodType,
    });
  } else {
    client.updateMood({
      id,
      mood_day: LocalDateTime.now().toString(),
      mood_descr: 'test',
      mood_type: moodType,
    });
  }
}

type ButtonProps = {
  color: string;
  iconName: string;
  onPress: () => void;
  descriptions: string[];
};

function MoodButton({ color, iconName, onPress, descriptions }: ButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.moodButton, { backgroundColor: color }]}>
      <View style={styles.moodButtonInner}>
        <FontAwesome5 color="black" name={iconName} size={80} />
        <View style={styles.moodDescriptionList}>
          {descriptions.map((description) => (
            <Text key={description} style={styles.moodDescription}>
              {description}
            </Text>
          ))}
        </View>
      </View>
    </Pressable>
  );
}

const introScreenNames: Record<MoodType, keyof MoodDiaryRoutes> = {
  positive: 'PositiveIntro',
  neutral: 'NeutralIntro',
  negative: 'NegativeIntro',
};

export default function MoodEntry({ navigation, route }: MoodDiaryScreenProps<'MoodEntry'>) {
  const onPress = (mood: MoodType) => () => {
    if (route.params?.returnFrom) {
      // final move submitted -> submit and return to mood calendar, clearing the history of the mood diary navigator

      sendMood(mood, route.params.id);
      navigation.reset({
        routes: [{ name: 'Calendar' }],
      });
    } else {
      navigation.navigate(introScreenNames[mood]);
    }
  };

  return (
    <>
      <Title back text="Stimmungstagebuch" />
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>
            {route.params?.returnFrom === 'Motivator'
              ? 'Welche Stimmung möchtest du für heute final abgeben?'
              : "Hallo, wie geht's dir?"}
          </Text>
        </View>
        <MoodButton
          color={NEGATIVE}
          descriptions={['wütend', 'traurig', 'ängstlich']}
          iconName="frown"
          onPress={onPress('negative')}
        />
        <MoodButton
          color={NEUTRAL}
          descriptions={['unmotiviert', 'müde', 'gleichgültig']}
          iconName="meh"
          onPress={onPress('neutral')}
        />
        <MoodButton
          color={POSITIVE}
          descriptions={['fröhlich', 'aufgeregt', 'entspannt']}
          iconName="smile-beam"
          onPress={onPress('positive')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    maxWidth: 600,
    width: '100%',
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  greetingContainer: {
    justifyContent: 'center',
    flexGrow: 0.2,
    flexShrink: 1,
    flexBasis: 100,
    margin: SIZES.min_margin,
  },
  moodButton: {
    flexGrow: 1,
    flexShrink: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moodButtonInner: {
    flexDirection: 'row',
  },
  moodDescriptionList: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '5%',
    width: 100,
  },
  moodDescription: {
    fontSize: 18,
  },
});
