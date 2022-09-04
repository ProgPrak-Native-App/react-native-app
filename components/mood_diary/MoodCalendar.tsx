import React, { useEffect, useState } from 'react';
import { Image, Pressable, RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars/src';
import { DateData } from 'react-native-calendars/src/types';
import BasicDay from 'react-native-calendars/src/calendar/day/basic';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { LocaleConfig } from 'react-native-calendars';
import { LocalDate } from '@js-joda/core';
import Title from '../shared/components/Title';
import { MoodDiaryRoutes, MoodDiaryScreenProps } from './MoodDiary';
import MoodDiaryClient, { Mood } from '../../api/MoodDiaryClient';
import { useUserContext } from '../UserProvider';

LocaleConfig.locales.de = {
  monthNames: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
};
LocaleConfig.defaultLocale = 'de';

function DayWithMood({ mood }: { mood: Mood }) {
  const navigation = useNavigation<NavigationProp<MoodDiaryRoutes>>();
  if (mood.mood_type === 'positive') {
    return (
      <Pressable onPress={() => navigation.navigate('MoodEntry', { id: mood.id })}>
        <Image source={require('../../assets/emoji_happy.png')} style={styles.icon} />
      </Pressable>
    );
  } else if (mood.mood_type === 'neutral') {
    return (
      <Pressable onPress={() => navigation.navigate('MoodEntry', { id: mood.id })}>
        <Image source={require('../../assets/emoji_neutral.png')} style={styles.icon} />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={() => navigation.navigate('MoodEntry', { id: mood.id })}>
        <Image source={require('../../assets/emoji_sad.png')} style={styles.icon} />
      </Pressable>
    );
  }
}

function AddMoodButton() {
  const navigation = useNavigation<NavigationProp<MoodDiaryRoutes>>();
  return (
    <Pressable onPress={() => navigation.navigate('MoodEntry')}>
      <Image source={require('../../assets/icon_plus.png')} style={styles.icon} />
    </Pressable>
  );
}

const Day = (moods: Record<string, Mood>) => (props: { date?: DateData }) => {
  const date = LocalDate.parse(props.date!.dateString);
  const moodAtDate = moods[date.toString()];
  if (moodAtDate) {
    // User has previously entered a mood for this day, so we show it
    return <DayWithMood mood={moodAtDate} />;
  } else if (date.equals(LocalDate.now())) {
    // We show the button to enter today's mood
    return <AddMoodButton />;
  } else {
    // User has not entered a mood for this day, so we use react-native-calendars' default day component
    return <BasicDay {...props} date={props.date?.dateString} state="inactive" />;
  }
};

function moodsToMap(moods: Mood[]): Record<string, Mood> {
  const result: Record<string, Mood> = {};
  for (const mood of moods) {
    const previousAtDay = mood.mood_day in result && result[mood.mood_day];
    if (!previousAtDay || previousAtDay.id < mood.id) {
      result[mood.mood_day] = mood;
    }
  }
  return result;
}

export default function MoodCalendar({ route }: MoodDiaryScreenProps<'Calendar'>) {
  const [moodsByDate, setMoodsByDate] = useState<Record<string, Mood>>({});
  const [loading, setLoading] = useState<boolean>(true);

  const { sessionToken } = useUserContext();
  const client = new MoodDiaryClient(sessionToken);

  function refreshMoods() {
    setLoading(true);
    client
      .getMoods()
      .then((moods) => setMoodsByDate(moodsToMap(moods)))
      .finally(() => setLoading(false));
  }

  // refresh whenever the screen is navigated to (which causes route to change)
  useEffect(refreshMoods, [route]);

  return (
    <>
      <Title text="Stimmungstagebuch" />
      <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={refreshMoods} />}>
        <Calendar
          dayComponent={Day(moodsByDate)}
          displayLoadingIndicator={loading}
          theme={{ calendarBackground: undefined }}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
